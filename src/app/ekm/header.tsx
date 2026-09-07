"use client";

import Image from "next/image";
import { useState, type MouseEvent } from "react";
import { nav, SITE } from "@/content/ekm";
import styles from "./ekm.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);

    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        document.querySelector(href)?.scrollIntoView();
        window.history.pushState(null, "", href);
      });
    }, 280);
  };

  return (
    <header className={`${styles.header} ${open ? styles.headerOpen : ""}`}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href={SITE} aria-label="Competitive Range Solutions home">
          <Image
            className={styles.brandLogo}
            src="/images/crs-logo.png"
            alt="Competitive Range Solutions"
            width={167}
            height={223}
            priority
          />
          <span className={styles.wordmark}>
            <strong>COMPETITIVE RANGE</strong>
            <small>SOLUTIONS · SDVOSB</small>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="EKM navigation">
          {nav.links.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className={styles.careerButton} href={nav.careers.href}>
            {nav.careers.label}
          </a>
        </nav>

        <button
          className={`${styles.menuToggle} ${open ? styles.menuToggleOpen : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="ekm-mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="ekm-mobile-menu"
        className={styles.mobileNav}
        aria-label="Mobile EKM navigation"
        aria-hidden={!open}
      >
        {nav.links.map((item) => (
          <a key={item.href} href={item.href} onClick={(event) => navigateToSection(event, item.href)}>
            {item.label}
          </a>
        ))}
        <a className={styles.careerButton} href={nav.careers.href} onClick={close}>
          {nav.careers.label}
        </a>
      </nav>
    </header>
  );
}
