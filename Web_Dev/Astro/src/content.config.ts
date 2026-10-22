import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { slug } from 'github-slugger'; // già installato come dipendenza di Astro



const docs = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/docs',
    generateId: ({ entry }) =>
  entry
    .replace(/\.md$/, '')
    .replace(/(^|\/)\d+-/g, '$1')
    .split('/')
    .map((part) => slug(part))
    .join('/'),
  }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    author: z.string(),
    hidden: z.boolean().default(false),
    module: z.string().optional(/* temp */)
  }),
});

export const collections = { docs };