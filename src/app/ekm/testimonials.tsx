"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/content/ekm";
import styles from "./ekm.module.css";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.quotes.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const quote = testimonials.quotes[active];

  return (
    <section className={styles.testimonials} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <div className={`${styles.centerKicker} ${styles.testimonialKicker}`} id="testimonials-title">
          <span />
          {testimonials.kicker}
          <span />
        </div>
        <blockquote className={styles.quote} key={active}>
          “{quote.text}”
        </blockquote>
        <p className={styles.quoteBy}>— {quote.by}</p>
        <div className={styles.quoteDots} aria-label="Quote pagination">
          {testimonials.quotes.map((item, index) => (
            <button
              key={item.text}
              type="button"
              aria-label={`Show quote ${index + 1}`}
              aria-pressed={index === active}
              className={index === active ? styles.quoteDotActive : ""}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
