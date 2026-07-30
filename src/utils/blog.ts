import type { Locale } from '../config/locales';
import type { BreakupCluster, BreakupPostRole } from '../config/breakup-clusters';
import { CLUSTER_META, topicHubPath } from '../config/breakup-clusters';

const DATE_LOCALES: Record<Locale, string> = {
  en: 'en-GB',
  es: 'es',
  fr: 'fr-FR',
  de: 'de-DE',
  pt: 'pt-PT',
  pl: 'pl-PL',
};

const BLOG_UI: Record<
  Locale,
  {
    backToBlog: string;
    minRead: (minutes: number) => string;
    relatedArticles: string;
    startHere: string;
    readArticle: string;
    inThisTopic: string;
    topicHub: string;
    browseTopics: string;
  }
> = {
  en: {
    backToBlog: 'Back to blog',
    minRead: (m) => `${m} min read`,
    relatedArticles: 'More to read',
    startHere: 'Start here',
    readArticle: 'Read article →',
    inThisTopic: 'In this topic',
    topicHub: 'View topic',
    browseTopics: 'Browse by topic',
  },
  es: {
    backToBlog: 'Volver al blog',
    minRead: (m) => `${m} min de lectura`,
    relatedArticles: 'Más artículos',
    startHere: 'Empieza aquí',
    readArticle: 'Leer artículo →',
    inThisTopic: 'En este tema',
    topicHub: 'Ver tema',
    browseTopics: 'Explorar por tema',
  },
  fr: {
    backToBlog: 'Retour au blog',
    minRead: (m) => `${m} min de lecture`,
    relatedArticles: 'À lire aussi',
    startHere: 'Commencez ici',
    readArticle: "Lire l'article →",
    inThisTopic: 'Dans ce sujet',
    topicHub: 'Voir le sujet',
    browseTopics: 'Parcourir par sujet',
  },
  de: {
    backToBlog: 'Zurück zum Blog',
    minRead: (m) => `${m} Min. Lesezeit`,
    relatedArticles: 'Weitere Artikel',
    startHere: 'Hier starten',
    readArticle: 'Artikel lesen →',
    inThisTopic: 'In diesem Thema',
    topicHub: 'Thema ansehen',
    browseTopics: 'Nach Thema stöbern',
  },
  pt: {
    backToBlog: 'Voltar ao blog',
    minRead: (m) => `${m} min de leitura`,
    relatedArticles: 'Leia também',
    startHere: 'Comece aqui',
    readArticle: 'Ler artigo →',
    inThisTopic: 'Neste tema',
    topicHub: 'Ver tema',
    browseTopics: 'Explorar por tema',
  },
  pl: {
    backToBlog: 'Wróć do bloga',
    minRead: (m) => `${m} min czytania`,
    relatedArticles: 'Więcej do przeczytania',
    startHere: 'Zacznij tutaj',
    readArticle: 'Czytaj artykuł →',
    inThisTopic: 'W tym temacie',
    topicHub: 'Zobacz temat',
    browseTopics: 'Przeglądaj według tematu',
  },
};

export function getBlogUi(locale: Locale) {
  return BLOG_UI[locale];
}

export function formatBlogDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(DATE_LOCALES[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function postSlug(id: string): string {
  const parts = id.split('/');
  return parts[parts.length - 1] ?? id;
}

export function postHref(id: string, locale?: Locale): string {
  const parts = id.split('/');
  const loc = locale ?? (parts[0] as Locale);
  const slug = parts.slice(1).join('/') || parts[parts.length - 1];
  return `/breakup-reset/blog/${loc}/${slug}/`;
}

export function readingTimeMinutes(body: string | undefined, wpm = 200): number {
  if (!body?.trim()) return 1;
  const plain = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`[\]()]/g, ' ')
    .trim();
  const words = plain.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}

export interface BlogPostRef {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    translationKey: string;
    locale: Locale;
    cluster: BreakupCluster;
    role: BreakupPostRole;
    primaryQuery: string;
    relatedKeys?: string[];
    cover?: {
      src: string;
      alt: string;
    };
  };
  body?: string;
}

function byRecency(a: BlogPostRef, b: BlogPostRef) {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

export function getRelatedPosts(
  posts: BlogPostRef[],
  current: BlogPostRef,
  limit = 3
): BlogPostRef[] {
  const sameLocale = posts.filter(
    (p) =>
      p.data.locale === current.data.locale &&
      p.data.translationKey !== current.data.translationKey
  );

  const byKey = new Map(sameLocale.map((p) => [p.data.translationKey, p]));
  const picked: BlogPostRef[] = [];
  const seen = new Set<string>();

  const push = (post: BlogPostRef | undefined) => {
    if (!post || seen.has(post.data.translationKey) || picked.length >= limit) return;
    seen.add(post.data.translationKey);
    picked.push(post);
  };

  for (const key of current.data.relatedKeys ?? []) {
    push(byKey.get(key));
  }

  const sameCluster = sameLocale
    .filter((p) => p.data.cluster === current.data.cluster && !seen.has(p.data.translationKey))
    .sort((a, b) => {
      const roleScore = (role: BreakupPostRole) =>
        role === 'pillar' ? 0 : role === 'commercial' ? 2 : 1;
      const roleDiff = roleScore(a.data.role) - roleScore(b.data.role);
      return roleDiff !== 0 ? roleDiff : byRecency(a, b);
    });

  for (const post of sameCluster) {
    push(post);
  }

  for (const post of [...sameLocale].sort(byRecency)) {
    push(post);
  }

  return picked;
}

export function getClusterPillar(
  posts: BlogPostRef[],
  cluster: BreakupCluster,
  locale: Locale
): BlogPostRef | undefined {
  const metaKey = CLUSTER_META[cluster].pillarKey;
  return posts.find(
    (p) =>
      p.data.locale === locale &&
      p.data.cluster === cluster &&
      (metaKey
        ? p.data.translationKey === metaKey
        : p.data.role === 'pillar')
  );
}

export function getClusterPosts(
  posts: BlogPostRef[],
  cluster: BreakupCluster,
  locale: Locale
): BlogPostRef[] {
  return posts
    .filter((p) => p.data.locale === locale && p.data.cluster === cluster)
    .sort((a, b) => {
      const roleScore = (role: BreakupPostRole) =>
        role === 'pillar' ? 0 : role === 'commercial' ? 2 : 1;
      const roleDiff = roleScore(a.data.role) - roleScore(b.data.role);
      return roleDiff !== 0 ? roleDiff : byRecency(a, b);
    });
}

export function getTopicNav(
  posts: BlogPostRef[],
  current: BlogPostRef
): {
  hubHref: string;
  hubTitle: string;
  pillar?: BlogPostRef;
  siblings: BlogPostRef[];
} {
  const cluster = current.data.cluster;
  const locale = current.data.locale;
  const meta = CLUSTER_META[cluster];
  const pillar = getClusterPillar(posts, cluster, locale);
  const siblings = getClusterPosts(posts, cluster, locale).filter(
    (p) => p.data.translationKey !== current.data.translationKey
  );

  return {
    hubHref: topicHubPath(cluster, locale),
    hubTitle: meta.title,
    pillar:
      pillar && pillar.data.translationKey !== current.data.translationKey
        ? pillar
        : undefined,
    siblings: siblings.slice(0, 6),
  };
}

export const FEATURED_TRANSLATION_KEY = 'what-to-do-after-a-breakup';
