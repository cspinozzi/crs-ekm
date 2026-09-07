import Image from "next/image";
import {
  capabilities,
  caseStudies,
  contact,
  contracts,
  footer,
  hero,
  locations,
  metrics,
  mission,
  partners,
  SITE,
} from "@/content/ekm";
import { Header } from "./header";
import styles from "./ekm.module.css";
import { Testimonials } from "./testimonials";

function Kicker({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return centered ? (
    <div className={styles.centerKicker}>
      <span />
      {children}
      <span />
    </div>
  ) : (
    <div className={styles.kicker}>
      <span />
      {children}
    </div>
  );
}

function Brand() {
  return (
    <a className={styles.footerBrand} href={SITE} aria-label="Competitive Range Solutions home">
      <Image src="/images/crs-logo.png" alt="" width={167} height={223} />
      <span>
        <strong>COMPETITIVE RANGE</strong>
        <small>SOLUTIONS · SDVOSB</small>
      </span>
    </a>
  );
}

export default function EkmPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero} aria-labelledby="hero-title">
        <Image
          className={styles.heroImage}
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={`${styles.inner} ${styles.heroInner}`}>
          <Kicker>{hero.kicker}</Kicker>
          <h1 id="hero-title">
            {hero.headline} <em>{hero.highlight}</em>
          </h1>
          <h2>{hero.subheadline}</h2>
          <p>{hero.paragraph}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={hero.primary.href}>
              {hero.primary.label}
            </a>
            <a className={styles.ghostButton} href={hero.ghost.href}>
              {hero.ghost.label}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.mission} aria-labelledby="mission-title">
        <div className={`${styles.inner} ${styles.missionGrid}`}>
          <div>
            <Kicker>{mission.kicker}</Kicker>
            <h2 id="mission-title" className={styles.missionTitle}>
              {mission.headingLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
          <div className={styles.missionCopy}>
            <p>
              <strong>{mission.p1Strong}</strong>
              {mission.p1Rest}
            </p>
            <p>{mission.p2}</p>
            <p className={styles.missionPromise}>{mission.p3}</p>
            <aside className={styles.leadershipCard}>
              <span>{mission.card.kicker}</span>
              <p>{mission.card.body}</p>
            </aside>
          </div>
        </div>
      </section>

      <section id="metrics" className={styles.metrics} aria-labelledby="metrics-title">
        <div className={styles.inner}>
          <div className={styles.metricsHeader}>
            <h2 id="metrics-title">{metrics.heading}</h2>
            <span>{metrics.since}</span>
          </div>
          <div className={styles.metricsGrid}>
            {metrics.stats.map((stat) => (
              <article className={styles.metric} key={stat.label}>
                <strong className={stat.small ? styles.metricSmallValue : ""}>{stat.value}</strong>
                <h3>{stat.label}</h3>
                <p>{stat.sub}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className={styles.capabilities} aria-labelledby="capabilities-title">
        <div className={styles.inner}>
          <Kicker>{capabilities.kicker}</Kicker>
          <h2 id="capabilities-title" className={styles.sectionTitle}>
            {capabilities.heading}
          </h2>
          <p className={styles.sectionLead}>{capabilities.sub}</p>

          <div className={styles.capabilityGrid}>
            {capabilities.cards.map((card) => (
              <article className={styles.capabilityCard} key={card.n}>
                <span>{card.n}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.environmentPanel}>
            <h3>{capabilities.panel.title}</h3>
            <div className={styles.environmentContent}>
              <div className={styles.chips}>
                {capabilities.panel.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              <div className={styles.networks}>
                <strong>{capabilities.panel.networksLabel}</strong>
                <div>
                  {capabilities.panel.networks.map((network) => (
                    <span key={network}>{network}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partners} aria-labelledby="partners-title">
        <div className={`${styles.inner} ${styles.partnersCopy}`}>
          <Kicker>{partners.kicker}</Kicker>
          <p id="partners-title">{partners.paragraph}</p>
        </div>
        <div className={styles.ticker} aria-label="Mission partners">
          <div className={styles.tickerTrack}>
            {[...partners.logos, ...partners.logos].map((logo, index) => (
              <div className={styles.partnerLogo} aria-hidden={index >= partners.logos.length} key={`${logo.alt}-${index}`}>
                <Image src={logo.src} alt={index < partners.logos.length ? logo.alt : ""} width={232} height={232} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contracts" className={styles.contracts} aria-labelledby="contracts-title">
        <div className={styles.contractInner}>
          <Kicker centered>{contracts.kicker}</Kicker>
          <h2 id="contracts-title">{contracts.heading}</h2>
          <article className={styles.vehicleCard}>
            <span className={styles.redLabel}>{contracts.card.kicker}</span>
            <h3>{contracts.card.title}</h3>
            <p>{contracts.card.body}</p>
            <dl>
              {contracts.card.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd className={row.strong ? styles.factStrong : ""}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <section id="case-study" className={styles.caseStudies} aria-label="Case studies">
        <div className={styles.caseInner}>
          {caseStudies.items.map((study, studyIndex) => (
            <article className={styles.caseStudy} key={study.title}>
              {studyIndex === 0 ? <Kicker centered>{caseStudies.kicker}</Kicker> : <div className={styles.caseDivider} />}
              <h2>{study.title}</h2>
              <p className={styles.caseSub}>{study.sub}</p>
              <div className={styles.caseStats}>
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className={styles.caseDetails}>
                <div>
                  <span>{caseStudies.problemLabel}</span>
                  <p>{study.problem}</p>
                </div>
                <div>
                  <span>{caseStudies.solutionLabel}</span>
                  <p>{study.solution}</p>
                </div>
              </div>
              <div className={styles.caseActions}>
                <a className={styles.primaryButton} href={study.pdf} target="_blank" rel="noreferrer">
                  {caseStudies.readLabel}
                </a>
                <a className={styles.ghostButton} href={study.pdf} target="_blank" rel="noreferrer">
                  {caseStudies.downloadLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="locations" className={styles.locations} aria-labelledby="locations-title">
        <div className={styles.inner}>
          <Kicker>{locations.kicker}</Kicker>
          <h2 id="locations-title" className={styles.sectionTitle}>
            {locations.heading}
          </h2>
          <p className={styles.sectionLead}>{locations.sub}</p>
          <div className={styles.locationsGrid}>
            {locations.cells.map((location) => (
              <article className={location.hq ? styles.locationHq : ""} key={location.name}>
                <h3>{location.name}</h3>
                <p>{location.place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <div className={`${styles.inner} ${styles.contactGrid}`}>
          <div>
            <h2 id="contact-title">{contact.heading}</h2>
            <p>{contact.paragraph}</p>
          </div>
          <div className={styles.contactRail}>
            <span className={styles.redLabel}>{contact.kicker}</span>
            <div className={styles.person}>
              <Image src={contact.person.photo.src} alt={contact.person.photo.alt} width={600} height={800} />
              <div>
                <h3>{contact.person.name}</h3>
                <p>{contact.person.title}</p>
                <a href={contact.person.email.href}>{contact.person.email.label}</a>
                <a href={contact.person.phone.href}>{contact.person.phone.label}</a>
                <a href={contact.person.linkedin.href} target="_blank" rel="noreferrer">
                  {contact.person.linkedin.label}
                </a>
              </div>
            </div>
            <div className={styles.contactFacts}>
              <div>
                <strong>{contact.hq.label}</strong>
                {contact.hq.lines.map((line) => <span key={line}>{line}</span>)}
              </div>
              <div>
                <strong>{contact.setAside.label}</strong>
                {contact.setAside.lines.map((line) => <span key={line}>{line}</span>)}
              </div>
              <div>
                <strong>{contact.connect.label}</strong>
                <a href={contact.connect.link.href} target="_blank" rel="noreferrer">
                  {contact.connect.link.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.inner} ${styles.footerTop}`}>
          <div>
            <Brand />
            <p>{footer.tagline}</p>
          </div>
          <div className={styles.footerColumns}>
            {footer.columns.map((column) => (
              <nav key={column.label} aria-label={column.label}>
                <strong>{column.label}</strong>
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <div className={`${styles.inner} ${styles.footerBottom}`}>
          <span>{footer.copyright}</span>
          <span>{footer.registry}</span>
        </div>
      </footer>
    </main>
  );
}
