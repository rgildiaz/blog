import Layout from "../../components/layout/layout";
import BlogPostList from "../../components/blogPostList";
import { getSortedPostsData } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Rafi's blog</title>
      </Head>
      <div
        style={{
          margin: "0 0 2em 0",
          padding: "1em 0",
          borderBottom: "1px solid black",
        }}
      >
        <h1>Blog</h1>
        <p>
          Go home. Play music. Feel better.
        </p>
      </div>
      <BlogPostList allPostsData={allPostsData} />
    </Layout>
  );
}
