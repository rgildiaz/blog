import { getAllContentData, getAllContentIds, getContentData } from "./content";

const WORK_DIRECTORY = "work";

/**
 * All work entries, ordered by their `order` frontmatter (lowest first).
 * Pass { featured: true } to only get entries marked `featured: true`.
 */
export function getSortedWorkData({ featured = false } = {}) {
  return getAllContentData(WORK_DIRECTORY)
    .filter((entry) => !featured || entry.featured)
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

export function getAllWorkIds() {
  return getAllContentIds(WORK_DIRECTORY);
}

export async function getWorkData(id) {
  return getContentData(WORK_DIRECTORY, id);
}
