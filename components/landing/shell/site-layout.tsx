import { Navigation } from "@/components/landing/shell/navigation";
import { FooterSection } from "@/components/landing/shell/footer-section";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      {children}
      <FooterSection />
    </main>
  );
}
