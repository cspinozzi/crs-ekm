import type { CSSProperties } from "react";
import { testimonials } from "@/content/ekm";
import styles from "./ekm.module.css";

const COLUMNS = 3;

type Quote = (typeof testimonials.quotes)[number];

function MarqueeColumn({
  quotes,
  duration,
  reverse,
  className = "",
}: {
  quotes: Quote[];
  duration: number;
  reverse: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${styles.marqueeColumn} ${className}`}
      style={{ "--duration": `${duration}s`, "--direction": reverse ? "reverse" : "normal" } as CSSProperties}
    >
      <div className={styles.marqueeTrack}>
        {[...quotes, ...quotes].map((quote, index) => (
          <figure className={styles.quoteCard} key={index} aria-hidden={index >= quotes.length || undefined}>
            <blockquote>
              <p>“{quote.text}”</p>
            </blockquote>
            <figcaption>{quote.by}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const columns = Array.from({ length: COLUMNS }, (_, column) =>
    testimonials.quotes.filter((_, index) => index % COLUMNS === column),
  );

  return (
    <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <h2 id="testimonials-title" className={`${styles.title} ${styles.titleCenter}`}>
          {testimonials.kicker}
        </h2>
      </div>

      <div className={styles.marquee}>
        {columns.map((quotes, column) => (
          <MarqueeColumn key={column} quotes={quotes} duration={36 + column * 9} reverse={column % 2 === 1} />
        ))}
        {/* Single column for narrow screens so every quote stays visible. */}
        <MarqueeColumn
          className={styles.marqueeAll}
          quotes={testimonials.quotes}
          duration={70}
          reverse={false}
        />
      </div>
    </section>
  );
}
