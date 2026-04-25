"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Star } from "lucide-react";

/* ─── 1) Interest row ─── */

const interests = [
  { label: "Outdoors", image: "/images/outdoor.jpg", pos: "50% 45%" },
  { label: "Local food", image: "/images/food.jpg", pos: "50% 50%" },
  { label: "Culture", image: "/images/culture.jpg", pos: "50% 45%" },
  { label: "Lakes & rivers", image: "/images/lake.webp", pos: "50% 50%" },
];

export function DiscoverByInterest() {
  return (
    <section className="bg-background border-b border-border/60 py-8 md:py-12">
      <div className="w-full max-w-[min(100%,1760px)] mx-auto px-4 sm:px-5 lg:px-8">
        <h2 className="font-redob text-2xl sm:text-3xl text-foreground tracking-[-0.02em] text-left">
          Find things to do by interest
        </h2>
        <p className="mt-2 text-left text-sm sm:text-base text-muted-foreground max-w-2xl">
          Whatever you&apos;re into, we&apos;ve got a north-facing angle for it.
        </p>
        <ul className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {interests.map((c) => (
            <li key={c.label}>
              <Link
                href="/trips"
                className="group relative block aspect-square overflow-hidden border-2 border-foreground/12 bg-card shadow-[2px_2px_0_0_rgba(0,0,0,0.05)] rounded-sm"
              >
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: c.pos }}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 font-redob text-lg sm:text-xl text-white tracking-[-0.02em]">
                  {c.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── 2) Experience strip (horizontal scroll) ─── */

const experiences: {
  title: string;
  price: string;
  reviews: number;
  image: string;
}[] = [
  {
    title: "Hunza full-day: Karimabad, Baltit Fort, sunset view",
    price: "from $85 per person",
    reviews: 128,
    image: "/images/hunza.webp",
  },
  {
    title: "Skardu gateway: Shigar, cold desert & Shangrila",
    price: "from $110 per person",
    reviews: 67,
    image: "/images/skardu.webp",
  },
  {
    title: "Kumrat: pines, streams & Kumrat Valley days",
    price: "from $78 per person",
    reviews: 88,
    image: "/images/kumrat.jpg",
  },
  {
    title: "Kalam: Swat highlands, Ushu forest & clear rivers",
    price: "from $82 per person",
    reviews: 102,
    image: "/images/kalam.jpg",
  },
];

function DiscoverExperienceCard({ item }: { item: (typeof experiences)[0] }) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border-2 border-foreground/10 bg-card shadow-[2px_2px_0_0_rgba(0,0,0,0.05)]">
      <Link href="/trips" className="block flex flex-col flex-1 min-h-0 text-left group">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          />
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 border border-foreground/10 text-foreground/80 group-hover:text-rose-500 transition-colors">
              <Heart className="h-4 w-4" strokeWidth={1.75} />
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <span className="line-clamp-3 text-sm font-semibold leading-snug text-foreground sm:text-base group-hover:underline decoration-foreground/30 underline-offset-2">
            {item.title}
          </span>
        <div className="mt-2 flex items-center gap-1.5 text-[#0d5c3d]">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-[#34E0A1] text-[#34E0A1]" />
          ))}
          <span className="text-xs text-muted-foreground ml-0.5">({item.reviews})</span>
        </div>
        <p className="mt-auto pt-3 text-xs text-muted-foreground font-medium">{item.price}</p>
        </div>
      </Link>
    </article>
  );
}

export function DiscoverExperiencesRow() {
  return (
    <section className="border-b border-border/60 bg-muted/30 py-10 md:py-16">
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <h2 className="font-redob text-2xl tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
            Explore experiences in the high valleys
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
            Hunza, Skardu, Kumrat, Kalam—sample day styles you can extend into a week.
          </p>
          <Link
            href="/trips"
            className="mt-4 inline-flex items-center gap-0.5 text-sm font-medium text-foreground underline decoration-foreground/25 underline-offset-4 transition hover:decoration-foreground sm:mt-5"
          >
            See all
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {experiences.map((item) => (
            <li key={item.title} className="min-w-0">
              <DiscoverExperienceCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── 3) Article / guide teaser ─── */

export function DiscoverArticleTeaser() {
  return (
    <section className="bg-background border-b border-border/60 py-8 md:py-10">
      <div className="w-full max-w-[min(100%,1760px)] mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-stretch gap-4 sm:gap-6 p-4 sm:p-5 border-2 border-foreground/10 bg-muted/25 rounded-sm">
          <div className="relative shrink-0 w-full sm:w-36 h-32 sm:h-auto sm:min-h-[120px] border border-foreground/10 overflow-hidden rounded-sm">
            <Image
              src="/images/hunza.webp"
              alt="Hunza — high valleys in Northern Pakistan"
              fill
              className="object-cover"
              sizes="144px"
            />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="font-redob text-lg sm:text-xl text-foreground leading-tight tracking-[-0.02em]">
                5 perfect days in Hunza and Skardu
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                How we sequence drives, acclimation, and rest days—so you see the KKH, passes, and villages without
                burning out.
              </p>
            </div>
            <Link
              href="/feedbacks"
              className="shrink-0 inline-flex items-center justify-center self-start sm:self-center min-h-10 px-5 text-sm font-semibold border-2 border-foreground bg-card text-foreground hover:bg-foreground hover:text-background transition-colors rounded-full"
            >
              Read now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
