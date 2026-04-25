import { MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./contact-form";

const socials = [
  { label: "Email the desk", href: "mailto:hello@northbucketlist.com", abbr: "@" },
  { label: "Discover routes", href: "/discover", abbr: "◆" },
  { label: "Traveler stories", href: "/feedbacks", abbr: "☆" },
];

export function ContactConnectSection() {
  return (
    <section
      id="connect"
      className="bg-background border-t border-foreground/10 py-12 md:py-16 scroll-mt-24"
    >
      <div className="w-full max-w-[min(100%,1760px)] mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
          <span className="text-foreground" aria-hidden>
            ■
          </span>
          <span>Fill the form out</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-sm border border-foreground/10 bg-card px-3 py-1.5 mb-6">
              <MessageCircle className="h-4 w-4 text-foreground/70" strokeWidth={1.5} />
              <span className="font-sans text-xs text-foreground/90">Contact now</span>
            </div>

            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl text-foreground tracking-[-0.04em] leading-[0.95]">
              Let&apos;s connect
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
              Whether you want a KKH run, a Hunza week, or a first-time taste of the high valleys, tell
              us your window—we&apos;ll help you shape a realistic, weather-aware plan.
            </p>

            <div className="mt-8 space-y-1">
              <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Base & field
              </h3>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-foreground/60 shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Field teams: Gilgit-Baltistan & Khyber Pakhtunkhwa
                  <br />
                  <span className="text-muted-foreground">Planning desk: Islamabad</span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
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
      </div>
    </section>
  );
}
