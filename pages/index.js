import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import blogPostList from "../components/blogPostList";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={homeStyles.page_title}>
        <p>Hi, welcome. I'm Rafi.</p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        {blogPostList(allPostsData)}
      </section>
    </Layout>
  );
}
