import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { landingIntro } from "@/lib/content";
import { BRAND_ACCENT_HEX } from "@/lib/constants/brand";
import { SectionContainer } from "@/components/landing/shared/section-container";
import { BrandSquare } from "@/components/landing/shared/brand-square";

/**
 * Post-hero intro: editorial headline, CTA, two columns, three-up gallery.
 * Copy: `lib/content/home/intro.ts` · type: Instrument Sans · `font-sans`.
 */
export function LandingIntroSection() {
  const { metaLabel, headline, cta, columns, gallery } = landingIntro;

  return (
    <section className="relative overflow-hidden border-b border-foreground/10 bg-background">
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rotate-12 rounded-3xl bg-foreground/[0.04] sm:h-96 sm:w-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-20 h-56 w-64 -rotate-6 rounded-3xl bg-foreground/[0.03] sm:h-72 sm:w-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 top-10 hidden h-32 w-40 rotate-6 rounded-2xl bg-foreground/[0.025] sm:block"
        aria-hidden
      />

      <SectionContainer className="py-12 md:py-16">
        <div className="mb-6 flex items-center gap-2">
          <BrandSquare />
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
            {metaLabel}
          </p>
        </div>

        <h2 className="ml-auto max-w-4xl text-right font-sans text-[clamp(1.35rem,3.8vw,2.5rem)] leading-[1.12] tracking-[-0.04em] text-foreground">
          {headline}
          <span className="text-primary" aria-hidden>
            *
          </span>
        </h2>

        <div className="mt-8 flex justify-end">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-primary/10 py-1.5 pl-1 pr-5 text-sm text-foreground shadow-sm transition-colors hover:bg-primary/15"
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: BRAND_ACCENT_HEX }}
            >
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="font-sans text-[0.95rem] tracking-[-0.02em]">{cta.label}</span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-xl tracking-[-0.04em] text-foreground sm:text-2xl">
                {col.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{col.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-3">
          {gallery.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
