import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { HeroSection } from "@/components/landing/home/hero-section";
import { LandingIntroSection } from "@/components/landing/home/landing-intro-section";
import { AboutUsSection } from "@/components/landing/home/about-us-section";
import { FeaturedTripsSection } from "@/components/landing/home/featured-trips-section";
import { TestimonialsSection } from "@/components/landing/home/testimonials-section";
import { routes } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Trips in Northern Pakistan",
  description:
    "Pakistan-first mountain trips across Hunza, Skardu, and the KKH with local teams, clear PKR budgets, and practical route planning.",
  alternates: {
    canonical: routes.home,
  },
  openGraph: {
    title: "Trips in Northern Pakistan | NorthBucket List",
    description:
      "Explore Northern Pakistan with practical itineraries in Hunza, Skardu, and Karakoram corridors.",
    url: routes.home,
    images: [{ url: "/images/passu.jpg", alt: "Passu and Karakoram peaks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trips in Northern Pakistan | NorthBucket List",
    description: "Local route-smart plans for Hunza, Skardu, and high-road Pakistan travel.",
    images: ["/images/passu.jpg"],
  },
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
