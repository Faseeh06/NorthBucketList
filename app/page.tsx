import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { HeroSection } from "@/components/landing/home/hero-section";
import { LandingIntroSection } from "@/components/landing/home/landing-intro-section";
import { AboutUsSection } from "@/components/landing/home/about-us-section";
import { FeaturedTripsSection } from "@/components/landing/home/featured-trips-section";
import { TestimonialsSection } from "@/components/landing/home/testimonials-section";

export const metadata: Metadata = {
  title: "Trips in Northern Pakistan",
  description:
    "Journeys across the Karakoram and Hindu Kush—real roads, real stays, and flexible plans for Hunza, Skardu, and the KKH. Built around you.",
};

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <LandingIntroSection />
      <AboutUsSection />
      <FeaturedTripsSection />
      <TestimonialsSection />
    </SiteLayout>
  );
}
