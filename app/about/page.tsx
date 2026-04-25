import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { PageHero } from "@/components/landing/shared/page-hero";
import { AboutPageContent } from "@/components/landing/about/about-content";
import { aboutContent } from "@/lib/content";

const { meta, hero } = aboutContent;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
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
