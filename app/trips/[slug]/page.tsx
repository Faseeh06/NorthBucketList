import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { TripDetailContent } from "@/components/landing/trips/trip-detail-content";
import { getAllTripSlugs, getTripBySlug } from "@/lib/content/trips-catalog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllTripSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) {
    return { title: "Trip" };
  }
  return {
    title: trip.title,
    description: trip.tagline,
  };
}

export default async function TripDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) {
    notFound();
  }

  return (
    <SiteLayout>
      <TripDetailContent trip={trip} />
    </SiteLayout>
  );
}
