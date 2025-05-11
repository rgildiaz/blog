import Layout from "../../components/layout/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import postStyles from "../../styles/Post.module.css";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{`Rafi's blog | ${postData.title}`}</title>
      </Head>
      <article>
        <div
          className={`${postStyles.title_container} ${utilStyles.borderBottom}`}
        >
          <h1 className={postStyles.title}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <small>
              <Date dateString={postData.date} />
            </small>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className={postStyles.backToHome}>
          <Link href="/">... go home</Link>
        </div>
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
