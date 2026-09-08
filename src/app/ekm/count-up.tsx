"use client";

import { useEffect, useRef } from "react";

const NUMERIC = /^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/;

/**
 * Renders a stat value verbatim and, once it scrolls into view, counts the
 * numeric part up from zero (prefix and suffix such as "$" or "M+" stay put).
 * Non-numeric values like "EXCEPTIONAL" render unchanged. The animation writes
 * straight to the DOM node so the server-rendered value is always the source
 * of truth.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    const match = NUMERIC.exec(value);
    if (!element || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    if (!Number.isFinite(target)) return;

    const decimals = (digits.split(".")[1] ?? "").length;
    const format = (n: number) =>
      `${prefix}${n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;

    let frame = 0;
    element.textContent = format(0);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          if (t < 1) {
            element.textContent = format(target * eased);
            frame = requestAnimationFrame(tick);
          } else {
            element.textContent = value;
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = value;
    };
  }, [value]);

  return (
    <strong ref={ref} className={className}>
      {value}
    </strong>
  );
}
