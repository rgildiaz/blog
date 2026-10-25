import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import Header from "./header";

const SITE_NAME = "Rafi Gil Diaz";
const DEFAULT_DESCRIPTION =
  "Rafi Gil Diaz is a backend-leaning full stack engineer. Work, writing, and resume.";

/**
 * Wraps every page with the header, footer, and shared <head> tags.
 * @param {String} title - Optional. Shown before the site name in the tab and link previews.
 * @param {String} description - Optional. Used for search results and link previews.
 */
export default function Layout({ title, description = DEFAULT_DESCRIPTION, children }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <div className={styles.container}>
      <Head>
        <title>{fullTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/github-dark.min.css" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer className={styles.footer}>
        <span>Rafi Gil Diaz</span>
        <span>
          <Link href="https://github.com/rgildiaz/blog">source on GitHub</Link>
        </span>
      </footer>
    </div>
  );
}
