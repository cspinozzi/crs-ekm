/**
 * Copy for the split-stage exploration (exploration-v2).
 *
 * Everything factual is lifted from the live /ekm page (see ./ekm.ts). New
 * lines are headings that name the two sides of the argument. Em dashes in the
 * source copy are replaced with periods, commas or colons.
 */
import { capabilities, contact, events, locations, metrics, partners, testimonials, SITE } from "./ekm";

export { SITE };

/** The one action, one label, used in the hero and at the close. */
export const CTA = { label: "Contact CRS", href: "mailto:EWatson@GetCRS.com" };

/** The two sides the divider carries for the whole page. */
export const sides = { left: "Scattered", right: "Governed" };

export const hero = {
  eyebrow: "GSA Polaris GWAC, SDVOSB Pool. Prime holder.",
  left: {
    headline: "Program knowledge, scattered across portals, spreadsheets and inboxes.",
  },
  right: {
    h1: "Enterprise Knowledge Management for USSOCOM",
    tagline: "Relevant knowledge, exchanged at the speed of mission.",
  },
  poster: "/scrollcraft/hero-poster.jpg",
  clip: "/scrollcraft/hero.mp4",
  clipMobile: "/scrollcraft/hero-m.mp4",
};

export const unease = {
  left: {
    label: "In the Government's words",
    body:
      "Implementation knowledge for 100+ concurrent projects arrived into an unmanaged drop-off and dispersed into email threads, local files, and disconnected tools: project lists and points of contact disagreed across systems, status was reassembled by hand each cycle, and the legacy on-premises SharePoint platform holding it all was reaching end of life while in continuous use with content from CUI through SECRET.",
    verdict: "Assessed by the Government as outdated, inconsistent, and difficult to locate.",
  },
  right: {
    strong: "USSOCOM develops and employs the world's finest Special Operations Forces,",
    rest:
      " and those forces have an enduring need for Enterprise Knowledge Management: creating, organizing, applying, and transferring knowledge to enable situational understanding and decision superiority across HQ USSOCOM, five components, and seven Theater Special Operations Commands.",
    promise: "Competing for the privilege to serve our nation's warfighters, every day.",
  },
};

/** The signature move. Eight real places program knowledge was found to live. */
export const peak = {
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
  left: { caption: "Where program knowledge lived." },
  right: {
    heading: "One authoritative environment.",
    result: "Zero data loss. Through Top Secret.",
  },
};

export const rigor = {
  left: { heading: "Six task areas." },
  right: {
    heading: "One integrated EKM framework.",
    sub: "Full-spectrum coverage of the EKM performance work statement, from program governance to organizational adoption, delivered by cleared experts embedded in the SOF battle rhythm.",
  },
  rows: [
    {
      title: "Program Management",
      body: "Disciplined BPA and task-order governance: transition management, staffing, risk mitigation, quality control, and reporting that keep every deliverable on schedule and every CPARS rating clean.",
    },
    {
      title: "Knowledge Capture, Org & Sharing",
      body: "Enterprise taxonomies, naming conventions, and knowledge-capture workflows that eliminate silos and keep authoritative information one search away, before, during, and after every battle-rhythm event.",
    },
    {
      title: "KM Systems Design & Development",
      body: "Custom full-stack engineering plus low-code/no-code delivery on SharePoint, M365, and the Power Platform: DevSecOps-built, API-integrated, and AI-ready across classified and unclassified networks.",
    },
    {
      title: "Records & Repository Management",
      body: "Automated records capture and compliant repository architectures that manage the full lifecycle of official records and preserve organizational expertise to statutory standards.",
    },
    {
      title: "Business Intelligence & Data Analysis",
      body: "Real-time, high-fidelity dashboards and visual analytics tailored to the operational battle rhythm, accelerating leadership decision cycles and reducing cognitive burden across the SOF enterprise.",
    },
    {
      title: "Training & Org Change Management",
      body: "Structured change management, tailored training, and adoption programs that minimize transition friction and maximize the return on every technology investment.",
    },
  ],
};

export const weight = {
  left: {
    heading: "Department of War customers, in their words.",
    quotes: [0, 2, 5, 6, 3].map((i) => testimonials.quotes[i]),
    seals: partners.logos,
  },
  right: {
    heading: "Proven past performance.",
    since: "Since 2011.",
    numbers: [
      { prefix: "$", value: 312, suffix: "M+", label: "Prime awards", sub: "Since company inception" },
      { value: 67, label: "Awarded contracts & task orders", sub: "Delivered with zero negative CPARS ratings" },
      { value: 237, suffix: "+", label: "Department of War installations", sub: "Across 6 continents" },
      { value: 15, suffix: "+", label: "Years serving the DoW", sub: "From startup to GovCon prime, 24/7/365" },
      { value: 99, suffix: "%", label: "Prime awards since inception", sub: "Competing, and winning, as prime" },
    ],
    cpars: { value: "Exceptional", label: "KM prime past performance CPARS", sub: "Quality, schedule and management: Exceptional" },
    vehicle:
      "Prime on the GSA Polaris GWAC, SDVOSB Pool. Contract 47QTCC26DV034, Jul 07, 2026 to Dec 01, 2030. UEI RM9GACFMSLG7. CAGE 6LDB2.",
  },
};

export const reach = {
  left: {
    heading: "Four networks. Fourteen tools.",
    networks: capabilities.panel.networks,
    tools: capabilities.panel.chips,
  },
  right: {
    heading: "Embedded across the SOF enterprise.",
    sub: "Thirteen commands. Four networks. One standard of execution: CONUS and OCONUS.",
    commands: locations.cells,
  },
};

export const close = {
  heading: contact.heading,
  paragraph:
    "For inquiries about the USSOCOM EKM BPA, teaming, task orders under our contract vehicles, or careers with CRS: reach out. We answer 24/7/365.",
  person: contact.person,
  event: {
    lead: "Upcoming: " + events.title + ".",
    when: "Wednesday, September 16, 2026, 5:30 to 7:00 PM ET. JW Marriott Tampa Water Street.",
    link: { label: "Open the flyer", href: events.button.href },
  },
  fine: [
    "© 2026 Competitive Range Solutions, LLC. All rights reserved.",
    "Service-Disabled Veteran-Owned Small Business (SDVOSB). UEI RM9GACFMSLG7. CAGE 6LDB2. GSA Polaris GWAC SDVOSB Pool.",
    "1775 Tysons Blvd, Floor 5, McLean, VA 22102. 800-460-7935.",
  ],
  links: [
    { label: "Home", href: SITE },
    { label: "About", href: `${SITE}/about` },
    { label: "Case Studies", href: `${SITE}/case-studies` },
    { label: "Careers", href: `${SITE}/careers?loc=Tampa` },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/competitive-range/" },
  ],
};

export const stats = metrics;
