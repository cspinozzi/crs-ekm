"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { nav, SITE } from "@/content/ekm";
import styles from "./ekm.module.css";
import { scrollToHash, setScrollLocked } from "./smooth-scroll";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setScrollLocked(open);
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => scrollToHash(href), 160);
  };

  return (
    <>
      <header className={styles.header}>
        <a className={styles.brand} href={SITE} aria-label="Competitive Range Solutions home">
          <Image src="/images/crs-logo.png" alt="" width={167} height={223} priority />
          <span className={styles.srOnly}>
            {nav.brand.wordmark} · {nav.brand.tagline}
          </span>
        </a>

        <div className={styles.headerActions}>
          <a className={`${styles.button} ${styles.buttonSmall} ${styles.headerCta}`} href={nav.careers.href}>
            <span>{nav.careers.label}</span>
          </a>
          <button
            className={`${styles.menuToggle} ${open ? styles.menuToggleOpen : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls="ekm-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        id="ekm-menu"
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        aria-label="EKM navigation"
        aria-hidden={!open}
      >
        <ul>
          {nav.links.map((item, index) => (
            <li key={item.href} style={{ "--i": index } as CSSProperties}>
              <a href={item.href} tabIndex={open ? 0 : -1} onClick={(event) => navigateToSection(event, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ "--i": nav.links.length } as CSSProperties}>
            <a
              className={`${styles.button} ${styles.buttonSmall} ${styles.menuCta}`}
              href={nav.careers.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span>{nav.careers.label}</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
