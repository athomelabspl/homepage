import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
  elaboration: z.string().optional(),
});

const coverSchema = z.object({
  src: z.string(),
  alt: z.string(),
  credit: z.string(),
  creditUrl: z.string().url(),
  photoUrl: z.string().url(),
});

const breakupBlog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/breakup-blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    locale: z.enum(['en', 'es', 'fr', 'de', 'pt', 'pl']).default('en'),
    translationKey: z.string(),
    trackingSlug: z.string().optional(),
    cover: coverSchema.optional(),
    faq: z.array(faqSchema).optional(),
  }),
});

export const collections = {
  'breakup-blog': breakupBlog,
};
