import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { PageHero } from "@/components/landing/shared/page-hero";
import { TripsPackagesSection } from "@/components/landing/trips/trips-list-sections";
import { tripsPageHero } from "@/lib/content";
import { routes } from "@/lib/content/site";

const { eyebrow, titleLines, description, image, cta } = tripsPageHero;

export const metadata: Metadata = {
  title: "Trips & packages",
  description:
    "Bookable Northern Pakistan trips with practical day plans, transport options, and transparent PKR price starting points.",
  alternates: {
    canonical: routes.trips,
  },
  openGraph: {
    title: "Trips & Packages in Northern Pakistan | NorthBucket List",
    description:
      "Compare Hunza, Skardu, and high-road departures with route details and realistic budget context.",
    url: routes.trips,
    images: [{ url: "/images/passu.jpg", alt: "Mountain trip routes in Northern Pakistan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trips & Packages in Northern Pakistan | NorthBucket List",
    description: "Pakistan-first trip packages with route clarity and PKR budget guidance.",
    images: ["/images/passu.jpg"],
  },
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
