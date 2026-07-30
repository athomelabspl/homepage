import { getCollection } from 'astro:content';
import { LOCALES } from '../../config/locales';
import { getLegalPath } from '../../config/legal';
import type { APIRoute } from 'astro';

const site = 'https://athomelabs.eu';

function url(loc: string) {
  return `<url><loc>${loc}</loc></url>`;
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('breakup-blog');
  const urls: string[] = [`${site}/breakup-reset/`];

  for (const locale of LOCALES) {
    urls.push(`${site}${getLegalPath('privacy', locale)}`);
    urls.push(`${site}${getLegalPath('terms', locale)}`);
  }

  // Only list blog indexes that have published posts (EN today).
  const localesWithPosts = new Set(posts.map((p) => p.id.split('/')[0]));
  for (const locale of LOCALES) {
    if (localesWithPosts.has(locale)) {
      urls.push(`${site}/breakup-reset/blog/${locale}/`);
    }
  }

  urls.push(`${site}/breakup-reset/blog/en/friends-with-ex-quiz/`);
  urls.push(`${site}/breakup-reset/blog/en/should-i-do-no-contact-quiz/`);
  urls.push(`${site}/breakup-reset/blog/en/ready-to-date-again-quiz/`);

  for (const cluster of [
    'no-contact',
    'attachment',
    'grief-functioning',
    'readiness',
    'situational',
    'product',
  ]) {
    urls.push(`${site}/breakup-reset/blog/en/topics/${cluster}/`);
  }

  for (const post of posts) {
    const parts = post.id.split('/');
    const locale = parts[0];
    const slug = parts.slice(1).join('/') || parts[parts.length - 1];
    urls.push(`${site}/breakup-reset/blog/${locale}/${slug}/`);
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
