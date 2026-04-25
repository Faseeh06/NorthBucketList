import { MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { BrandSquare } from "@/components/landing/shared/brand-square";
import { SectionContainer } from "@/components/landing/shared/section-container";
import { ContactForm } from "./contact-form";

const socials = [
  { label: "Email the desk", href: "mailto:hello@northbucketlist.com", abbr: "@" },
  { label: "Discover routes", href: "/discover", abbr: "◆" },
  { label: "About us", href: "/about", abbr: "☆" },
];

export function ContactConnectSection() {
  return (
    <section
      id="connect"
      className="scroll-mt-24 border-t border-foreground/10 bg-background py-16 font-sans lg:py-20"
    >
      <SectionContainer>
        <div className="mb-6 flex items-center gap-2">
          <BrandSquare />
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
            Fill the form out
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-foreground/10 bg-card px-3 py-1.5">
              <MessageCircle className="h-4 w-4 text-foreground/70" strokeWidth={1.5} />
              <span className="font-sans text-xs text-foreground/90 sm:text-sm">Contact now</span>
            </div>

            <h2 className="font-sans text-5xl leading-[0.9] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl">
              Let&apos;s connect
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
              Whether you want a KKH run, a Hunza week, or a first-time taste of the high valleys, tell
              us your window—we&apos;ll help you shape a realistic, weather-aware plan.
            </p>

            <div className="mt-8 space-y-1">
              <h3 className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.16em]">
                Base & field
              </h3>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                  Field teams: Gilgit-Baltistan & Khyber Pakhtunkhwa
                  <br />
                  <span className="text-muted-foreground">Planning desk: Islamabad</span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.16em]">
                Follow the trail
              </p>
              <ul className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-card text-sm font-sans text-foreground hover:border-foreground/30 transition-colors"
                      aria-label={s.label}
                    >
                      {s.abbr}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </SectionContainer>
    </section>
  );
}
