/**
 * Copy for the split-stage exploration (exploration-v2).
 *
 * Every string on the page is the live /ekm copy from ./ekm.ts, verbatim: the
 * President wrote it and it stands. This file only re-groups it for the two
 * columns. The one addition is the pair of words the seam carries, which is
 * chrome, not copy.
 */
import {
  capabilities,
  caseStudies,
  contact,
  contracts,
  events,
  footer,
  hero as source,
  locations,
  metrics,
  mission,
  partners,
  testimonials,
  SITE,
} from "./ekm";

export { SITE, mission, capabilities, partners, contracts, caseStudies, locations, testimonials, contact, footer, events, metrics };

/** The two words the divider carries for the whole page. Chrome, not copy. */
export const sides = { left: "Scattered", right: "Governed" };

export const hero = {
  eyebrow: source.kicker,
  left: { paragraph: source.paragraph },
  right: {
    headline: source.headline,
    highlight: source.highlight,
    tagline: source.subheadline,
    primary: source.primary,
    ghost: { label: source.ghost.label, href: "#contact" },
  },
  poster: "/scrollcraft/hero-poster.jpg",
  clip: "/scrollcraft/hero.mp4",
  clipMobile: "/scrollcraft/hero-m.mp4",
};

/** The signature move: the first case study's problem, filed into one environment. */
export const peak = {
  study: caseStudies.items[0],
  /** Eight places program knowledge was found to live, lifted from both case studies' problem statements. */
  fragments: [
    "separate portals",
    "project tools",
    "ticketing systems",
    "databases",
    "spreadsheets",
    "email threads",
    "local files",
    "disconnected tools",
  ],
  /** Scattered layout on the dark side: x%, y% of the column, rotation in degrees. */
  scatter: [
    [12, 16, -6],
    [50, 11, 4],
    [28, 31, -3],
    [62, 38, 7],
    [9, 49, 5],
    [42, 56, -8],
    [22, 72, 3],
    [58, 69, -4],
  ] as const,
};

/** "$312M+" -> { prefix: "$", value: 312, suffix: "M+" } so the figures can count up. */
function figure(value: string) {
  const m = /^(\$?)(\d+)(.*)$/.exec(value);
  if (!m) return null;
  return { prefix: m[1], value: Number(m[2]), suffix: m[3] };
}

export const stats = metrics.stats.map((s) => ({ ...s, figure: s.small ? null : figure(s.value) }));

export const CTA = { label: source.ghost.label, href: contact.person.email.href };
