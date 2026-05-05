import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { DiscoverWhereHero, DiscoverPromoBanner } from "@/components/landing/discover/where-hero";
import {
  DiscoverByInterest,
  DiscoverArticleTeaser,
} from "@/components/landing/discover/discover-pre-boxes";
import { DiscoverCategoryCards } from "@/components/landing/discover/category-cards";
import { routes } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Discover",
  description:
    "Discover destinations across Gilgit-Baltistan and Khyber Pakhtunkhwa with realistic routes, timing advice, and PKR budget context.",
  alternates: {
    canonical: routes.discover,
  },
  openGraph: {
    title: "Discover Northern Pakistan Destinations | NorthBucket List",
    description:
      "Search practical route options for Hunza, Skardu, and high-valley travel in Northern Pakistan.",
    url: routes.discover,
    images: [{ url: "/images/passu.jpg", alt: "Northern Pakistan mountains at Passu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Northern Pakistan Destinations | NorthBucket List",
    description: "Route-first planning for Northern Pakistan valleys with local trip context.",
    images: ["/images/passu.jpg"],
  },
};

export default function DiscoverPage() {
  return (
    <SiteLayout>
      <DiscoverWhereHero />
      <DiscoverPromoBanner />
      <DiscoverByInterest />
      <DiscoverArticleTeaser />
      <DiscoverCategoryCards />
    </SiteLayout>
  );
}
