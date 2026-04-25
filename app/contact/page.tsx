import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { ContactHero } from "@/components/landing/contact/contact-hero";
import { ContactConnectSection } from "@/components/landing/contact/contact-connect";
import { ContactFaq } from "@/components/landing/contact/contact-faq";
import { ContactWordmarkStrip } from "@/components/landing/contact/contact-banners";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NorthBucket List—planning desk in Islamabad, field teams in the northern highlands. We reply within one business day.",
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
