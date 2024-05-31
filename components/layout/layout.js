import Head from "next/head";
import styles from "./layout.module.css";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rafi's blog" />
        <meta name="og:title" content="Rafi's blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
