"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let instance: Lenis | null = null;

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Smoothly scrolls to an in-page hash, falling back to native scrolling. */
export function scrollToHash(href: string) {
  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;

  if (instance && !reducedMotion()) {
    instance.start();
    instance.scrollTo(target, { offset: 0, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });
  }

  window.history.pushState(null, "", href);
}

/** Locks or unlocks page scrolling while the full-screen menu is open. */
export function setScrollLocked(locked: boolean) {
  if (instance) {
    if (locked) instance.stop();
    else instance.start();
  }
  document.documentElement.classList.toggle("menu-open", locked);
}

export function SmoothScroll() {
  useEffect(() => {
    if (reducedMotion()) return;

    instance = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: 0, duration: 1.4 },
      stopInertiaOnNavigate: true,
    });

    return () => {
      instance?.destroy();
      instance = null;
    };
  }, []);

  return null;
}
