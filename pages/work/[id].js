import Layout from "../../components/layout/layout";
import { getAllWorkIds, getWorkData } from "../../lib/work";
import utilStyles from "../../styles/utils.module.css";
import postStyles from "../../styles/Post.module.css";
import workStyles from "../../styles/Work.module.css";
import Link from "next/link";

export default function WorkEntry({ workData }) {
  const { title, org, period, summary, stack = [], links = [], contentHtml } = workData;

  return (
    <Layout title={title} description={summary}>
      <article>
        <div
          className={`${postStyles.title_container} ${utilStyles.borderBottom}`}
        >
          <h1 className={postStyles.title}>{title}</h1>
          <div className={utilStyles.lightText}>
            <small>
              {org} · {period}
            </small>
          </div>
          {stack.length > 0 ? (
            <ul className={workStyles.stack}>
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        {links.length > 0 ? (
          <ul className={workStyles.links}>
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        ) : null}
        <div className={postStyles.backToHome}>
          <Link href="/work">... more work</Link>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllWorkIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id);
  return { props: { workData } };
}
