"use client";

import { useEffect } from "react";

const ENTER_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Mobile motion decorates the reading layout; content is never hidden at rest. */
export function useMobileMotion() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>("main.sp");
    if (!page) return;

    const mobile = matchMedia("(max-width: 699px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const counters = Array.from(page.querySelectorAll<HTMLElement>("[data-sp-mobile-count]"));
    const targets = Array.from(page.querySelectorAll<HTMLElement>(
      ".sp-hero [data-sc-cue], .sp-plate, .sp-quote, .sp-numbers > div, .sp-slot, .sp-commands li, .sp-poc__photo",
    ));
    const seen = new WeakSet<HTMLElement>();
    const animations = new Set<Animation>();
    const frames = new Map<HTMLElement, number>();
    let observer: IntersectionObserver | undefined;
    let active = false;

    const finalValue = (el: HTMLElement) => el.dataset.spMobileCount ?? "0";
    const settleCounts = () => {
      counters.forEach((el) => { el.textContent = finalValue(el); });
    };
    const animate = (el: HTMLElement, frames: Keyframe[], delay = 0) => {
      const animation = el.animate(frames, { duration: 760, delay, easing: ENTER_EASING, fill: "backwards" });
      animations.add(animation);
      animation.onfinish = animation.oncancel = () => { animations.delete(animation); };
    };
    const countUp = (el: HTMLElement) => {
      const value = Number(finalValue(el));
      if (!Number.isFinite(value)) return;
      const started = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - started) / 1000);
        el.textContent = String(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frames.set(el, requestAnimationFrame(tick));
        else {
          el.textContent = finalValue(el);
          frames.delete(el);
        }
      };
      frames.set(el, requestAnimationFrame(tick));
    };

    const enter = (el: HTMLElement, delay = 0) => {
      if (seen.has(el)) return;
      seen.add(el);
      el.classList.add("sp-arrived");
      const number = el.querySelector<HTMLElement>(".sp-num");
      const slot = el.querySelector<HTMLElement>(".sp-slot__text");
      if (number) {
        animate(number, [
          { opacity: 0.35, translate: "0 16px", scale: "0.96" },
          { opacity: 1, translate: "0 0", scale: "1" },
        ]);
        const counter = number.querySelector<HTMLElement>("[data-sp-mobile-count]");
        if (counter) countUp(counter);
      } else if (slot) {
        animate(slot, [{ opacity: 0.25, translate: "12px 0" }, { opacity: 1, translate: "0 0" }]);
      } else {
        // Individual translate composes with ScrollCraft's desktop transforms.
        // Cue opacity remains readable even if the engine parks it off screen.
        animate(el, [{ opacity: 0.3, translate: "0 22px" }, { opacity: 1, translate: "0 0" }], delay);
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      // Never make keyboard users wait for a control to settle into place.
      const control = event.target.closest<HTMLElement>("[data-sc-cue]") ?? event.target;
      control.getAnimations().forEach((animation) => animation.finish());
    };
    const stop = () => {
      observer?.disconnect();
      observer = undefined;
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      frames.forEach((frame) => cancelAnimationFrame(frame));
      frames.clear();
      page.classList.remove("sp-mobile-motion");
      page.removeEventListener("focusin", onFocus);
      if (active || mobile.matches) settleCounts();
      active = false;
    };
    const sync = () => {
      stop();
      if (!mobile.matches || reduced.matches || !("IntersectionObserver" in window)) return;
      active = true;
      page.classList.add("sp-mobile-motion");
      page.addEventListener("focusin", onFocus);
      observer = new IntersectionObserver((entries) => {
        let heroIndex = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.closest(".sp-hero") ? heroIndex++ * 90 : 0;
          enter(el, delay);
          observer?.unobserve(el);
        });
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.16 });
      targets.forEach((el) => { if (!seen.has(el)) observer?.observe(el); });
    };

    sync();
    mobile.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      stop();
      targets.forEach((el) => el.classList.remove("sp-arrived"));
      mobile.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);
}
