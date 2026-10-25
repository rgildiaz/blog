import { getAllContentData, getAllContentIds, getContentData } from "./content";

const POSTS_DIRECTORY = "posts";

export function getSortedPostsData() {
  // Newest first
  return getAllContentData(POSTS_DIRECTORY).sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
}

export function getAllPostIds() {
  return getAllContentIds(POSTS_DIRECTORY);
}

export async function getPostData(id) {
  return getContentData(POSTS_DIRECTORY, id);
}
