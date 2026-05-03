import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Check, X } from "lucide-react";
import type { TripEntry } from "@/lib/content/trips-catalog";
import { getTripsByKind } from "@/lib/content/trips-catalog";
import { site } from "@/lib/content/site";
import { Button } from "@/components/ui/button";
import { TripDetailSlideshow } from "@/components/landing/trips/trip-detail-slideshow";
import { cn } from "@/lib/utils";

type TripDetailContentProps = {
  trip: TripEntry;
};

function RelatedLink({ t }: { t: TripEntry }) {
  return (
    <Link
      href={`/trips/${t.slug}`}
      className="block rounded-xl border border-foreground/10 bg-card p-4 text-sm font-medium text-foreground shadow-sm transition hover:border-foreground/18 hover:bg-muted/35 hover:shadow-md"
    >
      {t.title}
    </Link>
  );
}

const tripHeroStats = (trip: TripEntry) =>
  [
    { value: trip.duration, label: "Itinerary" },
    { value: trip.priceFrom, label: "From" },
    { value: trip.yearLabel, label: "Departure" },
  ] as const;

/**
 * Trip detail hero: full viewport, but placement and chrome differ from the home landing hero—
 * copy anchors low (brochure-style), chips carry routing facts, stats sit in a frosted bar.
 */
function tripQueryWhatsAppHref(trip: TripEntry) {
  if (!trip.queryWhatsAppNumber) return null;
  const text = trip.queryWhatsAppPrefill ?? `Query related to ${trip.title} trip`;
  return `https://wa.me/${trip.queryWhatsAppNumber}?text=${encodeURIComponent(text)}`;
}

function TripHeroChrome({ trip, background }: { trip: TripEntry; background: ReactNode }) {
  const stats = tripHeroStats(trip);
  const regionsLine = trip.heroRegionsLine ?? "Karakoram · Hindukush · Himalaya";
  const queryHref = tripQueryWhatsAppHref(trip);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden border-b border-white/10 text-white">
      <div className="absolute inset-0 z-0 min-h-full">
        {background}
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/70 from-[-10%] via-black/32 via-[38%] to-transparent to-[78%] sm:via-[42%] sm:to-[85%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[58%] bg-gradient-to-t from-black/72 via-black/38 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black/42 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 pb-8 sm:px-5 sm:pb-10 lg:px-8">
          <Link
            href="/trips"
            className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/18 bg-white/[0.07] px-3.5 py-2 text-xs font-medium text-white/92 backdrop-blur-md transition hover:border-white/28 hover:bg-white/[0.14]"
          >
            <ChevronLeft className="h-3.5 w-3.5 opacity-90" />
            All trips
          </Link>

          <div className="mb-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/22 bg-black/35 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/92 backdrop-blur-sm sm:text-[11px]">
              {trip.kind === "package" ? "Package" : "Past run"}
            </span>
            <span className="rounded-full border border-white/22 bg-black/35 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/88 backdrop-blur-sm sm:text-[11px]">
              {trip.yearLabel}
            </span>
            <span className="rounded-full border border-white/22 bg-black/35 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/88 backdrop-blur-sm sm:text-[11px]">
              {trip.duration}
            </span>
          </div>

          <h1
            className="max-w-[13ch] font-redob uppercase leading-[0.88] tracking-[-0.03em] text-white [text-shadow:0_2px_36px_rgba(0,0,0,0.5)] sm:max-w-[18ch]"
            style={{ fontSize: "clamp(2.65rem, 7.25vw, 4.85rem)" }}
          >
            {trip.title}
          </h1>

          {trip.heroKicker ? (
            <p className="mt-5 max-w-2xl font-sans text-lg font-medium leading-snug tracking-[-0.02em] text-white/95 sm:text-xl md:text-[1.35rem] [text-shadow:0_1px_22px_rgba(0,0,0,0.38)]">
              {trip.heroKicker}
            </p>
          ) : null}

          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/82 sm:text-lg [text-shadow:0_1px_14px_rgba(0,0,0,0.32)]">
            {trip.tagline}
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[min(100%,1760px)] px-4 pb-10 sm:px-5 md:pb-14 lg:px-8">
        <div className="rounded-2xl border border-white/18 bg-white/[0.08] p-5 shadow-[0_-8px_40px_rgba(0,0,0,0.28)] backdrop-blur-lg sm:p-6 md:p-7">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex flex-1 flex-wrap items-end gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-14">
              {stats.map((s) => (
                <div key={s.label} className="min-w-[42%] sm:min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">{s.label}</span>
                  <span className="mt-1 block font-sans text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center gap-3 lg:justify-end">
              <Button
                className="h-10 rounded-full bg-white px-6 font-mono text-xs text-black shadow-lg shadow-black/25 hover:bg-white/90 sm:h-11 sm:px-7"
                asChild
              >
                <a
                  href={
                    trip.bookingFormUrl ??
                    `mailto:${site.email}?subject=${encodeURIComponent(`Book now — ${trip.title}`)}`
                  }
                  target={trip.bookingFormUrl ? "_blank" : undefined}
                  rel={trip.bookingFormUrl ? "noopener noreferrer" : undefined}
                >
                  Book now
                </a>
              </Button>
              <Button
                variant="outline"
                className="h-10 rounded-full border-white/35 bg-white/[0.08] px-6 font-mono text-xs text-white backdrop-blur-sm hover:bg-white/[0.14] hover:text-white sm:h-11 sm:px-7"
                asChild
              >
                {queryHref ? (
                  <a href={queryHref} target="_blank" rel="noopener noreferrer">
                    Send query
                  </a>
                ) : (
                  <Link href="/contact">Send query</Link>
                )}
              </Button>
            </div>
          </div>
          <p className="mt-6 border-t border-white/12 pt-5 font-mono text-[11px] leading-relaxed text-white/65 sm:text-xs lg:mt-5 lg:pt-4 lg:text-[13px]">
            {regionsLine}
          </p>
        </div>
      </div>
    </section>
  );
}

function TripSlideshowHero({ trip }: { trip: TripEntry }) {
  const slides = trip.slideshow ?? [];
  return <TripHeroChrome trip={trip} background={<TripDetailSlideshow slides={slides} variant="hero" />} />;
}

function TripFullBleedHero({ trip }: { trip: TripEntry }) {
  return (
    <TripHeroChrome
      trip={trip}
      background={
        <Image
          src={trip.heroImage.src}
          alt={trip.heroImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      }
    />
  );
}

export function TripDetailContent({ trip }: TripDetailContentProps) {
  const sameKind = getTripsByKind(trip.kind).filter((t) => t.slug !== trip.slug).slice(0, 3);
  const otherKind = getTripsByKind(trip.kind === "package" ? "past" : "package").slice(0, 2);
  const related = [...sameKind, ...otherKind].slice(0, 3);
  const useSlideshowHero = (trip.slideshow?.length ?? 0) > 0;

  return (
    <article>
      {useSlideshowHero ? <TripSlideshowHero trip={trip} /> : <TripFullBleedHero trip={trip} />}

      <div className="border-b border-foreground/10 bg-background">
        <div className="mx-auto flex w-full max-w-5xl justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="w-full max-w-lg rounded-md border border-foreground/15 p-2 sm:max-w-none sm:p-2.5">
            <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
              {(
                [
                  { label: "Length", value: trip.duration },
                  { label: "Group", value: trip.groupSize },
                  { label: "Price", value: trip.priceFrom, tabular: true },
                  { label: "Dates", value: trip.season },
                ] as const
              ).map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col items-center justify-center rounded-sm border border-foreground/12 bg-transparent px-3 py-4 text-center sm:px-4 sm:py-5"
                >
                  <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                    {row.label}
                  </dt>
                  <dd
                    className={cn(
                      "mt-2 max-w-[16rem] text-pretty font-sans text-sm font-semibold leading-snug tracking-[-0.02em] text-foreground sm:mt-2.5 sm:text-[15px] md:text-base",
                      "tabular" in row && row.tabular && "tabular-nums",
                    )}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[min(100%,960px)] px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
        <h2 className="font-redob text-2xl uppercase tracking-[-0.02em] text-foreground sm:text-3xl">Overview</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {trip.overview.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>

      <section className="border-y border-foreground/10 bg-muted/15 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
          <h2 className="font-redob text-2xl uppercase tracking-[-0.02em] text-foreground sm:text-3xl">The plan</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Day-by-day spine for this run—small shifts for weather and group pace are normal on the road.
          </p>
          <ol className="mt-8 space-y-0 border-l-2 border-foreground/15 pl-6 sm:pl-8">
            {trip.whereWeGo.map((s, i) => (
              <li key={s.label + s.place + i} className="relative pb-10 pl-1 last:pb-0">
                <span className="absolute -left-6 top-0 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-foreground bg-background sm:-left-8" />
                <p className="font-mono text-xs font-medium text-foreground sm:text-sm">{s.label}</p>
                {s.place ? (
                  <h3 className="mt-1 font-sans text-lg font-semibold text-foreground sm:text-xl">{s.place}</h3>
                ) : null}
                <p className="mt-1.5 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {trip.gallery.length > 0 && (
        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
            <h2 className="font-redob text-2xl uppercase tracking-[-0.02em] text-foreground sm:text-3xl">Gallery</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {trip.gallery.map((g) => (
                <li
                  key={g.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-foreground/10 bg-muted"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className="border-t border-foreground/10 bg-muted/20 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-redob text-xl uppercase text-foreground sm:text-2xl">Highlights</h2>
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base">
                {trip.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={2} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-redob text-xl uppercase text-foreground sm:text-2xl">Inclusions & notes</h2>
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base">
                {trip.included.map((h) => (
                  <li key={h} className="flex gap-2 text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={2} />
                    <span>{h}</span>
                  </li>
                ))}
                {trip.notIncluded.map((h) => (
                  <li key={h} className="flex gap-2 text-muted-foreground/90">
                    <X className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-foreground/10 py-10 sm:py-12">
          <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
            <h2 className="font-redob text-lg uppercase text-foreground sm:text-xl">More trips</h2>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {related.map((r) => (
                <RelatedLink key={r.slug} t={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
