import Head from "next/head";
import Layout from "../components/layout/layout";
import BlogPostList from "../components/blogPostList";
import homeStyles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

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
    <Layout>
      <Head>
        <title>Rafi's website</title>
      </Head>
      <section className={homeStyles.page_title}>
        <p>Hi, welcome! I'm Rafi.</p>
        <p>
          I <Link href="https://github.com/rgildiaz">write code</Link> for
          money, and sometimes I{" "}
          <Link href="https://soundcloud.com/rafigildiaz">make music</Link>
          . You can find{" "}
          <Link href="https://github.com/rgildiaz/blog">
            the source code for this website on GitHub
          </Link>
          .
        </p>
        <div className={homeStyles.contact_links}>
          <h2>Contact me:</h2>
          <div>
            <Link href="mailto:rfgildiaz@gmail.com">rfgildiaz@gmail.com</Link>
            <Link href="https://linkedin.com/in/rafael-gil-diaz">
              LinkedIn
            </Link>
            <Link href="https://github.com/rgildiaz">
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section id="blog">
        <h2>Recent Posts</h2>
        <BlogPostList allPostsData={allPostsData} maxItems={3} />
      </section>
    </Layout>
  );
}
