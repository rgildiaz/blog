import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import BlogPostList from "../components/blogPostList";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

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
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={homeStyles.page_title}>
        <p>Hi, welcome! I'm Rafi.</p>
        <p>
          I <Link href="https://github.com/rgildiaz">write code</Link> for
          money, and sometimes I{" "}
          <Link href="https://soundcloud.com/rafigildiaz">make music</Link>. If
          you want to get in contact it's probably best to use something like{" "}
          <Link href="https://linkedin.com/in/rafael-gil-diaz">
            my LinkedIn
          </Link>
          . You can find{" "}
          <Link href="https://github.com/rgildiaz/blog">
            the source code for this website on GitHub
          </Link>
          .
        </p>
      </section>
      <section className={`${utilStyles.padding1px}`}>
        <BlogPostList allPostsData={allPostsData} maxItems={10} />
      </section>
    </Layout>
  );
}
