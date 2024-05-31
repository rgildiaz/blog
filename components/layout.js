import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

export const siteTitle = "Rafi's blog";

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">® ª ₣ ⥍</Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rafi's blog" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
