import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { PageHero } from "@/components/landing/shared/page-hero";
import { FeaturesSection } from "@/components/landing/home/features-section";
import { HowItWorksSection } from "@/components/landing/blocks/how-it-works-section";
import { PricingSection } from "@/components/landing/blocks/pricing-section";

const heroImage = {
  src: "/images/passu.jpg",
  alt: "Mountain passes and valleys — Northern Pakistan",
} as const;

export const metadata: Metadata = {
  title: "Trips & packages",
  description:
    "Trip styles, how booking works, and sample packages for Hunza, Skardu, and the Karakoram.",
};

export default function TripsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Book with clarity"
        titleLines={["Trips", "& packages"]}
        description="From weekender runs to long Hunza loops—see how we plan logistics, set pacing, and price packages in PKR with no fine print on the road."
        image={heroImage}
        cta={{ label: "See sample pricing", href: "/trips#pricing" }}
      />
      <div className="bg-background">
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
      </div>
    </SiteLayout>
  );
}
