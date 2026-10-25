import Layout from "../../components/layout/layout";
import BlogPostList from "../../components/blogPostList";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

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
    <Layout title="Blog" description="Writing by Rafi Gil Diaz, mostly about software.">
      <div className={`${utilStyles.pageTitle} ${utilStyles.borderBottom}`}>
        <h1>Blog</h1>
        <p>
          Thank you for reading! But don't take the things I say too seriously.
        </p>
      </div>
      <BlogPostList allPostsData={allPostsData} />
    </Layout>
  );
}
