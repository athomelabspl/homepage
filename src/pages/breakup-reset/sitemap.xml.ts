import { getCollection } from 'astro:content';
import { LOCALES } from '../../config/locales';
import { getLegalPath } from '../../config/legal';
import {
  MARKETING_LOCALES,
  breakupHomeHref,
  breakupQuizHref,
  type QuizSlug,
} from '../../config/breakup-chrome';
import type { APIRoute } from 'astro';

const site = 'https://athomelabs.eu';

type SitemapEntry = {
  loc: string;
  alternates?: { hreflang: string; href: string }[];
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderUrl(entry: SitemapEntry) {
  const links = (entry.alternates ?? [])
    .map(
      (alt) =>
        `<xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`
    )
    .join('');
  return `<url><loc>${escapeXml(entry.loc)}</loc>${links}</url>`;
}

function marketingAlternates(
  pathForLocale: (locale: (typeof MARKETING_LOCALES)[number]) => string
): SitemapEntry[] {
  const hrefByLocale = Object.fromEntries(
    MARKETING_LOCALES.map((locale) => [locale, `${site}${pathForLocale(locale)}`])
  ) as Record<(typeof MARKETING_LOCALES)[number], string>;

  const alternates = [
    ...MARKETING_LOCALES.map((locale) => ({
      hreflang: locale,
      href: hrefByLocale[locale],
    })),
    { hreflang: 'x-default', href: hrefByLocale.en },
  ];

  return MARKETING_LOCALES.map((locale) => ({
    loc: hrefByLocale[locale],
    alternates,
  }));
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('breakup-blog');
  const entries: SitemapEntry[] = [];

  entries.push(...marketingAlternates((locale) => breakupHomeHref(locale)));

  for (const locale of LOCALES) {
    entries.push({ loc: `${site}${getLegalPath('privacy', locale)}` });
    entries.push({ loc: `${site}${getLegalPath('terms', locale)}` });
  }

  // Only list blog indexes that have published posts (EN today).
  const localesWithPosts = new Set(posts.map((p) => p.id.split('/')[0]));
  for (const locale of LOCALES) {
    if (localesWithPosts.has(locale)) {
      entries.push({ loc: `${site}/breakup-reset/blog/${locale}/` });
    }
  }

  const quizzes: QuizSlug[] = [
    'friends-with-ex-quiz',
    'should-i-do-no-contact-quiz',
    'ready-to-date-again-quiz',
  ];
  for (const slug of quizzes) {
    entries.push(
      ...marketingAlternates((locale) => breakupQuizHref(slug, locale))
    );
  }

  for (const cluster of [
    'no-contact',
    'attachment',
    'grief-functioning',
    'readiness',
    'situational',
    'product',
  ]) {
    entries.push({
      loc: `${site}/breakup-reset/blog/en/topics/${cluster}/`,
    });
  }

  for (const post of posts) {
    const parts = post.id.split('/');
    const locale = parts[0];
    const slug = parts.slice(1).join('/') || parts[parts.length - 1];
    entries.push({
      loc: `${site}/breakup-reset/blog/${locale}/${slug}/`,
    });
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(renderUrl).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
