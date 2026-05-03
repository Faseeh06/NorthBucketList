import { routes } from "../site";

export type FeaturedTripEntry = {
  title: string;
  year: string;
  tags: [string, string];
  image: string;
  objectPosition?: string;
  /** Links home card to `/trips/{slug}` when set */
  slug?: string;
};

/**
 * Home — “Featured trips” section: copy + partner strip + card grid.
 */
export const featuredTripsContent = {
  sectionId: "featured-trips" as const,
  listHref: routes.trips,
  meta: {
    leftLabel: "Upcoming Trips",
    center: "(NBL — 01)",
  },
  labelLine: "Open departure",
  badge: "2026",
  title: {
    line1: "Upcoming",
    line2: "Trips",
    /** Set true to append ® after `line2` (e.g. “June run®”). */
    showRegisteredMark: false,
  },
  description:
    "Six days and five nights in the Astore–Minimarg corridor—3–8 June 2026, PKR 40,000. One fixed window; details and inclusions on the trip page.",
  cta: { href: "/trips/minimarg" as const, label: "View trip" },
  partners: {
    caption: "Also work with vetted local partners",
    names: ["Hunza", "Skardu", "Astore", "Minimarg"] as const,
  },
  trips: [
    {
      title: "Minimarg",
      year: "Jun 2026",
      tags: ["6D / 5N", "PKR 40k"],
      image: "/images/minimarg/main.jpg",
      objectPosition: "50% 40%",
      slug: "minimarg",
    },
  ] as const satisfies readonly FeaturedTripEntry[],
};
