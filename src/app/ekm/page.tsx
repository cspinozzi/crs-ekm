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
import { CountUp } from "./count-up";
import styles from "./ekm.module.css";
import { Header } from "./header";
import { SmoothScroll } from "./smooth-scroll";
import { Testimonials } from "./testimonials";

export default function EkmPage() {
  return (
    <main className={styles.page}>
      <SmoothScroll />
      <Header />

      {/* Hero */}
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
        <div className={`${styles.inner} ${styles.heroContent}`}>
          <p className={styles.label}>{hero.kicker}</p>
          <h1 id="hero-title">
            {hero.headline} <em>{hero.highlight}</em>
          </h1>
          <p className={styles.heroSub}>{hero.subheadline}</p>
          <p className={styles.heroText}>{hero.paragraph}</p>
          <div className={styles.actions}>
            <a className={styles.button} href={hero.primary.href}>
              <span>{hero.primary.label}</span>
            </a>
            <a className={`${styles.button} ${styles.buttonGhost}`} href={hero.ghost.href}>
              <span>{hero.ghost.label}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission} aria-labelledby="mission-title">
        <div className={styles.inner}>
          <h2 id="mission-title" className={styles.title}>
            {mission.kicker}
          </h2>
          <div className={styles.missionGrid}>
            <p className={styles.missionHeading}>
              {mission.headingLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <div className={styles.missionCopy}>
              <p>
                <strong>{mission.p1Strong}</strong>
                {mission.p1Rest}
              </p>
              <p>{mission.p2}</p>
              <p className={styles.missionPromise}>{mission.p3}</p>
              <aside className={styles.leadershipCard}>
                <span className={styles.label}>{mission.card.kicker}</span>
                <p>{mission.card.body}</p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className={styles.metrics} aria-labelledby="metrics-title">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <h2 id="metrics-title" className={styles.title}>
              {metrics.heading}
            </h2>
            <span className={styles.label}>{metrics.since}</span>
          </div>
          <div className={styles.statGrid}>
            {metrics.stats.map((stat) => (
              <article className={styles.stat} key={stat.label}>
                <h3>{stat.label}</h3>
                <CountUp value={stat.value} className={stat.small ? styles.statValueSmall : styles.statValue} />
                <p>{stat.sub}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className={styles.capabilities} aria-labelledby="capabilities-title">
        <div className={styles.gridField}>
          <div className={styles.inner}>
            <h2 id="capabilities-title" className={`${styles.title} ${styles.titleBox}`}>
              {capabilities.kicker}
            </h2>
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.display}>{capabilities.heading}</p>
            <p className={styles.lead}>{capabilities.sub}</p>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.cards.map((card) => (
              <article className={styles.capability} key={card.n}>
                <span className={styles.capabilityIndex}>{card.n}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.environmentPanel}>
            <h3 className={styles.h3}>{capabilities.panel.title}</h3>
            <div className={styles.environmentContent}>
              <div className={styles.chips}>
                {capabilities.panel.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
              <div className={styles.networks}>
                <span className={styles.label}>{capabilities.panel.networksLabel}</span>
                <div className={styles.networkChips}>
                  {capabilities.panel.networks.map((network) => (
                    <span key={network}>{network}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className={styles.partners} aria-labelledby="partners-title">
        <div className={`${styles.inner} ${styles.centered}`}>
          <h2 id="partners-title" className={`${styles.title} ${styles.titleCenter}`}>
            {partners.kicker}
          </h2>
          <p className={`${styles.lead} ${styles.leadCenter}`}>{partners.paragraph}</p>
        </div>
        <div className={styles.ticker} aria-label="Mission partners">
          <div className={styles.tickerTrack}>
            {[...partners.logos, ...partners.logos].map((logo, index) => (
              <div
                className={styles.partnerLogo}
                aria-hidden={index >= partners.logos.length}
                key={`${logo.alt}-${index}`}
              >
                <Image
                  src={logo.src}
                  alt={index < partners.logos.length ? logo.alt : ""}
                  width={232}
                  height={232}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract vehicle */}
      <section id="contracts" className={styles.contracts} aria-labelledby="contracts-title">
        <div className={`${styles.inner} ${styles.centered}`}>
          <h2 id="contracts-title" className={`${styles.title} ${styles.titleCenter}`}>
            {contracts.kicker}
          </h2>
          <p className={`${styles.display} ${styles.displayCenter}`}>{contracts.heading}</p>
          <article className={styles.vehicleCard}>
            <span className={styles.label}>{contracts.card.kicker}</span>
            <h3 className={styles.h3}>{contracts.card.title}</h3>
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

      {/* Case studies */}
      <section id="case-study" className={styles.caseStudies} aria-labelledby="case-studies-title">
        <div className={styles.inner}>
          <h2 id="case-studies-title" className={`${styles.title} ${styles.titleCenter}`}>
            {caseStudies.kicker}
          </h2>

          {caseStudies.items.map((study) => (
            <article className={styles.caseStudy} key={study.title}>
              <div className={styles.caseIntro}>
                <h3 className={styles.caseTitle}>{study.title}</h3>
                <p className={styles.caseSub}>{study.sub}</p>
                <div className={styles.caseActions}>
                  <a
                    className={`${styles.button} ${styles.buttonSmall}`}
                    href={study.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{caseStudies.readLabel}</span>
                  </a>
                  <a
                    className={`${styles.button} ${styles.buttonSmall} ${styles.buttonGhost}`}
                    href={study.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{caseStudies.downloadLabel}</span>
                  </a>
                </div>
              </div>

              <div className={styles.caseBody}>
                <div className={styles.caseStats}>
                  {study.stats.map((stat) => (
                    <div className={styles.caseStat} key={stat.label}>
                      <CountUp value={stat.value} className={styles.caseStatValue} />
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.caseDetails}>
                  <div>
                    <h4 className={styles.h4}>{caseStudies.problemLabel}</h4>
                    <p>{study.problem}</p>
                  </div>
                  <div>
                    <h4 className={styles.h4}>{caseStudies.solutionLabel}</h4>
                    <p>{study.solution}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className={styles.locations} aria-labelledby="locations-title">
        <div className={styles.inner}>
          <h2 id="locations-title" className={styles.title}>
            {locations.kicker}
          </h2>
          <div className={styles.sectionIntro}>
            <p className={styles.display}>{locations.heading}</p>
            <p className={styles.lead}>{locations.sub}</p>
          </div>
          <div className={styles.locationGrid}>
            {locations.cells.map((location) => (
              <article className={`${styles.location} ${location.hq ? styles.locationHq : ""}`} key={location.name}>
                <h3>{location.name}</h3>
                <p>{location.place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact */}
      <section id="contact" className={styles.contact} aria-labelledby="contact-title">
        <div className={`${styles.inner} ${styles.centered}`}>
          <h2 id="contact-title" className={`${styles.title} ${styles.titleCenter}`}>
            {contact.heading}
          </h2>
          <p className={`${styles.lead} ${styles.leadCenter}`}>{contact.paragraph}</p>
        </div>
        <div className={`${styles.inner} ${styles.contactGrid}`}>
          <div className={styles.person}>
            <Image src={contact.person.photo.src} alt={contact.person.photo.alt} width={600} height={800} />
            <div>
              <span className={styles.label}>{contact.kicker}</span>
              <h3>{contact.person.name}</h3>
              <p>{contact.person.title}</p>
              <a href={contact.person.email.href}>{contact.person.email.label}</a>
              <a href={contact.person.phone.href}>{contact.person.phone.label}</a>
              <a href={contact.person.linkedin.href} target="_blank" rel="noreferrer">
                {contact.person.linkedin.label}
              </a>
            </div>
          </div>
          <div className={styles.factList}>
            <div>
              <strong>{contact.hq.label}</strong>
              {contact.hq.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <div>
              <strong>{contact.setAside.label}</strong>
              {contact.setAside.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <div>
              <strong>{contact.connect.label}</strong>
              <a href={contact.connect.link.href} target="_blank" rel="noreferrer">
                {contact.connect.link.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.inner} ${styles.footerTop}`}>
          <div className={styles.footerBrand}>
            <a href={SITE} aria-label="Competitive Range Solutions home">
              <Image src="/images/crs-logo.png" alt="" width={167} height={223} />
              <span className={styles.srOnly}>{footer.wordmark}</span>
            </a>
            <p>{footer.tagline}</p>
          </div>
          <div className={styles.footerColumns}>
            {footer.columns.map((column) => (
              <nav key={column.label} aria-label={column.label}>
                <strong className={styles.label}>{column.label}</strong>
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
        <div className={`${styles.inner} ${styles.footerMeta}`}>
          <span>{footer.copyright}</span>
          <span>{footer.registry}</span>
        </div>
        <div className={styles.footerWordmark} aria-hidden="true">
          {footer.wordmark}
        </div>
      </footer>
    </main>
  );
}
