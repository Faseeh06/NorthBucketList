import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { PageHero } from "@/components/landing/shared/page-hero";
import { TripsPackagesSection } from "@/components/landing/trips/trips-list-sections";
import { tripsPageHero } from "@/lib/content";

const { eyebrow, titleLines, description, image, cta } = tripsPageHero;

export const metadata: Metadata = {
  title: "Trips & packages",
  description:
    "Bookable route frames and a custom trip builder for Hunza, Skardu, and the high roads.",
};

export default function TripsPage() {
  return (
    <SiteLayout>
      <PageHero
        variant="full"
        eyebrow={eyebrow}
        titleLines={titleLines}
        description={description}
        image={image}
        cta={cta}
      />
      <TripsPackagesSection />
    </SiteLayout>
  );
}
