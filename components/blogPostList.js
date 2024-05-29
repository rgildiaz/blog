import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

function blogPost({ id, date, title }) {
  return (
    <li className={`${utilStyles.listItem} ${utilStyles.flex}`} key={id}>
      <Link href={`/posts/${id}`}>{title}</Link>
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  );
}

export default function blogPostList(allPostsData) {
  return (
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => blogPost({ id, date, title }))}
    </ul>
  );
}
