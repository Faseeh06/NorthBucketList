import { Compass, Info, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { BrandSquare } from "@/components/landing/shared/brand-square";
import { SectionContainer } from "@/components/landing/shared/section-container";
import { ContactForm } from "./contact-form";

const socials = [
  { label: "Email the desk", href: "mailto:hello@northbucketlist.com", icon: Mail },
  { label: "Discover routes", href: "/discover", icon: Compass },
  { label: "About us", href: "/about", icon: Info },
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
              <span className="font-sans text-sm text-foreground/90 sm:text-base">Contact now</span>
            </div>

            <h2 className="font-sans text-5xl leading-[0.9] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl">
              Let&apos;s connect
            </h2>

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
                      <s.icon className="h-4 w-4" strokeWidth={1.8} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:ml-auto lg:max-w-xl">
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
