"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useMobileMotion } from "./mobile-motion";

declare global {
  interface Window {
    ScrollCraft?: { mount: (root: Element, opts?: unknown) => unknown; reduce: boolean; instances: unknown[] };
    __spStarted?: boolean;
  }
}

const smooth = (x: number) => {
  const t = Math.min(1, Math.max(0, x));
  return t * t * (3 - 2 * t);
};

/**
 * The split stage's own logic, driven off the engine's `--sc-p`:
 *  - the filing: fragments on the dark side cross the seam and land in their slots
 *  - the seam: tips from 50% to 46% when the filing completes, collapses to 0 at the close
 *  - the progress fill along the divider
 * Compact layouts keep the seam still and read in normal document flow.
 */
function startSplit() {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stackedMQ = matchMedia("(max-width: 1199px)");
  const peak = document.querySelector<HTMLElement>("[data-sp-peak]");
  const closeAct = document.querySelector<HTMLElement>("[data-sp-close]");
  const frags = Array.from(document.querySelectorAll<HTMLElement>("[data-sp-frag]"));
  const slots = Array.from(document.querySelectorAll<HTMLElement>("[data-sp-slot]"));
  const divider = document.querySelector<HTMLElement>("[data-sp-divider]");

  const readP = (el: HTMLElement | null) => (el ? parseFloat(el.style.getPropertyValue("--sc-p")) || 0 : 0);

  let deltas: { dx: number; dy: number; rot: number }[] = [];
  const measure = () => {
    deltas = frags.map((f, i) => {
      const slot = slots[i]?.querySelector<HTMLElement>(".sp-slot__text") ?? slots[i];
      if (!slot) return { dx: 0, dy: 0, rot: 0 };
      const prev = f.style.transform;
      f.style.transform = "none";
      const a = f.getBoundingClientRect();
      const b = slot.getBoundingClientRect();
      f.style.transform = prev;
      const cs = getComputedStyle(f);
      const padX = parseFloat(cs.paddingLeft) || 0;
      const rot = parseFloat(f.style.getPropertyValue("--fr")) || 0;
      return { dx: b.left - (a.left + padX), dy: b.top + b.height / 2 - (a.top + a.height / 2), rot };
    });
  };

  root.classList.toggle("sp-live", !reduce && !stackedMQ.matches);

  let lastP = -1;
  let lastPct = -1;
  let lastProg = -1;
  let lastBase = 0;

  const apply = () => {
    const p = readP(peak);
    const c = readP(closeAct);
    const stacked = stackedMQ.matches;
    const base = innerWidth;

    if (!reduce && !stacked && (p !== lastP || base !== lastBase)) {
      frags.forEach((f, i) => {
        const start = 0.06 + i * 0.06;
        const e = smooth((p - start) / 0.25);
        const d = deltas[i] || { dx: 0, dy: 0, rot: 0 };
        f.style.transform = `translate(${(d.dx * e).toFixed(1)}px, ${(d.dy * e).toFixed(1)}px) rotate(${(d.rot * (1 - e)).toFixed(2)}deg)`;
        f.style.setProperty("--fe", e.toFixed(3));
        const filed = e >= 0.999;
        f.classList.toggle("is-filed", filed);
        slots[i]?.classList.toggle("is-filed", filed);
      });
      lastP = p;
    }

    // The seam. Tips once the shelf is full; gives way at the close.
    const tip = reduce || stacked ? 0 : smooth((p - 0.73) / 0.2);
    const col = stacked ? 0 : reduce ? (c > 0.3 ? 1 : 0) : smooth(c / 0.55);
    const pct = (50 - 4 * tip) * (1 - col);
    if (pct !== lastPct || base !== lastBase) {
      root.style.setProperty("--split", `${pct.toFixed(3)}%`);
      root.style.setProperty("--split-px", `${((pct / 100) * base).toFixed(1)}px`);
      root.style.setProperty("--sp-collapse", col.toFixed(3));
      lastPct = pct;
      lastBase = base;
    }

    // Verification hook: the rendered state of the fixed layer, rounded (verify.md).
    if (divider) {
      const filed = slots.filter((s) => s.classList.contains("is-filed")).length;
      const sig = `split=${(Math.round(pct * 2) / 2).toFixed(1)}|filed=${filed}`;
      if (divider.getAttribute("data-sc-verify-state") !== sig) divider.setAttribute("data-sc-verify-state", sig);
    }

    const max = root.scrollHeight - innerHeight;
    const prog = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    if (Math.abs(prog - lastProg) > 0.0005) {
      root.style.setProperty("--sp-progress", prog.toFixed(4));
      lastProg = prog;
    }

    requestAnimationFrame(apply);
  };

  const remeasure = () => {
    root.classList.toggle("sp-live", !reduce && !stackedMQ.matches);
    measure();
    lastP = -1;
  };

  measure();
  document.fonts?.ready.then(remeasure);
  let t: number | undefined;
  addEventListener("resize", () => {
    window.clearTimeout(t);
    t = window.setTimeout(remeasure, 120);
  });
  requestAnimationFrame(apply);
}

function start() {
  if (typeof window === "undefined" || window.__spStarted || !window.ScrollCraft) return;
  window.__spStarted = true;
  window.ScrollCraft.mount(document.body);
  startSplit();
}

export function ScrollCraftMount() {
  useMobileMotion();
  useEffect(() => {
    start();
  }, []);
  return <Script src="/scrollcraft/scrollcraft.js" strategy="afterInteractive" onLoad={start} />;
}
