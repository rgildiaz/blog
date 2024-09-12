import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

const BlogPost = ({ id, date, title }) => {
  return (
    <li className={`${utilStyles.listItem} ${utilStyles.flex}`} key={id}>
      <Link href={`/blog/${id}`}>
        <p>{title}</p>
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </Link>
    </li>
  );
};

/**
 * A dynamic list of blog posts.
 * @param {Array} allPostsData - Required to render. Fetched from getSortedPostsData()
 * @param {Number} maxItems - Optional. By default, all items will be displayed. If provided, only the first maxItems will be displayed, and a link to the blog will be displayed at the end.
 */
export default function BlogPostList({ allPostsData, maxItems }) {
  let displayMore = false;
  if (maxItems < allPostsData.length) {
    allPostsData = allPostsData.slice(0, maxItems);
    displayMore = true;
  }

  return (
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <BlogPost id={id} date={date} title={title} key={id} />
      ))}
      {displayMore ? (
        <li className={`${utilStyles.listItem}`}>
          <Link href="/blog">
            <p>... and more</p>
          </Link>
        </li>
      ) : null}
    </ul>
  );
}
