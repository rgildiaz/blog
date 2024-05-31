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

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">{isClient && getRandomTitle()}</Link>
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
