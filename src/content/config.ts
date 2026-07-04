import { defineCollection, z } from 'astro:content';

// Every file in src/content/blog/ must have these fields at the top
// (called "frontmatter") or the site will fail to build — that's a safety
// net so you never accidentally publish a post missing a title or date.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),      // e.g. "2026-06-01" — used for sorting, newest first
    topic: z.string(),     // e.g. "Healthcare", "Tech", "Career"
    excerpt: z.string(),   // 1-2 sentence teaser shown on the homepage list
  }),
});

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    cuisine: z.string(),
    time: z.string(),      // e.g. "45 min", "Overnight"
    emoji: z.string(),     // shown as the recipe's thumbnail icon
    note: z.string(),      // short teaser shown on the recipe card
  }),
});

export const collections = { blog, recipes };
