import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { TripDetailContent } from "@/components/landing/trips/trip-detail-content";
import { getAllTripSlugs, getTripBySlug } from "@/lib/content/trips-catalog";
import { site } from "@/lib/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllTripSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) {
    return {
      title: "Trip",
      robots: { index: false, follow: false },
    };
  }
  const canonicalPath = `/trips/${trip.slug}`;
  const title = `${trip.title} Trip Package`;
  const description = `${trip.tagline} Duration: ${trip.duration}. Starts from ${trip.priceFrom}.`;
  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: canonicalPath,
      type: "article",
      images: [
        {
          url: trip.heroImage.src,
          alt: trip.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [trip.heroImage.src],
    },
  };
}

export default async function TripDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) {
    notFound();
  }
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl;
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.title,
    description: trip.tagline,
    image: `${baseUrl}${trip.heroImage.src}`,
    url: `${baseUrl}/trips/${trip.slug}`,
    itinerary: trip.whereWeGo.map((stop) => `${stop.label}: ${stop.place}`),
    offers: {
      "@type": "Offer",
      priceCurrency: "PKR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: trip.priceFrom.replace(/[^\d]/g, ""),
        priceCurrency: "PKR",
      },
      availability: "https://schema.org/LimitedAvailability",
    },
    areaServed: "Pakistan",
    touristType: trip.groupSize,
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
      />
      <TripDetailContent trip={trip} />
    </SiteLayout>
  );
}
