import { Post } from "@/types/posts";
import { formatedEntryPosts } from "./utils";

const API_URL = process.env.BLOGGER_URL;

async function fetchAPI(path = "", filters = "") {
  const res = await fetch(
    `${API_URL}/feeds/${path}?alt=json${filters ? `&${filters}` : ""}`,
    {
      method: "GET",
    }
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI("posts/summary", "max-results=19");
  return data.feed.entry.map(formatedEntryPosts);
}

export async function getAllPosts() {
  const data = await fetchAPI("posts/summary", "max-results=9999");
  return data.feed.entry.map(formatedEntryPosts);
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  const postBySlug = posts.find((post: Post) => post.slug === slug);
  if (!postBySlug) {
    return null;
  }
  const dataPostId = await fetchAPI(`posts/default/${postBySlug.id}`, "");
  const tags = dataPostId.entry.category;
  return {
    ...postBySlug,
    content: dataPostId.entry.content.$t,
    tags: tags ?? [],
  };
}
