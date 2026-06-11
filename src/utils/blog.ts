import type { Locale } from '../config/locales';

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
  }
> = {
  en: {
    backToBlog: 'Back to blog',
    minRead: (m) => `${m} min read`,
    relatedArticles: 'More to read',
    startHere: 'Start here',
    readArticle: 'Read article →',
  },
  es: {
    backToBlog: 'Volver al blog',
    minRead: (m) => `${m} min de lectura`,
    relatedArticles: 'Más artículos',
    startHere: 'Empieza aquí',
    readArticle: 'Leer artículo →',
  },
  fr: {
    backToBlog: 'Retour au blog',
    minRead: (m) => `${m} min de lecture`,
    relatedArticles: 'À lire aussi',
    startHere: 'Commencez ici',
    readArticle: "Lire l'article →",
  },
  de: {
    backToBlog: 'Zurück zum Blog',
    minRead: (m) => `${m} Min. Lesezeit`,
    relatedArticles: 'Weitere Artikel',
    startHere: 'Hier starten',
    readArticle: 'Artikel lesen →',
  },
  pt: {
    backToBlog: 'Voltar ao blog',
    minRead: (m) => `${m} min de leitura`,
    relatedArticles: 'Leia também',
    startHere: 'Comece aqui',
    readArticle: 'Ler artigo →',
  },
  pl: {
    backToBlog: 'Wróć do bloga',
    minRead: (m) => `${m} min czytania`,
    relatedArticles: 'Więcej do przeczytania',
    startHere: 'Zacznij tutaj',
    readArticle: 'Czytaj artykuł →',
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
  };
  body?: string;
}

export function getRelatedPosts(
  posts: BlogPostRef[],
  current: BlogPostRef,
  limit = 2
): BlogPostRef[] {
  return posts
    .filter(
      (p) =>
        p.data.locale === current.data.locale &&
        p.data.translationKey !== current.data.translationKey
    )
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, limit);
}

export const FEATURED_TRANSLATION_KEY = 'what-to-do-after-a-breakup';
