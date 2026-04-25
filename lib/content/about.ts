/**
 * About us page — story, mission, vision, values, team.
 */
export const aboutContent = {
  meta: { title: "About us" as const, description: "Our story, mission, and the people behind North Bucket List—youth travel and adventure across Pakistan." },
  hero: {
    eyebrow: "About",
    titleLines: ["Our", "story"] as [string, string],
    description:
      "North Bucket List was created to go beyond sightseeing—growth, connection, and real field experiences in the highlands and beyond.",
    image: { src: "/images/hunza.webp", alt: "Hunza high valleys" },
    cta: { label: "Get in touch", href: "/contact" as const },
  },
  /** Editorial block (light band, big sans statement, CTA) */
  statement: {
    kicker: "Building in the North",
    body:
      "Every season is a chance to push a little further—higher roads, truer connection, and trips that still feel like yours when you get home.",
    cta: { label: "Get in touch", href: "/contact" as const },
  },
  story: {
    kicker: "Our story",
    /** Thin top bar (left label, center code, year) */
    header: { eyebrow: "Foundation", code: "(NBL — 01)", year: "©2026" as const },
    lede: "We go beyond sightseeing—meaningful travel for youth, built on trust, growth, and real field time in the North.",
    title: "Our story",
    paragraphs: [
      "North Bucket List was created to redefine travel for youth in Pakistan.",
      "Most trips focus only on sightseeing — we wanted to go beyond that. We focus on growth, connection, and real experiences.",
    ] as const,
    highlights: ["Youth-first adventures", "Trusted operations in the North"] as const,
  },
  mission: {
    title: "Mission",
    body: "To empower youth through meaningful travel experiences that combine adventure, learning, and personal growth.",
  },
  vision: {
    title: "Vision",
    body: "To build Pakistan’s leading youth adventure platform.",
  },
  values: {
    title: "Values",
    items: ["Growth", "Community", "Adventure", "Leadership", "Authentic experiences"] as const,
  },
  /** Full-bleed image between story and team */
  breakImage: {
    src: "/images/passu.jpg" as const,
    alt: "High mountain pass — North Pakistan",
  },
  faq: {
    kicker: "FAQ",
    title: "Common questions",
    description: "Quick answers as you plan your next move upcountry.",
    items: [
      {
        q: "What makes North Bucket List different from a typical tour?",
        a: "We design around youth: real connection, field learning, and room to grow—not just a checklist of sights. Bigger picture? Growth, community, and authentic experiences in the same trip.",
      },
      {
        q: "How do I pick the right season and route?",
        a: "We start with your dates, comfort with altitude, and the valleys you care about, then suggest windows for clearer roads, open stays, and the vibe you want—whether that’s Hunza, Swat, or a longer KKH run.",
      },
      {
        q: "What’s included vs. add-ons?",
        a: "Each itinerary spells out transport blocks, stays, and leader support before you commit. Add-ons and free time are labeled so you’re not guessing at checkout.",
      },
      {
        q: "Do I need permits or local paperwork?",
        a: "Some areas need NOCs or route permits. We line up what’s required for your dates and vehicle plan so you’re not turned around at a checkpoint—details are confirmed before the balance.",
      },
      {
        q: "Is it okay if I’ve never been to the mountains?",
        a: "Yes. We build in acclimation where needed, clear briefings on weather and etiquette, and pacing that matches the group so first-timers can focus on the experience.",
      },
      {
        q: "How fast do you respond, and what happens after I message you?",
        a: "We aim to reply within one business day. You’ll get a first-pass plan—dates, broad legs, and a realistic range—once we have group size, season, and your top places in mind.",
      },
      {
        q: "How are payments and cancellations handled?",
        a: "You’ll see milestones in writing (deposit, balance, what’s flexible if weather or road windows shift). We keep it explicit so the money side matches the field plan.",
      },
      {
        q: "Do I need special gear or a minimum fitness level?",
        a: "Packing and fitness expectations depend on the trip. We share a clear kit list and daily rhythm before you go—nothing exotic for most northern road trips, but we’ll say if a leg is longer or steeper.",
      },
    ] as const,
  },
  team: {
    kicker: "Meet the team",
    foundersTitle: "Team",
    /** Photos only in the UI; `name` is for image alt / accessibility. */
    members: [
      { name: "Abdullah Khawaja", image: "/images/team/khwaja.jpg" },
      { name: "Tania Ahmed", image: "/images/team/tania.jpg" },
      { name: "Hashir", image: "/images/team/Hashir.jpg" },
      { name: "Shaheer", image: "/images/team/shaheer.jpg" },
    ] as const,
  },
} as const;
