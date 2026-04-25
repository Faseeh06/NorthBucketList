/**
 * Trips page — `PageHero` and shared copy (separate from per-trip `trips-catalog`).
 */
export const tripsPageHero = {
  eyebrow: "Book with clarity",
  titleLines: ["Trips", "& packages"] as [string, string],
  description:
    "Bookable route frames, a custom builder, and sample PKR packages—Hunza, Skardu, Swat, and the high roads in between.",
  image: { src: "/images/passu.jpg", alt: "Mountain passes and the Karakoram — Northern Pakistan" },
  cta: { label: "Request a quote", href: "/contact" as const },
} as const;
