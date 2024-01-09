import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"posts">[]) => {
  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
};

export default getSortedPosts;
