import Image from "next/image";
import type { CSSProperties } from "react";
import "./scrollcraft.css";
import "./split.css";
import { ScrollCraftMount } from "./scrollcraft-mount";
import { CTA, SITE, close, hero, peak, reach, rigor, sides, unease, weight } from "@/content/split";

/** Overlapping cue windows across a pinned act: the first greets, the last closes at 1. */
function quoteCue(i: number, n: number) {
  // One quote per 0.2 of the act, each plateau centred on a sample point (0, .2, .4, .6, .8).
  // The first greets, the last closes at 1 with a short ramp-out.
  const c = Math.min(0.8, i * 0.2);
  if (i === 0) return "0 0.12 0";
  if (i === n - 1) return `${(c - 0.12).toFixed(2)} 1 0.2 0.12`;
  return `${(c - 0.12).toFixed(2)} ${(c + 0.12).toFixed(2)} 0.25 0.25`;
}

export default function EkmSplitPage() {
  return (
    <>
      <ScrollCraftMount />
      <div className="sc-grain" aria-hidden="true" />

      {/* The chrome: the seam carries the two labels and the page's progress. */}
      <div className="sp-divider" data-sp-divider aria-hidden="true">
        <span className="sp-divider__line" />
        <span className="sp-divider__fill" />
        <span className="sp-divider__label sp-divider__label--left">{sides.left}</span>
        <span className="sp-divider__label sp-divider__label--right">{sides.right}</span>
      </div>
      <a className="sp-mark" href={SITE} aria-label="Competitive Range Solutions home">
        <Image src="/images/crs-logo.png" alt="" width={167} height={223} priority />
      </a>

      <main id="top" className="sp">
        {/* 1 · Recognition: the split, established. */}
        <section className="sp-act" data-sc-act="scrub" data-sc-span="1.3" data-sc-dwell="0.3" aria-labelledby="hero-title">
          <div className="sp-stage" data-sc-stage>
            <div className="sp-side sp-side--dark sp-hero__media">
              {/* The engine swaps this frame-holder for the clip; a plain <img> is what it expects. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="sc-stage__poster" src={hero.poster} alt="" width={864} height={1080} />
              <video data-sc-scrub data-sc-src={hero.clip} data-sc-src-mobile={hero.clipMobile} muted playsInline aria-label="Special operations forces on mission" />
              <div className="sc-scrim sc-scrim--band" aria-hidden="true" />
              <div className="sp-block sp-seam sp-hero__left">
                <h2 className="sp-display sp-display--md sp-hero__h2" data-sc-cue="0 1 0 0">
                  {hero.left.headline}
                </h2>
              </div>
            </div>
            <div className="sp-side sp-side--paper">
              <div className="sp-block sp-seam">
                <p className="sp-eyebrow" data-sc-cue="0 1 0 0">
                  {hero.eyebrow}
                </p>
                <h1 id="hero-title" className="sp-display sp-display--xl" data-sc-cue="0 1 0 0" data-sc-kinetic="lines">
                  {hero.right.h1}
                </h1>
                <p className="sp-lede" data-sc-cue="0 1 0 0">
                  {hero.right.tagline}
                </p>
                <p data-sc-cue="0 1 0 0">
                  <a className="sp-cta" href={CTA.href}>
                    {CTA.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · Unease: the Government's words. Still, on purpose. */}
        <section className="sp-flow sp-flow--tight" data-sc-act="flow" aria-label="Where program knowledge lived, and what the SOF enterprise needs">
          <div className="sp-side sp-side--dark">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="70">
                <p className="sp-small">{unease.left.label}</p>
                <p className="sp-quote-lg">{unease.left.body}</p>
                <p className="sp-small sp-small--accent">{unease.left.verdict}</p>
              </div>
            </div>
          </div>
          <div className="sp-side sp-side--paper">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="70">
                <p className="sp-lede">
                  <strong>{unease.right.strong}</strong>
                  {unease.right.rest}
                </p>
                <p className="sp-body sp-body--strong">{unease.right.promise}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 · Clarity, the peak: the filing. */}
        <section className="sp-act sp-act--peak" data-sc-act="pin" data-sc-span="3.4" data-sp-peak aria-labelledby="peak-title">
          <div className="sp-stage" data-sc-stage>
            <div className="sp-side sp-side--dark sp-peak__left">
              <ul className="sp-frags" aria-hidden="true">
                {peak.fragments.map((f, i) => {
                  const [x, y, r] = peak.scatter[i];
                  const style = { "--fx": `${x}%`, "--fy": `${y}%`, "--fr": `${r}deg` } as CSSProperties;
                  return (
                    <li key={f} className="sp-frag" data-sp-frag={i} style={style}>
                      {f}
                    </li>
                  );
                })}
              </ul>
              <p className="sp-caption sp-seam">{peak.left.caption}</p>
            </div>
            <div className="sp-side sp-side--paper">
              <div className="sp-block sp-seam">
                <h2 id="peak-title" className="sp-display sp-display--lg sp-plate">
                  {peak.right.heading}
                </h2>
                <ol className="sp-shelf" aria-label="Filed into one environment">
                  {peak.fragments.map((f, i) => (
                    <li key={f} className="sp-slot" data-sp-slot={i}>
                      <span className="sp-slot__text">{f}</span>
                    </li>
                  ))}
                </ol>
                <p className="sp-lede sp-peak__result" data-sc-cue="0.7 1 0.2 0.1">
                  {peak.right.result}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · Rigor: the ledger. */}
        <section className="sp-flow" data-sc-act="flow" aria-labelledby="rigor-title">
          <div className="sp-side sp-side--dark">
            <div className="sp-block sp-seam">
              <div data-sc-in>
                <h2 className="sp-display sp-display--md">{rigor.left.heading}</h2>
              </div>
            </div>
          </div>
          <div className="sp-side sp-side--paper">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="70">
                <h2 id="rigor-title" className="sp-display sp-display--md sp-plate">
                  {rigor.right.heading}
                </h2>
                <p className="sp-body">{rigor.right.sub}</p>
              </div>
            </div>
          </div>
          <dl className="sp-ledger">
            {rigor.rows.map((row) => (
              <div className="sp-ledger__row" key={row.title} data-sc-in data-sc-stagger="60">
                <dt className="sp-ledger__k sp-side--dark">
                  <span className="sp-seam">{row.title}</span>
                </dt>
                <dd className="sp-ledger__v sp-side--paper">
                  <span className="sp-seam">{row.body}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 5 · Weight: their words against the record. */}
        <section className="sp-act" data-sc-act="pin" data-sc-span="2.4" aria-labelledby="weight-title">
          <div className="sp-stage" data-sc-stage>
            <div className="sp-side sp-side--dark">
              <div className="sp-block sp-seam">
                <h2 className="sp-display sp-display--sm">{weight.left.heading}</h2>
                <div className="sp-quotes__stack">
                  {weight.left.quotes.map((q, i) => (
                    <blockquote className="sp-quote" key={q.text} data-sc-cue={quoteCue(i, weight.left.quotes.length)}>
                      <p>“{q.text}”</p>
                      <footer>{q.by}</footer>
                    </blockquote>
                  ))}
                </div>
                <ul className="sp-seals" aria-label="Mission partners">
                  {weight.left.seals.map((s) => (
                    <li key={s.alt}>
                      <Image src={s.src} alt={s.alt} width={232} height={232} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="sp-side sp-side--paper">
              <div className="sp-block sp-seam">
                <h2 id="weight-title" className="sp-display sp-display--md sp-plate">
                  {weight.right.heading} <span className="sp-muted">{weight.right.since}</span>
                </h2>
                <dl className="sp-numbers">
                  {weight.right.numbers.map((n, i) => (
                    <div key={n.label}>
                      <dt>
                        {n.label}
                        <small>{n.sub}</small>
                      </dt>
                      <dd className="sp-num">
                        {n.prefix}
                        <span data-sc-count={`0 ${n.value}`} data-sc-count-at={`${(0.08 + i * 0.06).toFixed(2)} ${(0.45 + i * 0.05).toFixed(2)}`}>
                          0
                        </span>
                        {n.suffix}
                      </dd>
                    </div>
                  ))}
                  <div>
                    <dt>
                      {weight.right.cpars.label}
                      <small>{weight.right.cpars.sub}</small>
                    </dt>
                    <dd className="sp-num sp-num--word">{weight.right.cpars.value}</dd>
                  </div>
                </dl>
                <p className="sp-fine">{weight.right.vehicle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · Reach: four networks against thirteen commands. */}
        <section className="sp-flow" data-sc-act="flow" aria-labelledby="reach-title">
          <div className="sp-side sp-side--dark">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="60">
                <h2 className="sp-display sp-display--md">{reach.left.heading}</h2>
                <ul className="sp-networks">
                  {reach.left.networks.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <p className="sp-tools">{reach.left.tools.join(" · ")}</p>
              </div>
            </div>
          </div>
          <div className="sp-side sp-side--paper">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="60">
                <h2 id="reach-title" className="sp-display sp-display--md sp-plate">
                  {reach.right.heading}
                </h2>
                <p className="sp-body">{reach.right.sub}</p>
              </div>
              <ul className="sp-commands" data-sc-reveal="left" data-sc-reveal-at="0.12 0.55">
                {reach.right.commands.map((c) => (
                  <li key={c.name}>
                    <strong>{c.name}</strong>
                    <span>{c.place}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7 · Resolve: the collapse. Last element on the page. */}
        <section className="sp-act sp-act--close" data-sc-act="pin" data-sc-span="1.3" data-sp-close aria-labelledby="close-title">
          <div className="sp-stage" data-sc-stage>
            <div className="sp-side sp-side--dark sp-close__lead">
              <div className="sp-block sp-seam">
                <h2 id="close-title" className="sp-display sp-display--lg" data-sc-cue="0 1 0 0">
                  {close.heading}
                </h2>
              </div>
            </div>
            <div className="sp-side sp-side--paper sp-close">
              <div className="sp-block sp-block--wide sp-seam">
                <div>
                  <p className="sp-body">{close.paragraph}</p>
                  <div className="sp-poc">
                    <Image className="sp-poc__photo" src={close.person.photo.src} alt={close.person.photo.alt} width={600} height={800} />
                    <div className="sp-poc__info">
                      <strong>{close.person.name}</strong>
                      <span>{close.person.title}</span>
                      <a href={close.person.email.href}>{close.person.email.label}</a>
                      <a href={close.person.phone.href}>{close.person.phone.label}</a>
                      <a href={close.person.linkedin.href} target="_blank" rel="noreferrer">
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                  <p className="sp-close__cta">
                    <a className="sp-cta" href={CTA.href}>
                      {CTA.label}
                    </a>
                  </p>
                  <p className="sp-event">
                    <strong>{close.event.lead}</strong> {close.event.when} <a href={close.event.link.href}>{close.event.link.label}</a>
                  </p>
                </div>
              </div>
              <footer className="sp-foot sp-seam">
                <nav aria-label="Competitive Range Solutions">
                  {close.links.map((l) => (
                    <a key={l.label} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </nav>
                {close.fine.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </footer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
