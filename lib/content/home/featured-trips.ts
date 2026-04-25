import { routes } from "../site";

export type FeaturedTripEntry = {
  title: string;
  year: string;
  tags: [string, string];
  image: string;
  objectPosition?: string;
};

/**
 * Home — “Featured trips” section: copy + partner strip + card grid.
 */
export const featuredTripsContent = {
  sectionId: "featured-trips" as const,
  listHref: routes.trips,
  meta: {
    leftLabel: "Featured trips",
    center: "(NBL — 01)",
  },
  labelLine: "Curated departures",
  badge: "Trips",
  title: { line1: "Featured", line2: "trips" },
  description:
    "Hand-picked routes we run often—so you can see what a NorthBucket week in the highlands actually looks like.",
  cta: { href: routes.trips, label: "View all trips" },
  partners: {
    caption: "Also work with vetted local partners",
    names: ["Hunza", "Skardu", "Naran", "Kalam"] as const,
  },
  /** Same four hero images as the Discover promo strip (`PROMO_SLIDES` in `where-hero.tsx`) */
  trips: [
    {
      title: "Passu & the Karakoram",
      year: "2025",
      tags: ["KKH", "Peaks"],
      image: "/images/passu.jpg",
      objectPosition: "50% 42%",
    },
    {
      title: "Hunza high valleys",
      year: "2025",
      tags: ["Valleys", "Heritage"],
      image: "/images/hunza.webp",
      objectPosition: "50% 45%",
    },
    {
      title: "Skardu & Baltistan",
      year: "2025",
      tags: ["4×4 days", "Indus side"],
      image: "/images/skardu.webp",
      objectPosition: "50% 48%",
    },
    {
      title: "Kumrat & forest roads",
      year: "2026",
      tags: ["KP", "Utror side"],
      image: "/images/kumrat.jpg",
      objectPosition: "50% 50%",
    },
  ] as const satisfies readonly FeaturedTripEntry[],
};
