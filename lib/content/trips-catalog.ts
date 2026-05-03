/**
 * Public trips. Additional routes are temporarily hidden—only active departures are listed.
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
  /** Short hero line under title (e.g. “6 Days. 1 Journey…”) */
  heroKicker?: string;
  /** Right column in hero stats strip (e.g. “Astore · Deosai · Babusar”) */
  heroRegionsLine?: string;
  /** External booking form (e.g. Tally). “Book now” in hero uses this when set. */
  bookingFormUrl?: string;
  /** WhatsApp for “Send query”: digits only with country code, no + (e.g. 923116982206). */
  queryWhatsAppNumber?: string;
  /** Pre-filled WhatsApp message when opening chat. */
  queryWhatsAppPrefill?: string;
  yearLabel: string;
  duration: string;
  groupSize: string;
  priceFrom: string;
  season: string;
  heroImage: { src: string; alt: string };
  /** Images for header slideshow (e.g. all minimarg shots except poster & hero). */
  slideshow?: readonly { src: string; alt: string }[];
  gallery: { src: string; alt: string }[];
  overview: readonly string[];
  whereWeGo: readonly TripStop[];
  highlights: readonly string[];
  included: readonly string[];
  notIncluded: readonly string[];
};

export const tripsCatalog: readonly TripEntry[] = [
  {
    slug: "minimarg",
    kind: "package",
    title: "Minimarg",
    tagline: "Astore, Rama, Burzil, Deosai, and back—one fixed June window with the crew.",
    heroKicker: "6 Days. 1 Journey. A Story You'll Never Forget.",
    heroRegionsLine: "Astore · Deosai · Babusar",
    bookingFormUrl:
      "https://tally.so/r/ZjP6N5?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaARkgo1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAad-CXLg8nm_H9WvXDwcF-Zrnt6P_A4t1W9XDTfsx3vGIqY1LQccHzMiwDuLbg_aem_oQIt9QkQvL7m3-pq-FyWpA",
    queryWhatsAppNumber: "923116982206",
    queryWhatsAppPrefill: "Query related to minimarg Trip",
    yearLabel: "3–8 Jun 2026",
    duration: "6 days · 5 nights",
    groupSize: "Limited seats — ask for availability",
    priceFrom: "PKR 40,000",
    season: "Departs 3 June · Returns 8 June 2026",
    heroImage: {
      src: "/images/minimarg/main.jpg",
      alt: "Minimarg & Astore — summer in the North",
    },
    slideshow: [
      { src: "/images/minimarg/main.jpg", alt: "Minimarg & Astore — summer" },
      { src: "/images/minimarg/4k.jpg", alt: "Minimarg corridor — detail" },
    ],
    gallery: [
      { src: "/images/minimarg/main.jpg", alt: "Minimarg & Astore — summer" },
      { src: "/images/minimarg/4k.jpg", alt: "Minimarg corridor — detail" },
      { src: "/images/minimarg/group.jpeg", alt: "Crew on the Minimarg run" },
    ],
    overview: [
      "Six days and five nights from Islamabad through Babusar, Astore, Rama Meadows, Minimarg, Deosai, and back down the Kaghan line—built as one continuous story, not a patchwork of generic stops.",
      "Dates are fixed (3–8 June 2026). PKR 40,000 is the advertised frame; confirm inclusions and add-ons with us before you lock a seat.",
    ],
    whereWeGo: [
      {
        label: "DAY 1 — Roll Call & The Road North",
        place: "Islamabad → Chilas",
        description:
          "We leave before sunrise, chasing the first light out of Islamabad.\nStops at Balakot, Lulusar Lake, and Babusar Top set the tone—waterfalls, fresh air, and landscapes that keep evolving.\nBy evening, we reach Chilas. Dinner, rest, and anticipation.\n\nNight vibe: Slow down, recharge.",
      },
      {
        label: "DAY 2 — Astore & Rama Meadows",
        place: "Astore Valley",
        description:
          "Into the heart of Astore Valley, switching to jeeps for a raw mountain ride.\nWelcome to Rama Meadows—endless green, unreal views, and pure calm.\nOptional hike to Rama Lake.\n\nNight vibe: Bonfire, music, mountain silence.",
      },
      {
        label: "DAY 3 — Minimarg: The Hidden North",
        place: "Burzil · Minimarg",
        description:
          "A journey most never take.\nThrough Chilam, over Burzil Top, into the untouched beauty of Minimarg.\nExplore Domel, Rainbow Lake, and Crystal Lake.\n\nNight vibe: Camping under a sky full of stars.",
      },
      {
        label: "DAY 4 — Deosai: Land Above the Clouds",
        place: "Deosai Plains",
        description:
          "Welcome to Deosai Plains—vast, wild, and surreal.\nStop at Sheosar Lake, where the world feels still.\n\nNight vibe: Quiet reflection, slow music.",
      },
      {
        label: "DAY 5 — Back to Naran",
        place: "Babusar · Kaghan · Naran",
        description:
          "The mountains start to let go.\nDrive back through Babusar Pass and Kaghan Valley into Naran.\n\nNight vibe: One last night—music, laughter, memories.",
      },
      {
        label: "DAY 6 — The Return",
        place: "Naran → Islamabad",
        description:
          "Early departure.\nA few final stops, one last look at the mountains—then back to Islamabad.\n\nEnd of journey. Start of stories.",
      },
    ],
    highlights: [
      "Babusar Top · Lulusar · Balakot on the road north",
      "Rama Meadows with optional Rama Lake hike",
      "Minimarg: Burzil, Domel, Rainbow & Crystal lakes",
      "Deosai & Sheosar Lake"
    ],
    included: [
      "Trip lead and coordinated plan for the fixed dates",
      "Transport and stays as listed on your confirmation sheet",
      "Jeep switches where the itinerary requires (e.g. Astore legs)",
      
    ],
    notIncluded: [
      "Meals unless explicitly listed on your confirmation",
      "Personal insurance, gear, and snacks",
    ],
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
