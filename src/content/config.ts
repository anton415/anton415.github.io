import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
    highlights: z.array(z.string()),
  }),
});

export const collections = { posts, projects };
