import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { ContactHero } from "@/components/landing/contact/contact-hero";
import { ContactConnectSection } from "@/components/landing/contact/contact-connect";
import { ContactFaq } from "@/components/landing/contact/contact-faq";
import { ContactWordmarkStrip } from "@/components/landing/contact/contact-banners";
import { routes } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NorthBucket List for Northern Pakistan trip planning, departure queries, and custom route guidance. We reply within one business day.",
  alternates: {
    canonical: routes.contact,
  },
  openGraph: {
    title: "Contact NorthBucket List",
    description:
      "Talk to our planning team for Hunza, Skardu, and northern route support with practical budget guidance.",
    url: routes.contact,
    images: [{ url: "/images/passu.jpg", alt: "Contact NorthBucket List for mountain trip planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NorthBucket List",
    description: "Get route support and trip planning help for Northern Pakistan.",
    images: ["/images/passu.jpg"],
  },
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <ContactHero />
      <ContactConnectSection />
      <ContactFaq />
      <ContactWordmarkStrip />
    </SiteLayout>
  );
}
