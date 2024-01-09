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
  }),
});

// title={"Student Spotlight: Navigating a Dual Degree Journey"}
// description={"Meet Sarah, a trailblazing student who decided to embark on a dual degree journey. In this student spotlight, Sarah shares her challenges, triumphs, and insights into managing the demands of two academic pursuits. Get inspired by her story and gain valuable lessons for your own academic endeavors."}
// image="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// date="May 20, 2021"
// postId="1"
// tag="News"

export const collections = {
  posts: blog,
};
