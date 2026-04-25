import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mountain, Sparkles, Target } from "lucide-react";
import { aboutContent } from "@/lib/content";
import { BrandSquare } from "@/components/landing/shared/brand-square";
import { SectionContainer } from "@/components/landing/shared/section-container";
import { BRAND_ACCENT_HEX } from "@/lib/constants/brand";
import { AboutFaq } from "@/components/landing/about/about-faq";

const { story, mission, vision, values, team, breakImage, hero } = aboutContent;

const pillarIcons = {
  mission: Target,
  vision: Mountain,
  values: Sparkles,
} as const;

/** Two-column: story + highlights + CTA | stacked “award”-style cards for M/V/V */
function AboutStoryPillars() {
  return (
    <section className="border-b border-foreground/10 bg-muted/20 py-20 font-sans md:py-28 lg:py-32">
      <SectionContainer>
        <div className="mb-12 flex flex-col justify-between gap-2 text-sm text-muted-foreground sm:mb-14 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <BrandSquare />
            <span className="font-mono uppercase tracking-[0.16em]">{story.header.eyebrow}</span>
          </div>
          <span className="font-mono text-[11px] text-muted-foreground/90 sm:text-xs">{story.header.code}</span>
          <span className="font-mono tabular-nums sm:text-right">{story.header.year}</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <h2 className="font-sans text-4xl font-semibold leading-[0.9] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl">
              {story.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              {story.lede}
            </p>
            <div className="my-9 border-t border-foreground/10 sm:my-10" />
            <ul className="space-y-3 sm:space-y-4">
              {story.highlights.map((label) => (
                <li key={label} className="flex items-center gap-3 sm:gap-4">
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-primary-foreground"
                    style={{ backgroundColor: BRAND_ACCENT_HEX }}
                    aria-hidden
                  >
                    <span className="text-base font-light leading-none">+</span>
                  </span>
                  <span className="text-base text-foreground sm:text-lg">{label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 sm:mt-10">
              <Link
                href={hero.cta.href}
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card py-1.5 pl-1 pr-6 text-sm text-foreground shadow-sm transition-colors hover:bg-card/80"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-primary-foreground transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: BRAND_ACCENT_HEX }}
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="pr-1 font-sans text-[0.95rem] tracking-[-0.02em]">
                  {hero.cta.label}
                </span>
              </Link>
            </div>
            <div className="mt-9 space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-10 sm:space-y-6 sm:text-lg">
              {story.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {(
              [
                { kind: "mission" as const, title: mission.title, subtitle: mission.body, index: "01" },
                { kind: "vision" as const, title: vision.title, subtitle: vision.body, index: "02" },
                {
                  kind: "values" as const,
                  title: values.title,
                  subtitle: values.items.join(" · "),
                  index: "03",
                },
              ] as const
            ).map((row) => {
              const Icon = pillarIcons[row.kind];
              return (
                <div
                  key={row.kind}
                  className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-card/90 p-3 pr-2 shadow-sm sm:gap-4 sm:p-4"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-muted/80 sm:h-14 sm:w-14"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5 text-foreground sm:h-6 sm:w-6" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-base font-semibold tracking-[-0.02em] text-foreground sm:text-lg">
                      {row.title}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:line-clamp-3 sm:text-base">
                      {row.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full border border-foreground/10 bg-muted/50 px-2.5 py-1 font-mono text-[10px] tabular-nums text-muted-foreground sm:px-3 sm:text-xs">
                    {row.index}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function AboutBreakImageFullBleed() {
  return (
    <section
      className="relative min-h-[70vh] w-full sm:min-h-[80vh] lg:min-h-screen"
      aria-label={breakImage.alt}
    >
      <Image
        src={breakImage.src}
        alt={breakImage.alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-black/20"
        aria-hidden
      />
    </section>
  );
}

export function AboutPageContent() {
  return (
    <>
      <AboutStoryPillars />
      <AboutBreakImageFullBleed />

      <section className="border-t border-foreground/10 bg-muted/20 py-16 font-sans lg:py-24">
        <SectionContainer>
          <div className="mb-12 flex flex-col gap-2 sm:mb-14">
            <div className="flex items-center gap-2">
              <BrandSquare />
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                {team.kicker}
              </p>
            </div>
            <h2 className="font-sans text-3xl leading-[0.9] tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
              {team.foundersTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-6">
            {team.members.map((m) => (
              <figure
                key={m.name}
                className="overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              >
                <div className="relative aspect-[4/5] w-full bg-muted">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1280px) 25vw, 50vw, 100vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5"
                    aria-hidden
                  />
                </div>
              </figure>
            ))}
          </div>
        </SectionContainer>
      </section>

      <AboutFaq />
    </>
  );
}
