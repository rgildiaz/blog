import { getRandomTitle } from "../../lib/text";
import styles from "./layout.module.css";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/blog", label: "blog" },
  { href: "/resume", label: "resume" },
];

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    // only render on the client
    setIsClient(true);
  }, []);

  const Title = () => {
    return <h1>{isClient ? getRandomTitle() : "R"}</h1>;
  };

  // "/blog/[id]" is part of "blog", but everything is part of "/"
  const isCurrent = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Home">
        <Title />
      </Link>
      <nav className={styles.nav}>
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} aria-current={isCurrent(href) ? "page" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
