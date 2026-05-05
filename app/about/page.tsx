import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { PageHero } from "@/components/landing/shared/page-hero";
import { AboutPageContent } from "@/components/landing/about/about-content";
import { aboutContent } from "@/lib/content";
import { routes } from "@/lib/content/site";

const { meta, hero } = aboutContent;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: routes.about,
  },
  openGraph: {
    title: "About NorthBucket List",
    description: meta.description,
    url: routes.about,
    images: [{ url: hero.image.src, alt: hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NorthBucket List",
    description: meta.description,
    images: [hero.image.src],
  },
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        variant="full"
        eyebrow={hero.eyebrow}
        titleLines={hero.titleLines}
        description={hero.description}
        image={hero.image}
        cta={hero.cta}
      />
      <AboutPageContent />
    </SiteLayout>
  );
}
