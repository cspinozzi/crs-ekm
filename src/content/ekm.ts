/**
 * All copy for the /ekm page, transcribed verbatim from getcrs.com/ekm.
 *
 * Link policy: anchors on this page stay as hash links; every other page of
 * the site points to the live getcrs.com URL so the menu and footer keep
 * working without rebuilding the rest of the site.
 */

export const SITE = "https://getcrs.com";

export const nav = {
  brand: { href: SITE, wordmark: "COMPETITIVE RANGE", tagline: "SOLUTIONS · SDVOSB" },
  links: [
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "PERFORMANCE", href: "#metrics" },
    { label: "CONTRACT VEHICLE", href: "#contracts" },
    { label: "CASE STUDIES", href: "#case-study" },
    { label: "LOCATIONS", href: "#locations" },
  ],
  careers: { label: "EKM CAREERS", href: `${SITE}/careers?loc=Tampa` },
};

export const hero = {
  kicker: "GSA POLARIS GWAC, SDVOSB POOL — PRIME HOLDER",
  headline: "Enterprise Knowledge Management for U.S. Special Operations Command",
  highlight: "(USSOCOM)",
  subheadline: "Relevant knowledge, exchanged at the speed of mission.",
  paragraph:
    "The SOF enterprise runs on the seamless integration of people, processes, and technology. Competitive Range Solutions delivers that integration — knowledge capture, systems engineering, records governance, and decision analytics — with the zero-defect execution the Department of War has trusted for 15 years.",
  primary: { label: "OUR CAPABILITIES", href: "#capabilities" },
  ghost: { label: "CONTACT CRS", href: "#contact" },
  image: { src: "/images/hero-sof.jpg", alt: "Special operations forces on mission" },
};

export const mission = {
  kicker: "THE MISSION",
  headingLines: ["MISSION-FIRST.", "ZERO-DEFECT.", "DECISION SUPERIORITY."],
  p1Strong: "USSOCOM develops and employs the world’s finest Special Operations Forces",
  p1Rest:
    " — and those forces have an enduring need for Enterprise Knowledge Management: creating, organizing, applying, and transferring knowledge to enable situational understanding and decision superiority across HQ USSOCOM, five components, and seven Theater Special Operations Commands.",
  p2: "Competitive Range Solutions brings an engineering-led EKM framework that increases efficiency, eliminates redundancy, and modernizes knowledge operations on an enterprise level — maturing the command’s digital ecosystem through custom software engineering, rigorous records governance, and data-driven decision support, across NIPRNet, SIPRNet, SCI, and BICES environments.",
  p3: "Competing for the privilege to serve our nation’s warfighters — every day.",
  card: {
    kicker: "SECTOR LEADERSHIP",
    body:
      "The CRS Enterprise Knowledge Management Sector is led by a Senior Program Manager with 15+ years leading enterprise Department of War mission-critical efforts — including over a decade directly supporting USSOCOM.",
  },
};

export const metrics = {
  heading: "PROVEN PAST PERFORMANCE",
  since: "SINCE 2011",
  stats: [
    { value: "$312M+", label: "PRIME AWARDS", sub: "Since company inception" },
    { value: "67", label: "AWARDED CONTRACTS & TASK ORDERS", sub: "Delivered with zero negative CPARS ratings" },
    { value: "237+", label: "DEPARTMENT OF WAR INSTALLATIONS", sub: "Across 6 continents" },
    { value: "15+", label: "YEARS SERVING THE DoW", sub: "From startup to GovCon prime, 24/7/365" },
    { value: "99%", label: "PRIME AWARDS SINCE INCEPTION", sub: "Competing — and winning — as prime" },
    {
      value: "EXCEPTIONAL",
      small: true,
      label: "KM PRIME PAST PERFORMANCE CPARS",
      sub: "Quality: Exceptional · Schedule: Exceptional · Management: Exceptional",
    },
  ],
};

export const capabilities = {
  kicker: "OUR CAPABILITIES",
  heading: "SIX TASK AREAS. ONE INTEGRATED EKM FRAMEWORK.",
  sub: "Full-spectrum coverage of the EKM performance work statement — from program governance to organizational adoption — delivered by cleared experts embedded in the SOF battle rhythm.",
  cards: [
    {
      n: "01",
      title: "PROGRAM MANAGEMENT",
      body: "Disciplined BPA and task-order governance — transition management, staffing, risk mitigation, quality control, and reporting that keep every deliverable on schedule and every CPARS rating clean.",
    },
    {
      n: "02",
      title: "KNOWLEDGE CAPTURE, ORG & SHARING",
      body: "Enterprise taxonomies, naming conventions, and knowledge-capture workflows that eliminate silos and keep authoritative information one search away — before, during, and after every battle-rhythm event.",
    },
    {
      n: "03",
      title: "KM SYSTEMS DESIGN & DEVELOPMENT",
      body: "Custom full-stack engineering plus low-code/no-code delivery on SharePoint, M365, and the Power Platform — DevSecOps-built, API-integrated, and AI-ready across classified and unclassified networks.",
    },
    {
      n: "04",
      title: "RECORDS & REPOSITORY MANAGEMENT",
      body: "Automated records capture and compliant repository architectures that manage the full lifecycle of official records and preserve organizational expertise to statutory standards.",
    },
    {
      n: "05",
      title: "BUSINESS INTELLIGENCE & DATA ANALYSIS",
      body: "Real-time, high-fidelity dashboards and visual analytics tailored to the operational battle rhythm — accelerating leadership decision cycles and reducing cognitive burden across the SOF enterprise.",
    },
    {
      n: "06",
      title: "TRAINING & ORG CHANGE MANAGEMENT",
      body: "Structured change management, tailored training, and adoption programs that minimize transition friction and maximize the return on every technology investment.",
    },
  ],
  panel: {
    title: "FLUENT IN THE SOF KM ENVIRONMENT",
    chips: [
      "SharePoint 2016 / 2019 / SE",
      "SharePoint Online",
      "Teams",
      "Power Apps",
      "Power Automate",
      "Power BI",
      "M365 Copilot",
      "SQL Server",
      "Dynamics 365",
      "Palantir MAVEN / Foundry",
      "MCS-COP",
      "SOCTube",
      "RM Software",
      "Custom Full-Stack Apps",
    ],
    networksLabel: "NETWORKS",
    networks: ["NIPRNet", "SIPRNet", "SCI Enterprise", "BICES"],
  },
};

export const partners = {
  kicker: "MISSION PARTNERS",
  paragraph:
    "For over 15 years, the nation’s top defense and government agencies have trusted CRS to deliver secure, mission-critical solutions that enhance national security.",
  logos: [
    { src: "/images/partners/dla.png", alt: "Defense Logistics Agency" },
    { src: "/images/partners/ssa.png", alt: "Social Security Administration" },
    { src: "/images/partners/ustranscom.png", alt: "USTRANSCOM" },
    { src: "/images/partners/nsf.png", alt: "National Science Foundation" },
    { src: "/images/partners/us-navy.png", alt: "U.S. Navy" },
    { src: "/images/partners/dhs.png", alt: "Department of Homeland Security" },
    { src: "/images/partners/centcom.png", alt: "U.S. Central Command" },
    { src: "/images/partners/fcc.png", alt: "Federal Communications Commission" },
    { src: "/images/partners/faa.png", alt: "Federal Aviation Administration" },
    { src: "/images/partners/dow.png", alt: "Department of War" },
    { src: "/images/partners/va.png", alt: "Department of Veterans Affairs" },
    { src: "/images/partners/hhs.png", alt: "Health and Human Services" },
  ],
};

export const contracts = {
  kicker: "CONTRACT VEHICLES",
  heading: "A DIRECT PATH TO AWARD",
  card: {
    kicker: "THE VEHICLE",
    title: "GSA POLARIS GWAC — SDVOSB POOL",
    body: "CRS is a prime on the GSA Polaris Governmentwide Acquisition Contract, Service-Disabled Veteran-Owned Small Business Pool — the exact vehicle the EKM BPA is conducted under per FAR 16.507-2(c)(3).",
    rows: [
      { label: "CONTRACT NO.", value: "47QTCC26DV034", strong: true },
      { label: "PERIOD", value: "Jul 07, 2026 – Dec 01, 2030" },
      { label: "TYPE", value: "IDIQ GWAC · All Federal & DoW agencies" },
      { label: "UEI / CAGE", value: "RM9GACFMSLG7 · 6LDB2" },
    ],
  },
};

export const caseStudies = {
  kicker: "CASE STUDIES",
  problemLabel: "THE PROBLEM",
  solutionLabel: "THE SOLUTION",
  readLabel: "READ THE FULL CASE STUDY →",
  downloadLabel: "DOWNLOAD PDF ↓",
  items: [
    {
      title: "ENTERPRISE KNOWLEDGE MANAGEMENT ACROSS CLASSIFIED AND UNCLASSIFIED DOMAINS",
      sub: "For a Department of War enterprise transport, SATCOM, and acquisition organization, CRS replaced scattered, inconsistent program documentation with a governed, authoritative knowledge environment — spanning both security domains, up to and including Top Secret.",
      stats: [
        { value: "3×", label: "Exceptional CPARS ratings — quality, schedule, and management" },
        { value: "100%", label: "Of products delivered as, or earlier than, scheduled" },
        { value: "9+", label: "Systems and data sources unified into one authoritative environment" },
        { value: "ZERO", label: "Delivery delays and zero data loss across every deliverable, all periods" },
      ],
      problem:
        "Program knowledge was scattered across separate portals, project tools, ticketing systems, databases, and spreadsheets — assessed by the Government as outdated, inconsistent, and difficult to locate. The same program carried different data depending on which system was consulted, change requests piled up without a formal approval path, and leadership had no single trusted view of portfolio execution.",
      solution:
        "CRS rebuilt the organization’s presence as a governed, authoritative repository; established documentation standards and lifecycle control; stood up the Change Control Board and Change Advisory Board; engineered portal solutions with division and branch chiefs; and integrated 9+ systems into real-time Power BI decision dashboards — with zero data loss, through Top Secret.",
      pdf: `${SITE}/case-study/competitive-range-solutions-case-study---multi-domain-enterprise-knowledge-management.pdf`,
    },
    {
      title: "ENTERPRISE KNOWLEDGE MANAGEMENT FOR A GLOBAL DEFENSE NETWORK",
      sub: "For a Department of War global network modernization customer, CRS delivered development, O&M, enhancement, and sustainment of the Enterprise Knowledge Management system tracking 100+ concurrent modernization projects worldwide — and migrated the entire platform to DoD SharePoint 365 while in continuous operational use.",
      stats: [
        { value: "100%", label: "Of the knowledge platform migrated to DoD 365 — zero loss of functionality" },
        { value: "5", label: "Mission domains unified in a single authoritative knowledge environment" },
        { value: "95%+", label: "On-time quality level held on every recurring knowledge deliverable, all periods" },
        { value: "1HR", label: "To a mitigation plan in the Government’s hands on any loss of the environment" },
      ],
      problem:
        "Implementation knowledge for 100+ concurrent projects arrived into an unmanaged drop-off and dispersed into email threads, local files, and disconnected tools — project lists and points of contact disagreed across systems, status was reassembled by hand each cycle, and the legacy on-premises SharePoint platform holding it all was reaching end of life while in continuous use with content from CUI through SECRET.",
      solution:
        "CRS stood up the customer’s Implementation Information Exchange as the single authoritative knowledge environment — structured to the seven-phase implementation lifecycle — migrated it to DoD SharePoint 365 with zero loss of functionality, converted the drop-off into a governed daily intake, built the MTTR-measured Problem Management Database, and automated the daily status reporting and dashboard layer.",
      pdf: `${SITE}/case-study/crs-ekm-case-study---global-defense-network.pdf`,
    },
  ],
};

export const locations = {
  kicker: "PERFORMANCE LOCATIONS",
  heading: "EMBEDDED ACROSS THE SOF ENTERPRISE",
  sub: "Thirteen commands. Four networks. One standard of execution — CONUS and OCONUS.",
  cells: [
    { name: "HQ USSOCOM", place: "MacDill AFB, Tampa, FL", hq: true },
    { name: "USASOC", place: "Fort Bragg, NC" },
    { name: "JSOC", place: "Fort Bragg, NC" },
    { name: "NSWC", place: "NAB Coronado, CA · NAB Little Creek, VA" },
    { name: "MARSOC", place: "Camp Lejeune, NC" },
    { name: "AFSOC", place: "Hurlburt Field, FL" },
    { name: "SOCAF", place: "Kelley Barracks, Stuttgart, GE" },
    { name: "SOCCENT", place: "MacDill AFB, Tampa, FL" },
    { name: "SOCEUR", place: "Patch Barracks, Stuttgart, GE" },
    { name: "SOCNORTH", place: "Peterson SFB, Colorado Springs, CO" },
    { name: "SOCPAC", place: "Camp H.M. Smith, HI" },
    { name: "SOCKOR", place: "Camp Humphreys, ROK" },
    { name: "SOCSOUTH", place: "Homestead ARB, FL" },
  ],
};

export const testimonials = {
  kicker: "CUSTOMER TESTIMONIALS",
  quotes: [
    {
      text: "Your whole team makes my mission successful.",
      by: "DEPARTMENT OF WAR CUSTOMER",
    },
    {
      text: "You have done a great job this year.",
      by: "DEPARTMENT OF WAR CUSTOMER",
    },
    {
      text: "The professionalism, dedication to duty, and attention to detail your team brings to the fight are second to none.",
      by: "DEPARTMENT OF WAR CUSTOMER",
    },
    {
      text: "CRS has operated at historically low rates for Tech Refresh and Implementation work.",
      by: "DEPARTMENT OF WAR CUSTOMER",
    },
    {
      text: "You and your team did an outstanding persistent job on following thru and getting the HAZMAT cleared for DLA disposal & turn in.",
      by: "DEPARTMENT OF WAR CUSTOMER",
    },
    {
      text: "5 Star Professionalism. I always felt if it could be done, CRS would make it happen.",
      by: "DEPARTMENT OF WAR CUSTOMER",
    },
    {
      text: "You have been high-performing and professional in every way… I could not have had a better team.",
      by: "DEPARTMENT OF WAR CUSTOMER",
    },
  ],
};

export const contact = {
  heading: "HAVE A QUESTION ABOUT EKM?",
  paragraph:
    "For inquiries about the USSOCOM EKM BPA, teaming, task orders under our contract vehicles, or careers with CRS — reach out. We answer 24/7/365.",
  kicker: "EKM POINT OF CONTACT",
  person: {
    name: "EXAVIER WATSON",
    title: "President",
    email: { label: "EWatson@GetCRS.com", href: "mailto:EWatson@GetCRS.com" },
    phone: { label: "515-738-6099", href: "tel:+15157386099" },
    linkedin: { label: "Connect on LinkedIn →", href: "https://www.linkedin.com/in/exavierw/" },
    photo: { src: "/images/exavier-watson.png", alt: "Exavier Watson" },
  },
  hq: { label: "HEADQUARTERS", lines: ["1775 Tysons Blvd, Floor 5", "McLean, VA 22102"] },
  setAside: { label: "SET-ASIDE STATUS", lines: ["Service-Disabled Veteran-Owned", "Small Business (SDVOSB)"] },
  connect: { label: "CONNECT", link: { label: "CRS on LinkedIn →", href: "https://www.linkedin.com/company/competitive-range/" } },
};

export const footer = {
  wordmark: "COMPETITIVE RANGE",
  tagline: "Competing for the privilege to serve our nation’s warfighters EVERY day.",
  columns: [
    {
      label: "COMPANY",
      links: [
        { label: "Home", href: SITE },
        { label: "About", href: `${SITE}/about` },
        { label: "Case Studies", href: `${SITE}/case-studies` },
        { label: "Careers", href: `${SITE}/careers` },
      ],
    },
    {
      label: "THIS PAGE",
      links: [
        { label: "Capabilities", href: "#capabilities" },
        { label: "Performance", href: "#metrics" },
        { label: "Contract Vehicles", href: "#contracts" },
        { label: "Locations", href: "#locations" },
      ],
    },
    {
      label: "REACH US",
      links: [
        { label: "800-460-7935", href: "tel:+18004607935" },
        { label: "Contact", href: `${SITE}/contact` },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/competitive-range/", external: true },
      ],
    },
  ],
  copyright: "© 2026 Competitive Range Solutions, LLC. All rights reserved.",
  registry: "UEI RM9GACFMSLG7 · CAGE 6LDB2 · GSA Polaris GWAC SDVOSB Pool",
};

export const events = {
  eyebrow: "UPCOMING EVENT",
  title: "SOF Contract Hiring Event",
  summary:
    "Meet the CRS team and explore cleared contingent positions supporting the U.S. Department of War Special Operations Forces requirement at MacDill Air Force Base.",
  countdownLabel: "EVENT STARTS IN",
  /** Wednesday, September 16, 2026, 5:30 PM Eastern (UTC-4). */
  startsAt: "2026-09-16T17:30:00-04:00",
  detailLines: ["Wednesday, September 16, 2026  •  5:30 – 7:00 PM ET", "JW Marriott Tampa Water Street"],
  button: { label: "OPEN / DOWNLOAD FLYER", href: `${SITE}/ekm/events/sof-hiring-event-flyer` },
  flyer: {
    src: "/images/sof-hiring-event-flyer.png",
    alt: "CRS SOF Contract Hiring Event flyer: September 16, 2026 at JW Marriott Tampa Water Street",
    width: 2550,
    height: 3300,
  },
};
