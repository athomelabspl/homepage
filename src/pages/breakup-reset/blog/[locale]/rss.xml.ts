import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { LOCALES, type Locale } from '../../../../config/locales';

export async function getStaticPaths() {
  return LOCALES.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = async (context) => {
  const locale = context.params.locale as Locale;
  const posts = (await getCollection('breakup-blog'))
    .filter((p) => p.data.locale === locale)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `Breakup Reset Blog (${locale})`,
    description: 'Calm, practical guidance for your healing journey.',
    site: context.site!,
    items: posts.map((post) => {
      const parts = post.id.split('/');
      const slug = parts.slice(1).join('/') || parts[parts.length - 1];
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/breakup-reset/blog/${locale}/${slug}/`,
      };
    }),
  });
};
