import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  description: z.string(),
  readingTime: z.string().optional(),
  draft: z.boolean().default(false),
  socialImage: z.string().optional(),
});

const projectSchema = z.object({
  title: z.string(),
  role: z.string(),
  description: z.string().optional(),
  stack: z.array(z.string()).optional(),
  links: z
    .array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    )
    .optional(),
  outcomes: z.array(z.string()),
  screenshots: z
    .array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional(),
      })
    )
    .optional(),
  socialImage: z.string().optional(),
});

const posts = defineCollection({
  type: 'content',
  schema: postSchema,
});

const projects = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const postsRu = defineCollection({
  type: 'content',
  schema: postSchema,
});

const projectsRu = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export const collections = { posts, projects, postsRu, projectsRu };
