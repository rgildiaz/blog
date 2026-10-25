import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

/*
 * Shared helpers for folders of markdown files (posts/, work/).
 * Each file's name (minus ".md") is its id, and its frontmatter is its metadata.
 */

function getMarkdownFileNames(directory) {
  return fs
    .readdirSync(path.join(process.cwd(), directory))
    .filter((fileName) => fileName.endsWith(".md"));
}

/**
 * Get the id and frontmatter of every markdown file in a directory (unsorted).
 * @param {string} directory - Relative to the project root, e.g. "posts"
 */
export function getAllContentData(directory) {
  return getMarkdownFileNames(directory).map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), directory, fileName),
      "utf8"
    );
    return {
      id,
      ...matter(fileContents).data,
    };
  });
}

/**
 * Get the paths for getStaticPaths, e.g. [{ params: { id: "angelscript" } }]
 * @param {string} directory - Relative to the project root, e.g. "posts"
 */
export function getAllContentIds(directory) {
  return getMarkdownFileNames(directory).map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));
}

/**
 * Get one file's frontmatter, plus its body rendered to HTML as contentHtml.
 * @param {string} directory - Relative to the project root, e.g. "posts"
 * @param {string} id - The file name without ".md"
 */
export async function getContentData(directory, id) {
  const fullPath = path.join(process.cwd(), directory, `${id}.md`);
  const matterResult = matter(fs.readFileSync(fullPath, "utf8"));

  // Raw HTML in the markdown (e.g. <!-- comments -->) is dropped, not rendered.
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { fragment: true })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);

  return {
    id,
    contentHtml: processedContent.toString(),
    ...matterResult.data,
  };
}
