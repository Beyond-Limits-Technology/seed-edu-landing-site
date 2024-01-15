import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    postId: z.string(),
    tags: z.string(),
    link: z.string().optional(),
  }),
});

const event = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    eventId: z.string(),
    tags: z.string(),
  }),
});

export const collections = {
  posts: blog,
  events: event,
};
