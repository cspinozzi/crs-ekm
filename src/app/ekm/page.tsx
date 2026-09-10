import Image from "next/image";
import type { CSSProperties } from "react";
import "./scrollcraft.css";
import "./split.css";
import { ScrollCraftMount } from "./scrollcraft-mount";
import {
  CTA,
  SITE,
  capabilities,
  caseStudies,
  contact,
  contracts,
  events,
  footer,
  hero,
  locations,
  metrics,
  mission,
  partners,
  peak,
  sides,
  stats,
  testimonials,
} from "@/content/split";

/** Overlapping cue windows across a pinned act: the first greets, the last enters and holds. */
function quoteCue(i: number, n: number) {
  // Plateaus spread evenly over the first 80% of the act; the last one holds so
  // the column never goes empty.
  const step = 0.8 / Math.max(n - 1, 1);
  const half = step * 0.7;
  const c = i * step;
  if (i === 0) return `0 ${half.toFixed(2)} 0`;
  if (i === n - 1) return (c - half).toFixed(2);
  return `${(c - half).toFixed(2)} ${(c + half).toFixed(2)} 0.3 0.3`;
}

function CaseStudy({ study, first }: { study: (typeof caseStudies.items)[number]; first: boolean }) {
  return (
    <section className="sp-flow sp-flow--tight" data-sc-act="flow" aria-label={study.title} id={first ? "case-study" : undefined}>
      <div className="sp-side sp-side--dark">
        <div className="sp-block sp-seam">
          <div data-sc-in data-sc-stagger="70">
            {first && <p className="sp-eyebrow">{caseStudies.kicker}</p>}
            <p className="sp-small sp-small--accent">{caseStudies.problemLabel}</p>
            <p className="sp-quote-lg">{study.problem}</p>
          </div>
        </div>
      </div>
      <div className="sp-side sp-side--paper">
        <div className="sp-block sp-block--wide sp-seam">
          <div data-sc-in data-sc-stagger="70">
            <h2 className="sp-display sp-display--sm">{study.title}</h2>
            <p className="sp-body">{study.sub}</p>
            <dl className="sp-numbers sp-numbers--sm">
              {study.stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd className="sp-num">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="sp-small sp-small--accent">{caseStudies.solutionLabel}</p>
            <p className="sp-body">{study.solution}</p>
            <p className="sp-links">
              <a href={study.pdf} target="_blank" rel="noreferrer">
                {caseStudies.readLabel}
              </a>
              <a href={study.pdf} target="_blank" rel="noreferrer" download>
                {caseStudies.downloadLabel}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
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
        <section className="sp-act sp-hero" data-sc-act="scrub" data-sc-flow-at="1199" data-sc-span="1.3" data-sc-dwell="0.3" aria-labelledby="hero-title">
          <div className="sp-stage" data-sc-stage>
            <div className="sp-side sp-side--dark sp-hero__media">
              {/* The engine swaps this frame-holder for the clip; a plain <img> is what it expects. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="sc-stage__poster" src={hero.poster} alt="" width={864} height={1080} />
              <video data-sc-scrub data-sc-src={hero.clip} data-sc-src-mobile={hero.clipMobile} muted playsInline aria-label="Special operations forces on mission" />
              <div className="sc-scrim sc-scrim--band" aria-hidden="true" />
              <div className="sp-block sp-seam sp-hero__left">
                <p className="sp-hero__p" data-sc-cue="0 1 0 0">
                  {hero.left.paragraph}
                </p>
              </div>
            </div>
            <div className="sp-side sp-side--paper">
              <div className="sp-block sp-seam">
                <p className="sp-eyebrow" data-sc-cue="0 1 0 0">
                  {hero.eyebrow}
                </p>
                <h1 id="hero-title" className="sp-display sp-display--xl" data-sc-cue="0 1 0 0">
                  {hero.right.headline} <em>{hero.right.highlight}</em>
                </h1>
                <p className="sp-lede" data-sc-cue="0 1 0 0">
                  {hero.right.tagline}
                </p>
                <p className="sp-actions" data-sc-cue="0 1 0 0">
                  <a className="sp-cta" href={hero.right.primary.href}>
                    {hero.right.primary.label}
                  </a>
                  <a className="sp-cta sp-cta--ghost" href={hero.right.ghost.href}>
                    {hero.right.ghost.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · The mission. Still, on purpose. */}
        <section className="sp-flow sp-flow--tight" data-sc-act="flow" aria-labelledby="mission-title">
          <div className="sp-side sp-side--dark">
            <div className="sp-block sp-seam">
              <div className="sp-card" data-sc-in data-sc-stagger="70">
                <p className="sp-small sp-small--accent">{mission.card.kicker}</p>
                <p className="sp-quote-lg">{mission.card.body}</p>
              </div>
            </div>
          </div>
          <div className="sp-side sp-side--paper">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="70">
                <h2 id="mission-title" className="sp-display sp-display--md sp-plate">
                  {mission.kicker}
                </h2>
                <p className="sp-display sp-display--md">
                  {mission.headingLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
                <p className="sp-lede">
                  <strong>{mission.p1Strong}</strong>
                  {mission.p1Rest}
                </p>
                <p className="sp-body">{mission.p2}</p>
                <p className="sp-body sp-body--strong">{mission.p3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 · Clarity, the peak: the filing. The first case study's problem, resolved. */}
        <section className="sp-act sp-act--peak" data-sc-act="pin" data-sc-flow-at="1199" data-sc-span="3.4" data-sp-peak aria-labelledby="peak-title">
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
              <div className="sp-caption sp-seam">
                <p className="sp-small sp-small--accent">{caseStudies.problemLabel}</p>
                <p>{peak.study.problem}</p>
              </div>
            </div>
            <div className="sp-side sp-side--paper">
              <div className="sp-block sp-seam">
                <h2 id="peak-title" className="sp-display sp-display--md sp-plate">
                  {peak.study.title}
                </h2>
                <ol className="sp-shelf" aria-label="Filed into one environment">
                  {peak.fragments.map((f, i) => (
                    <li key={f} className="sp-slot" data-sp-slot={i}>
                      <span className="sp-slot__text">{f}</span>
                    </li>
                  ))}
                </ol>
                <p className="sp-lede sp-peak__result" data-sc-cue="0.7 1 0.2 0.1">
                  <strong>{peak.study.stats[3].value}</strong> {peak.study.stats[3].label}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · Rigor: the six task areas. */}
        <section className="sp-flow" data-sc-act="flow" aria-labelledby="rigor-title" id="capabilities">
          <div className="sp-side sp-side--dark">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="70">
                <p className="sp-eyebrow">{capabilities.kicker}</p>
                <h2 className="sp-display sp-display--md">{capabilities.heading.split(" ONE ")[0]}</h2>
              </div>
            </div>
          </div>
          <div className="sp-side sp-side--paper">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="70">
                <h2 id="rigor-title" className="sp-display sp-display--md sp-plate">
                  {"ONE " + capabilities.heading.split(" ONE ")[1]}
                </h2>
                <p className="sp-body">{capabilities.sub}</p>
              </div>
            </div>
          </div>
          <dl className="sp-ledger">
            {capabilities.cards.map((card) => (
              <div className="sp-ledger__row" key={card.n} data-sc-in data-sc-stagger="60">
                <dt className="sp-ledger__k sp-side--dark">
                  <span className="sp-seam">
                    <small>{card.n}</small>
                    {card.title}
                  </span>
                </dt>
                <dd className="sp-ledger__v sp-side--paper">
                  <span className="sp-seam">{card.body}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 5 · Weight: their words against the record. */}
        <section className="sp-act" data-sc-act="pin" data-sc-flow-at="1199" data-sc-span="2.6" aria-labelledby="weight-title" id="metrics">
          <div className="sp-stage" data-sc-stage>
            <div className="sp-side sp-side--dark">
              <div className="sp-block sp-seam">
                <h2 className="sp-display sp-display--sm">{testimonials.kicker}</h2>
                <div className="sp-quotes__stack">
                  {testimonials.quotes.map((q, i) => (
                    <blockquote className="sp-quote" key={q.text} data-sc-cue={quoteCue(i, testimonials.quotes.length)}>
                      <p>“{q.text}”</p>
                      <footer>{q.by}</footer>
                    </blockquote>
                  ))}
                </div>
                <p className="sp-small sp-small--accent sp-partners__k">{partners.kicker}</p>
                <p className="sp-body sp-partners__p">{partners.paragraph}</p>
                <div className="sp-seals" role="group" aria-label="Mission partners">
                  {[0, 1, 2].map((row) => {
                    const seals = partners.logos;
                    const shift = Math.round((row * seals.length) / 3);
                    const ordered = [...seals.slice(shift), ...seals.slice(0, shift)];
                    return (
                      <div className="sp-seals__row" data-row={row} key={row}>
                        <div className="sp-seals__track">
                          {[...ordered, ...ordered].map((s, i) => (
                            <div className="sp-seal" aria-hidden={i >= ordered.length} key={`${s.alt}-${i}`}>
                              <Image src={s.src} alt={i < ordered.length ? s.alt : ""} width={232} height={232} />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="sp-side sp-side--paper">
              <div className="sp-block sp-seam">
                <h2 id="weight-title" className="sp-display sp-display--md sp-plate">
                  {metrics.heading} <span className="sp-muted">{metrics.since}</span>
                </h2>
                <dl className="sp-numbers">
                  {stats.map((s, i) => (
                    <div key={s.label}>
                      <dt>
                        {s.label}
                        <small>{s.sub}</small>
                      </dt>
                      {s.figure ? (
                        <dd className="sp-num">
                          {s.figure.prefix}
                          <span data-sp-mobile-count={s.figure.value} data-sc-count={`0 ${s.figure.value}`} data-sc-count-at={`${(0.08 + i * 0.06).toFixed(2)} ${(0.45 + i * 0.05).toFixed(2)}`}>
                            {s.figure.value}
                          </span>
                          {s.figure.suffix}
                        </dd>
                      ) : (
                        <dd className="sp-num sp-num--word">{s.value}</dd>
                      )}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · The vehicle. */}
        <section className="sp-flow sp-flow--tight" data-sc-act="flow" aria-labelledby="contracts-title" id="contracts">
          <div className="sp-side sp-side--dark">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="70">
                <p className="sp-eyebrow">{contracts.kicker}</p>
                <h2 id="contracts-title" className="sp-display sp-display--md">
                  {contracts.heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="sp-side sp-side--paper">
            <div className="sp-block sp-block--wide sp-seam">
              <div className="sp-card" data-sc-in data-sc-stagger="70">
                <p className="sp-small sp-small--accent">{contracts.card.kicker}</p>
                <h3 className="sp-display sp-display--sm">{contracts.card.title}</h3>
                <p className="sp-body">{contracts.card.body}</p>
                <dl className="sp-card__rows">
                  {contracts.card.rows.map((r) => (
                    <div key={r.label} className={r.strong ? "is-strong" : undefined}>
                      <dt>{r.label}</dt>
                      <dd>{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* 7 · The record, in full: both case studies. */}
        {caseStudies.items.map((study, i) => (
          <CaseStudy key={study.title} study={study} first={i === 0} />
        ))}

        {/* 8 · Reach: the environment against thirteen commands. */}
        <section className="sp-flow" data-sc-act="flow" aria-labelledby="reach-title" id="locations">
          <div className="sp-side sp-side--dark">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="60">
                <h2 className="sp-display sp-display--md">{capabilities.panel.title}</h2>
                <ul className="sp-chips">
                  {capabilities.panel.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <p className="sp-small sp-small--accent sp-networks__k">{capabilities.panel.networksLabel}</p>
                <ul className="sp-networks">
                  {capabilities.panel.networks.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="sp-side sp-side--paper">
            <div className="sp-block sp-seam">
              <div data-sc-in data-sc-stagger="60">
                <p className="sp-eyebrow">{locations.kicker}</p>
                <h2 id="reach-title" className="sp-display sp-display--md sp-plate">
                  {locations.heading}
                </h2>
                <p className="sp-body">{locations.sub}</p>
              </div>
              <ul className="sp-commands" data-sc-reveal="left" data-sc-reveal-at="0.12 0.55">
                {locations.cells.map((c) => (
                  <li key={c.name}>
                    <strong>{c.name}</strong>
                    <span>{c.place}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 9 · Resolve: the seam gives way. Last element on the page. */}
        <section className="sp-flow sp-close" data-sc-act="flow" data-sp-close aria-labelledby="close-title" id="contact">
          <div className="sp-side sp-side--dark">
            <div className="sp-block">
              <div className="sp-event" data-sc-in data-sc-stagger="70">
                <p className="sp-small sp-small--accent">{events.eyebrow}</p>
                <h3 className="sp-display sp-display--sm">{events.title}</h3>
                <p className="sp-body">{events.summary}</p>
                <p className="sp-event__when">
                  {events.detailLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
                <p>
                  <a className="sp-cta sp-cta--sm" href={events.button.href} target="_blank" rel="noreferrer">
                    {events.button.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="sp-side sp-side--paper">
            <div className="sp-block sp-block--wide">
              <div data-sc-in data-sc-stagger="70">
                <h2 id="close-title" className="sp-display sp-display--lg">
                  {contact.heading}
                </h2>
                <p className="sp-body">{contact.paragraph}</p>
                <p className="sp-small sp-small--accent sp-poc__k">{contact.kicker}</p>
                <div className="sp-poc">
                  <Image className="sp-poc__photo" src={contact.person.photo.src} alt={contact.person.photo.alt} width={600} height={800} />
                  <div className="sp-poc__info">
                    <strong>{contact.person.name}</strong>
                    <span>{contact.person.title}</span>
                    <a href={contact.person.email.href}>{contact.person.email.label}</a>
                    <a href={contact.person.phone.href}>{contact.person.phone.label}</a>
                    <a href={contact.person.linkedin.href} target="_blank" rel="noreferrer">
                      {contact.person.linkedin.label}
                    </a>
                  </div>
                </div>
                <dl className="sp-facts">
                  <div>
                    <dt>{contact.hq.label}</dt>
                    {contact.hq.lines.map((l) => (
                      <dd key={l}>{l}</dd>
                    ))}
                  </div>
                  <div>
                    <dt>{contact.setAside.label}</dt>
                    {contact.setAside.lines.map((l) => (
                      <dd key={l}>{l}</dd>
                    ))}
                  </div>
                  <div>
                    <dt>{contact.connect.label}</dt>
                    <dd>
                      <a href={contact.connect.link.href} target="_blank" rel="noreferrer">
                        {contact.connect.link.label}
                      </a>
                    </dd>
                  </div>
                </dl>
                <p className="sp-close__cta">
                  <a className="sp-cta" href={CTA.href}>
                    {CTA.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <footer className="sp-foot">
            <p className="sp-foot__tagline">{footer.tagline}</p>
            <div className="sp-foot__cols">
              {footer.columns.map((col) => (
                <nav key={col.label} aria-label={col.label}>
                  <p className="sp-small">{col.label}</p>
                  {col.links.map((l) => (
                    <a key={l.label} href={l.href} {...("external" in l && l.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                      {l.label}
                    </a>
                  ))}
                </nav>
              ))}
            </div>
            <p>{footer.copyright}</p>
            <p>{footer.registry}</p>
          </footer>
        </section>
      </main>
    </>
  );
}
