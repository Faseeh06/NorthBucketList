"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mountain } from "lucide-react";
import { featuredTripsContent } from "@/lib/content";
import { BRAND_ACCENT_HEX } from "@/lib/constants/brand";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { SectionContainer } from "@/components/landing/shared/section-container";
import { BrandSquare } from "@/components/landing/shared/brand-square";
import { cn } from "@/lib/utils";

const { sectionId, listHref, meta, labelLine, badge, title, description, cta, partners, trips } =
  featuredTripsContent;

export function FeaturedTripsSection() {
  const { ref, visible: isVisible } = useInViewOnce({ threshold: 0.12 });

  return (
    <section
      id={sectionId}
      ref={ref}
      className="font-sans relative overflow-hidden border-b border-border bg-background py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-foreground/[0.03] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <SectionContainer>
        <div
          className={cn(
            "grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-border/80 pb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-all duration-700 sm:text-sm",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}
        >
          <div className="flex min-w-0 items-center justify-self-start gap-2">
            <BrandSquare />
            <span>{meta.leftLabel}</span>
          </div>
          <span className="justify-self-center text-center">{meta.center}</span>
          <span className="justify-self-end tabular-nums">©{new Date().getFullYear()}</span>
        </div>

        <div className="mb-12 mt-10 grid gap-8 lg:mb-16 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <span
              className={cn(
                "mb-3 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground transition-all duration-700 delay-100",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
            >
              <span className="h-px w-12 bg-foreground/30" />
              {labelLine}
            </span>
            <div
              className={cn(
                "mb-5 transition-all duration-700 delay-150",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              )}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/90 px-3 py-1 text-xs font-medium text-rose-800 dark:border-rose-500/20 dark:bg-rose-950/40 dark:text-rose-200">
                <Mountain className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
                {badge}
              </span>
            </div>
            <h2
              className={cn(
                "font-sans text-6xl leading-[0.9] tracking-tight transition-all duration-1000 md:text-7xl lg:text-[128px]",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
            >
              {title.line1}
              <br />
              <span className="text-muted-foreground">
                {title.line2}
                <span className="text-muted-foreground/70 font-light">®</span>
              </span>
            </h2>
          </div>
          <div
            className={cn(
              "flex flex-col gap-6 lg:col-span-5 lg:pb-1 transition-all duration-1000 delay-150",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <p className="max-w-md font-sans text-xl leading-relaxed text-muted-foreground">{description}</p>
            <div>
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-primary/10 py-1.5 pl-1 pr-5 text-sm text-foreground shadow-sm transition-colors hover:bg-primary/15"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: BRAND_ACCENT_HEX }}
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-sans text-[0.95rem] tracking-[-0.02em]">{cta.label}</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "border-t border-border/60 pt-10 text-center transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
            {partners.caption}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-sans text-sm tracking-[-0.02em] text-foreground/85 sm:text-base">
            {partners.names.map((p) => (
              <span key={p} className="font-medium">
                {p}
                <span className="text-foreground/35">.</span>
              </span>
            ))}
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {trips.map((trip, index) => (
            <li
              key={trip.title}
              className={cn(
                "transition-all duration-700",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              <Link
                href={listHref}
                className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:border-foreground/15 group-hover:shadow-md">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: trip.objectPosition }}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="mb-1.5 flex gap-1" aria-hidden>
                      {[0, 1, 2, 3].map((d) => (
                        <span
                          key={d}
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            d === 0 ? "" : "bg-foreground/15"
                          )}
                          style={d === 0 ? { backgroundColor: BRAND_ACCENT_HEX } : undefined}
                        />
                      ))}
                    </div>
                    <p className="font-sans text-base font-medium text-foreground sm:text-lg">{trip.title}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground sm:text-sm">{trip.year}</p>
                  </div>
                  <div className="flex flex-shrink-0 flex-wrap justify-end gap-1.5 pt-1">
                    {trip.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[10px] font-medium text-foreground/80 sm:text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
