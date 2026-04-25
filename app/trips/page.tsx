import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { PageHero } from "@/components/landing/shared/page-hero";
import { TripsWhereHero } from "@/components/landing/trips/trips-where-hero";
import { TripsPackagesSection } from "@/components/landing/trips/trips-list-sections";
import { CustomTripForm } from "@/components/landing/trips/custom-trip-form";
import { HowItWorksSection } from "@/components/landing/blocks/how-it-works-section";
import { PricingSection } from "@/components/landing/blocks/pricing-section";
import { tripsPageHero } from "@/lib/content";

const { eyebrow, titleLines, description, image, cta } = tripsPageHero;

export const metadata: Metadata = {
  title: "Trips & packages",
  description:
    "Bookable route frames, custom trip builder, and sample pricing for Hunza, Skardu, and the high roads.",
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
      <TripsWhereHero afterPageHero />
      <TripsPackagesSection />
      <CustomTripForm id="build" />
      <HowItWorksSection />
      <PricingSection />
    </SiteLayout>
  );
}
