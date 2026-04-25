import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Check, X } from "lucide-react";
import type { TripEntry } from "@/lib/content/trips-catalog";
import { getTripsByKind } from "@/lib/content/trips-catalog";
import { site } from "@/lib/content/site";
import { Button } from "@/components/ui/button";

type TripDetailContentProps = {
  trip: TripEntry;
};

function RelatedLink({ t }: { t: TripEntry }) {
  return (
    <Link
      href={`/trips/${t.slug}`}
      className="block rounded-lg border border-foreground/10 bg-card p-3 text-sm font-medium text-foreground transition hover:bg-muted/50"
    >
      {t.title}
    </Link>
  );
}

export function TripDetailContent({ trip }: TripDetailContentProps) {
  const sameKind = getTripsByKind(trip.kind).filter((t) => t.slug !== trip.slug).slice(0, 3);
  const otherKind = getTripsByKind(trip.kind === "package" ? "past" : "package").slice(0, 2);
  const related = [...sameKind, ...otherKind].slice(0, 3);

  return (
    <article>
      <section className="relative min-h-[min(85vh,720px)] w-full">
        <div className="absolute inset-0">
          <Image
            src={trip.heroImage.src}
            alt={trip.heroImage.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[min(85vh,720px)] w-full max-w-[min(100%,1760px)] flex-col justify-end px-4 pb-16 pt-32 sm:px-5 lg:px-8">
          <Link
            href="/trips"
            className="mb-8 inline-flex w-fit items-center gap-1 text-sm font-medium text-foreground/90 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
            All trips
          </Link>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
            {trip.kind === "package" ? "Package" : "Past run"} · {trip.yearLabel}
          </p>
          <h1 className="mt-2 max-w-4xl font-redob text-4xl uppercase leading-[0.9] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            {trip.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">{trip.tagline}</p>
        </div>
      </section>

      <div className="border-b border-foreground/10 bg-background">
        <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 py-10 sm:px-5 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-8 lg:grid-cols-2">
              <div className="rounded-lg border border-foreground/10 bg-muted/30 p-3 sm:p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Length</p>
                <p className="mt-0.5 font-sans text-sm font-semibold text-foreground sm:text-base">{trip.duration}</p>
              </div>
              <div className="rounded-lg border border-foreground/10 bg-muted/30 p-3 sm:p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Group</p>
                <p className="mt-0.5 font-sans text-sm font-semibold text-foreground sm:text-base">{trip.groupSize}</p>
              </div>
              <div className="rounded-lg border border-foreground/10 bg-muted/30 p-3 sm:p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Indicative</p>
                <p className="mt-0.5 font-sans text-sm font-semibold text-foreground sm:text-base">{trip.priceFrom}</p>
              </div>
              <div className="rounded-lg border border-foreground/10 bg-muted/30 p-3 sm:p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Window</p>
                <p className="mt-0.5 font-sans text-sm font-semibold text-foreground sm:text-base">{trip.season}</p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-xl border-2 border-foreground/10 bg-card p-5 shadow-sm">
                <p className="text-sm text-muted-foreground">Ready to line up this shape on your dates?</p>
                <Button asChild className="mt-4 w-full rounded-full" size="lg">
                  <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Trip: ${trip.title}`)}`}>Email the team</a>
                </Button>
                <Button asChild variant="outline" className="mt-2 w-full rounded-full border-foreground/20" size="lg">
                  <Link href="/contact">Contact form</Link>
                </Button>
                <Link
                  href="/trips#build"
                  className="mt-3 block text-center text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4"
                >
                  Or use the custom trip builder
                </Link>
              </div>
            </div>
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
          <h2 className="font-redob text-2xl uppercase tracking-[-0.02em] text-foreground sm:text-3xl">Where we take you</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A practical spine for the run—day order can move with weather, passes, and how the group feels on the
            road.
          </p>
          <ol className="mt-8 space-y-0 border-l-2 border-foreground/15 pl-6 sm:pl-8">
            {trip.whereWeGo.map((s, i) => (
              <li key={s.label + s.place} className="relative pb-10 pl-1 last:pb-0">
                <span className="absolute -left-6 top-0 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-foreground bg-background sm:-left-8" />
                <p className="font-mono text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                <h3 className="mt-1 font-sans text-lg font-semibold text-foreground sm:text-xl">{s.place}</h3>
                <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.description}
                </p>
                {i < trip.whereWeGo.length - 1 && <div className="mt-0" />}
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
