import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { PageHero } from "@/components/landing/shared/page-hero";
import { FeedbacksBridgeSection } from "@/components/landing/feedbacks/feedbacks-bridge-section";
import { TestimonialsSection } from "@/components/landing/home/testimonials-section";

const heroImage = {
  src: "/images/passu.jpg",
  alt: "Passu and the high valleys — Northern Pakistan",
} as const;

export const metadata: Metadata = {
  title: "Feedbacks",
  description: "What travelers say about our Northern Pakistan trips—real notes from the KKH, Hunza, and Skardu.",
};

export default function FeedbacksPage() {
  return (
    <SiteLayout>
      <PageHero
        variant="split"
        eyebrow="Feedbacks & stories"
        titleLines={["Voices from", "the road"]}
        description="We do not stage quotes. The lines below are from people who actually rode with us—when cherry blossom lined the KKH, when Skardu was crisp, and when plans had to change mid-day."
        image={heroImage}
        cta={{ label: "Plan a trip", href: "/contact" }}
      />
      <FeedbacksBridgeSection />
      <TestimonialsSection
        eyebrow="Traveler notes"
        titleBefore="Hear it"
        titleEmphasis=" in their words."
      />
    </SiteLayout>
  );
}
