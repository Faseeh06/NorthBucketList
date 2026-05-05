import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTripsByKind, type TripEntry } from "@/lib/content/trips-catalog";

const FALLBACK_CHAR_IN_DISPLAY_TEXT = /[0-9]|[^A-Za-z\s]/;

function renderDisplayText(text: string) {
  return text.split("").map((char, index) =>
    FALLBACK_CHAR_IN_DISPLAY_TEXT.test(char) ? (
      <span key={`${char}-${index}`} className="font-sans font-black">
        {char}
      </span>
    ) : (
      char
    ),
  );
}

function TripCard({ t }: { t: TripEntry }) {
  const kindLabel = t.kind === "package" ? "Package" : "Past run";

  return (
    <Link
      href={`/trips/${t.slug}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_22px_56px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:border-foreground/16 hover:shadow-[0_32px_64px_-30px_rgba(0,0,0,0.38)]"
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden">
        <Image
          src={t.heroImage.src}
          alt={t.heroImage.alt}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
          sizes="(min-width: 1280px) 42vw, 100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent"
          aria-hidden
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#E8FF2E] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-black sm:left-4 sm:top-4 sm:text-[11px]">
          {kindLabel}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-black/50 px-3 py-1 font-mono text-[10px] text-white/95 backdrop-blur-md sm:bottom-4 sm:left-4 sm:text-[11px]">
          {t.yearLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-redob text-xl leading-[1.06] tracking-[-0.02em] text-foreground sm:text-2xl">
          {renderDisplayText(t.title)}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{t.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-foreground/10 pt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground sm:text-xs">
          <span>{t.duration}</span>
          <span className="text-foreground/25" aria-hidden>
            ·
          </span>
          <span className="font-semibold tracking-normal text-foreground">{t.priceFrom}</span>
        </div>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-foreground transition-[gap] duration-300 group-hover:gap-3">
          View trip
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

/**
 * Packages listing — gradient band, editorial header, cards tuned for one or many departures.
 */
export function TripsPackagesSection() {
  const packages = getTripsByKind("package");
  const primary = packages[0];
  const headline =
    packages.length === 1 && primary ? `${primary.title} · ${primary.yearLabel}` : "Open departures";
  const deck =
    packages.length === 1 && primary
      ? primary.tagline
      : "Bookable route frames with fixed dates—more corridors will land here as we lock seasons.";

  return (
    <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-muted/50 via-background to-muted/25 py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" aria-hidden />
              <Compass className="h-4 w-4 opacity-70" strokeWidth={1.5} />
              Open departure
            </div>
            <h2 className="mt-4 font-redob text-[clamp(1.85rem,4.2vw,3.35rem)] uppercase leading-[0.96] tracking-[-0.02em] text-foreground">
              {renderDisplayText(headline)}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{deck}</p>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground lg:text-right lg:text-sm">
            Poster, field gallery, and day-by-day spine live on each trip page—open when you&apos;re ready to decide.
          </p>
        </div>

        <ul
          className={cn(
            "mx-auto mt-12 grid w-full gap-8 md:mt-14 md:gap-10",
            packages.length === 1 ? "max-w-xl grid-cols-1 md:max-w-2xl" : "max-w-6xl grid-cols-1 md:grid-cols-2",
          )}
        >
          {packages.map((t) => (
            <li key={t.slug} className="min-w-0">
              <TripCard t={t} />
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 flex max-w-2xl flex-wrap items-start gap-3 border-t border-foreground/10 pt-10 text-sm leading-relaxed text-muted-foreground md:mt-14">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" strokeWidth={1.5} />
          <span>
            Need a different window or pace?{" "}
            <a href="#build" className="font-medium text-foreground underline decoration-foreground/25 underline-offset-4">
              Use the custom trip builder
            </a>{" "}
            or email us—we&apos;ll sketch options.
          </span>
        </p>
      </div>
    </section>
  );
}
