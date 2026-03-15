import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articulos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date(),
    category: z.enum(['economia', 'politica', 'tecnologia', 'historia']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articulos };

