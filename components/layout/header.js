import { getRandomTitle } from "../../lib/text";
import styles from "./layout.module.css";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // only render on the client
    setIsClient(true);
  }, []);

  const Title = () => {
    return <h1>{isClient ? getRandomTitle() : "Rafi"}</h1>;
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Title />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="/resume">resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
