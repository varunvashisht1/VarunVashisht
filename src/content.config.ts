import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    caption: z.string(),
    alt: z.string(),
    image: z.string(),
    order: z.number().default(99),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    image: z.string(),
    imageFallback: z.string().optional(),
    imageAlt: z.string(),
    description: z.string(),
    meta: z.array(z.string()),
    result: z.string(),
    modalMeta: z.array(z.string()),
    challenge: z.string(),
    approach: z.string(),
    approachBullets: z.array(z.string()),
    outcomes: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    order: z.number().default(99),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
  schema: z.object({
    mark: z.string(),
    title: z.string(),
    issuer: z.string(),
    order: z.number().default(99),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    current: z.boolean().default(false),
    description: z.string(),
    bullets: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { blog, gallery, cases, certifications, experience };
