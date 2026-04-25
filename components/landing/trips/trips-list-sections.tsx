import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, Sparkles } from "lucide-react";
import { getTripsByKind, type TripEntry } from "@/lib/content/trips-catalog";

function TripCard({ t }: { t: TripEntry }) {
  return (
    <Link
      href={`/trips/${t.slug}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border-2 border-foreground/10 bg-card shadow-[2px_2px_0_0_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.06)]"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={t.heroImage.src}
          alt={t.heroImage.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 1280px) 45vw, 100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
          aria-hidden
        />
        <span className="absolute left-3 top-3 rounded-full border border-foreground/10 bg-[#E8FF2E] px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-black sm:text-xs">
          Package
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-redob text-lg leading-tight tracking-[-0.02em] text-foreground sm:text-xl">{t.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{t.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-foreground/10 pt-3 font-mono text-[11px] text-muted-foreground sm:text-xs">
          <span>{t.duration}</span>
          <span className="text-foreground/30">·</span>
          <span>{t.priceFrom}</span>
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:underline">
          Open trip
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

/**
 * Same section shell as the old “How we’ve run the road” block: `bg-muted/20`, 2-up grid, footer CTA.
 */
export function TripsPackagesSection() {
  const packages = getTripsByKind("package");
  return (
    <section className="border-b border-border/60 bg-muted/20 py-12 md:py-20">
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
        <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
          <Package className="h-4 w-4" strokeWidth={1.5} />
          Bookable packages
        </div>
        <h2 className="max-w-3xl font-redob text-3xl uppercase leading-[0.95] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl">
          Fixed frames you can start from
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Real routes we return to—open any card for the full story, where we go, inclusions, and a photo set. Tweak
          days and we re-quote.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {packages.map((t) => (
            <li key={t.slug} className="min-w-0">
              <TripCard t={t} />
            </li>
          ))}
        </ul>
        <p className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 shrink-0 text-foreground" strokeWidth={1.5} />
          Need a different window or pace?&nbsp;
          <a href="#build" className="font-medium text-foreground underline decoration-foreground/25 underline-offset-4">
            Use the custom trip builder
          </a>
          &nbsp; or email us.
        </p>
      </div>
    </section>
  );
}
