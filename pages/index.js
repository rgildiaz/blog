import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import BlogPostList from "../components/blogPostList";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  // TODO: it would be nice to be able to move this out of this component, but getStaticProps only works for /pages
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
        <BlogPostList allPostsData={allPostsData} />
      </section>
    </Layout>
  );
}
