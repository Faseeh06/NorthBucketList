/**
 * Public trips: packages (bookable frames) and past runs (archived departures with detail pages).
 */
export type TripKind = "package" | "past";

export type TripStop = {
  label: string;
  place: string;
  description: string;
};

export type TripEntry = {
  slug: string;
  kind: TripKind;
  title: string;
  tagline: string;
  yearLabel: string;
  duration: string;
  groupSize: string;
  priceFrom: string;
  season: string;
  heroImage: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  overview: readonly string[];
  whereWeGo: readonly TripStop[];
  highlights: readonly string[];
  included: readonly string[];
  notIncluded: readonly string[];
};

export const tripsCatalog: readonly TripEntry[] = [
  {
    slug: "passu-kkh-karakoram",
    kind: "package",
    title: "Passu & the Karakoram",
    tagline: "Attabad blues, pass silhouettes, and a slow KKH rhythm.",
    yearLabel: "2025–26 season",
    duration: "7–9 nights",
    groupSize: "6–12",
    priceFrom: "From PKR 189,000",
    season: "May – late October (pass conditions permitting)",
    heroImage: { src: "/images/passu.jpg", alt: "Passu cones and the Karakoram Highway" },
    gallery: [
      { src: "/images/passu.jpg", alt: "Passu" },
      { src: "/images/hunza.webp", alt: "Hunza valley" },
      { src: "/images/lake.webp", alt: "High-country water" },
    ],
    overview: [
      "We thread Gilgit, Hunza, and Passu with altitude-aware pacing: shorter first high days, then longer windows for light walks, village time, and clear-evening pass views.",
      "The goal isn’t a rigid checklist—it’s a loop that still hits Baltit, Karimabad lanes, the Attabad stretch, and (weather-permitting) a Khunjerab look or local alternative if the day is long.",
    ],
    whereWeGo: [
      {
        label: "Day 1–2",
        place: "Islamabad → Besham / Chilas",
        description: "Overnight in the Kaghan–Indus belt to break the drive; briefings, kit check, and acclimation notes.",
      },
      {
        label: "Day 3–4",
        place: "Gilgit & Hunza gateway",
        description: "Enter the Gilgit–Hunza run; first full nights in the valley, Baltit and Karimabad heritage stops.",
      },
      {
        label: "Day 5–7",
        place: "Passu & upper Gojal",
        description: "Attabad shoreline, Passu village walks, and scheduled flexibility for a higher pass day or rest if weather firms up.",
      },
    ],
    highlights: [
      "Sunset silhouettes on the Passu massif",
      "Heritage: Baltit Fort and old Karimabad lanes",
      "Boat/road time along the Attabad segment",
    ],
    included: [
      "Licensed guide on road days",
      "Stays: mix of mid boutique + one heritage or guest night",
      "4×4 or coaster blocks on mountain legs",
      "Breakfasts + route map & day brief",
      "WhatsApp trip captain in-country",
    ],
    notIncluded: [
      "Flights to/from Islamabad (we can add blocks)",
      "Lunches / dinners where we want you to choose local spots",
    ],
  },
  {
    slug: "hunza-heritage-valleys",
    kind: "package",
    title: "Hunza high valleys",
    tagline: "Cherry orchards, forts, and long golden-hour terraces.",
    yearLabel: "2025–26 season",
    duration: "5–7 nights",
    groupSize: "4–10",
    priceFrom: "From PKR 145,000",
    season: "April blossom → mid November",
    heroImage: { src: "/images/hunza.webp", alt: "Hunza high valleys" },
    gallery: [
      { src: "/images/hunza.webp", alt: "Hunza" },
      { src: "/images/lake.webp", alt: "Glacial blue water" },
      { src: "/images/culture.jpg", alt: "Local culture" },
    ],
    overview: [
      "A week tuned for first-timers: gentler day lengths, more terrace time, and space for unplanned tea stops. We still thread in Baltit, viewpoint hikes (pace-matched), and a flexible slot for a longer leg toward upper Gojal if the group is keen.",
    ],
    whereWeGo: [
      {
        label: "Arrival & Gilgit",
        place: "Meet → Gilgit / Hunza",
        description: "Pick a flight or road meet; we stage the first two nights in the Hunza side for a soft start.",
      },
      {
        label: "Core valley",
        place: "Karimabad, Altit, Eagles Nest line",
        description: "Forts, old alleys, and a paced viewpoint—no ‘summit or nothing’ days unless you want them.",
      },
    ],
    highlights: [
      "Heritage Baltit + Altit",
      "Optional Eagle’s Nest for clear evenings",
      "Orchard and village walks between drives",
    ],
    included: [
      "Hunza-side stays (we rotate properties by season)",
      "Daily breakfast + 2–3 group dinners on longer legs",
      "Local guide on heritage days",
      "Private vehicle for your dates",
    ],
    notIncluded: ["Domestic flights", "Entry fees where not bundled", "Personal travel insurance"],
  },
  {
    slug: "skardu-baltistan-gateway",
    kind: "package",
    title: "Skardu & Baltistan",
    tagline: "Indus light, Shigar courtyards, and cold-desert stillness.",
    yearLabel: "2025–26 season",
    duration: "6–8 nights",
    groupSize: "4–8",
    priceFrom: "From PKR 175,000",
    season: "May – early November",
    heroImage: { src: "/images/skardu.webp", alt: "Skardu and Indus" },
    gallery: [
      { src: "/images/skardu.webp", alt: "Skardu" },
      { src: "/images/lake.webp", alt: "Alpine water" },
      { src: "/images/outdoor.jpg", alt: "Open country" },
    ],
    overview: [
      "Gateway route through Shigar, optional cold-desert and upper Indus day, with clear writing on 4×4 days vs walk days. We build rest after flight or long drive so Baltistan’s altitude and dryness don’t sneak up on the group.",
    ],
    whereWeGo: [
      { label: "In", place: "Skardu town", description: "Base nights, bazaar, and acclimation buffer." },
      { label: "Shigar", place: "Old house / river walks", description: "Courtyard heritage and slow time off the main road." },
      {
        label: "Day trips",
        place: "Kachura / desert strip (itinerary-dependent)",
        description: "We pick the mix based on group pace and what’s open that week.",
      },
    ],
    highlights: [
      "Shigar cultural buffer day",
      "4×4 blocks spelled out in advance",
      "Clear add-ons for Shangrila / Kachura where relevant",
    ],
    included: [
      "Skardu-side lodging mix",
      "4×4 on booked legs",
      "Airport/road meet & brief",
      "Daily breakfast on hotel plan",
    ],
    notIncluded: ["ISB–Skardu flight (optional add-on)", "Lunches except where written", "Permits for restricted add-ons"],
  },
  {
    slug: "kumrat-forest-roads",
    kind: "package",
    title: "Kumrat & forest roads",
    tagline: "Pine shade, Utror-side streams, and back-road calm.",
    yearLabel: "2026 season",
    duration: "4–5 nights",
    groupSize: "6–14",
    priceFrom: "From PKR 98,000",
    season: "June – early September (monsoon watch)",
    heroImage: { src: "/images/kumrat.jpg", alt: "Kumrat forest" },
    gallery: [
      { src: "/images/kumrat.jpg", alt: "Kumrat" },
      { src: "/images/lake.webp", alt: "Water" },
      { src: "/images/food.jpg", alt: "Local food" },
    ],
    overview: [
      "A KP forest run with simple stays and emphasis on water + shade. Road windows can be tight in peak rain—we only commit dates after a quick route check, and we keep a spare half-day in the plan.",
    ],
    whereWeGo: [
      { label: "Dir / upper approach", place: "Staging night", description: "Break the drive and prep for the forest leg." },
      { label: "Kumrat core", place: "Camping / huts (season style)", description: "Stream time, light walks, no forced long hikes." },
    ],
    highlights: ["Utror-side day", "Pine canopy drives", "Simple meals with local kitchens where safe"],
    included: [
      "Coaster or 4×4 to match road state",
      "Tented or hut stays as per season",
      "Trip lead + local helper on the ground",
    ],
    notIncluded: ["Personal gear in rain", "Meals in transit towns unless stated"],
  },
  {
    slug: "kalam-swat-rivers",
    kind: "package",
    title: "Kalam & Swat highlands",
    tagline: "Ushu forest air, clear rivers, and a gentler Swat week.",
    yearLabel: "2025–26 season",
    duration: "5–6 nights",
    groupSize: "4–10",
    priceFrom: "From PKR 112,000",
    season: "April – late October",
    heroImage: { src: "/images/kalam.jpg", alt: "Kalam highlands" },
    gallery: [
      { src: "/images/kalam.jpg", alt: "Kalam" },
      { src: "/images/kumrat.jpg", alt: "Valley floor" },
      { src: "/images/lake.webp", alt: "Blue water" },
    ],
    overview: [
      "We stage Mingora → Kalam with explicit rest after the upper Swat road, then layer Ushu forest, river time, and optional light viewpoints—nothing that assumes everyone wants the same trail pace.",
    ],
    whereWeGo: [
      { label: "Swat entry", place: "Mingora", description: "Re-supply, safety brief, and night before the upper climb." },
      { label: "Kalam / Ushu", place: "Forest and river days", description: "Core stay with flexible half-days." },
    ],
    highlights: ["Ushu understorey time", "River hours without forced mileage", "Clear drive-day timing"],
    included: [
      "Kalam-side stay package",
      "Private vehicle in valley window",
      "Lead contact on the road",
    ],
    notIncluded: ["Porter or pony add-ons", "Helicopter / special entries"],
  },
  {
    slug: "hunza-blossom-2024",
    kind: "past",
    title: "Hunza cherry blossom | April 2024",
    tagline: "A sold-out run with long terrace lunches and a snow-line surprise at Khunjerab day.",
    yearLabel: "Apr 2024",
    duration: "8 nights",
    groupSize: "10 guests",
    priceFrom: "Reference — ask for similar 2026 window",
    season: "Past departure",
    heroImage: { src: "/images/hunza.webp", alt: "Hunza in blossom" },
    gallery: [
      { src: "/images/hunza.webp", alt: "Blossom" },
      { src: "/images/passu.jpg", alt: "Passu" },
      { src: "/images/hunza.webp", alt: "Valley views" },
    ],
    overview: [
      "One of our busiest spring weeks: the group wanted photos and slow food more than pass records. We still reached the border road on a high-visibility day; the next day was a full rest in Karimabad when wind picked up—exactly the kind of swap we plan for.",
    ],
    whereWeGo: [
      { label: "Base", place: "Karimabad", description: "Four nights with sunrise balcony options." },
      { label: "Gojal pass day", place: "Attabad to upper stretch", description: "Guided, weather-gated, with hot drinks at the turn." },
    ],
    highlights: [
      "Full terrace day during peak blossom",
      "Group dinner with a local home kitchen",
      "Zero forced march when wind shut the high road",
    ],
    included: [
      "This page is a record of what we ran; inclusions for new dates follow current package sheets.",
    ],
    notIncluded: ["Past pricing is not a live quote—message us for the next similar window."],
  },
  {
    slug: "skardu-flyin-2023",
    kind: "past",
    title: "Skardu fly-in | September 2023",
    tagline: "Tight on time, long on 4×4: Shigar, desert strip, and a storm skip day.",
    yearLabel: "Sep 2023",
    duration: "6 nights",
    groupSize: "6 guests",
    priceFrom: "Reference — reprice with flight block",
    season: "Past departure",
    heroImage: { src: "/images/skardu.webp", alt: "Skardu 2023 run" },
    gallery: [
      { src: "/images/skardu.webp", alt: "Skardu" },
      { src: "/images/lake.webp", alt: "Lake" },
      { src: "/images/outdoor.jpg", alt: "Trail" },
    ],
    overview: [
      "Corporate-adjacent friends group; ISB–Skardu both ways. We front-loaded Shigar, kept one flex day, and used the spare afternoon after weather cancelled a Kachura boat idea—replaced with a long Indus-side walk the group liked more anyway.",
    ],
    whereWeGo: [
      { label: "Skardu", place: "Town + Shigar", description: "Stays and cultural buffer before longer legs." },
      { label: "Desert + lake mix", place: "Cold desert + optional lake slot", description: "Order flipped after wind forecast—same places, better light." },
    ],
    highlights: [
      "Flight slots coordinated with a single invoice",
      "One full weather cushion day—used, not wasted",
    ],
    included: [
      "Archive only; new Skardu weeks use today’s inclusions and flight pricing.",
    ],
    notIncluded: [],
  },
] as const satisfies readonly TripEntry[];

const bySlug = new Map(tripsCatalog.map((t) => [t.slug, t]));

export function getTripBySlug(slug: string): TripEntry | undefined {
  return bySlug.get(slug);
}

export function getAllTripSlugs(): string[] {
  return tripsCatalog.map((t) => t.slug);
}

export function getTripsByKind(kind: TripKind): TripEntry[] {
  return tripsCatalog.filter((t) => t.kind === kind);
}
