import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

const BlogPost = ({ id, date, title }) => {
  return (
    <li className={`${utilStyles.listItem} ${utilStyles.flex}`} key={id}>
      <Link href={`/posts/${id}`}>{title}</Link>
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  );
};

export default function BlogPostList({ allPostsData }) {
  return (
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <BlogPost id={id} date={date} title={title} key={id} />
      ))}
    </ul>
  );
}
