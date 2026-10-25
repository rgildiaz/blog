import Layout from "../components/layout/layout";
import BlogPostList from "../components/blogPostList";
import WorkList from "../components/workList";
import homeStyles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getSortedWorkData } from "../lib/work";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      allPostsData: getSortedPostsData(),
      featuredWork: getSortedWorkData({ featured: true }),
    },
  };
}

export default function Home({ allPostsData, featuredWork }) {
  return (
    <Layout>
      <section className={homeStyles.page_title}>
        <p>Hi, welcome! I'm Rafi.</p>
        <p>
          I'm a backend-leaning full stack engineer. I've spent the last three
          years shipping customer-facing products and developer tooling in
          Python and TypeScript. Right now I'm the founding engineer at
          AchillesHR, and before that I spent a little over two years at PMG.
        </p>
        <p>
          When I'm not writing code for money, sometimes I{" "}
          <Link href="https://soundcloud.com/rafigildiaz">make music</Link>.
        </p>
        <ul className={homeStyles.contact}>
          <li>
            <Link href="mailto:rfgildiaz@gmail.com">email</Link>
          </li>
          <li>
            <Link href="https://github.com/rgildiaz">GitHub</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/rgildiaz">LinkedIn</Link>
          </li>
          <li>
            <Link href="/resume">resume</Link>
          </li>
        </ul>
      </section>
      <section className={homeStyles.section}>
        <h2>Selected Work</h2>
        <WorkList entries={featuredWork} showMore />
      </section>
      <section className={homeStyles.section} id="blog">
        <h2>Recent Posts</h2>
        <BlogPostList allPostsData={allPostsData} maxItems={3} />
      </section>
    </Layout>
  );
}
