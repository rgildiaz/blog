import Link from "next/link";
import workStyles from "../styles/Work.module.css";

/**
 * A list of work entries.
 * @param {Array} entries - Required to render. Fetched from getSortedWorkData()
 * @param {Boolean} showMore - Optional. If true, a link to the full /work page is displayed at the end.
 */
export default function WorkList({ entries, showMore = false }) {
  return (
    <ul className={workStyles.list}>
      {entries.map(({ id, title, org, period, summary }) => (
        <li className={workStyles.item} key={id}>
          <Link href={`/work/${id}`}>
            <p className={workStyles.title}>{title}</p>
          </Link>
          <small className={workStyles.meta}>
            {org} · {period}
          </small>
          <p className={workStyles.summary}>{summary}</p>
        </li>
      ))}
      {showMore ? (
        <li className={workStyles.item}>
          <Link href="/work">
            <p className={workStyles.title}>... and more</p>
          </Link>
        </li>
      ) : null}
    </ul>
  );
}
