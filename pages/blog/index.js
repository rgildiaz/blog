import Layout from "../../components/layout/layout";
import BlogPostList from "../../components/blogPostList";
import { getSortedPostsData } from "../../lib/posts";

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
      <div
        style={{
          margin: "0 0 2em 0",
          padding: "1em 0",
          // borderBottom: "1px solid black",
        }}
      >
        <h1>Blog</h1>
        {/* <p style={{ textAlign: "justify" }}></p> */}
      </div>
      <BlogPostList allPostsData={allPostsData} />
    </Layout>
  );
}
