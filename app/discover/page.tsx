import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { DiscoverWhereHero, DiscoverPromoBanner } from "@/components/landing/discover/where-hero";
import {
  DiscoverByInterest,
  DiscoverExperiencesRow,
  DiscoverArticleTeaser,
} from "@/components/landing/discover/discover-pre-boxes";
import { DiscoverCategoryCards } from "@/components/landing/discover/category-cards";

export const metadata: Metadata = {
  title: "Discover",
  description:
    "Destinations across Gilgit-Baltistan and Khyber Pakhtunkhwa. Search regions, see partners, and how we run trips in the north.",
};

export default function DiscoverPage() {
  return (
    <SiteLayout>
      <DiscoverWhereHero />
      <DiscoverPromoBanner />
      <DiscoverByInterest />
      <DiscoverExperiencesRow />
      <DiscoverArticleTeaser />
      <DiscoverCategoryCards />
    </SiteLayout>
  );
}
