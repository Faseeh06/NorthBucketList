"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Mountain, Car, Compass, Sparkles, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All", icon: Search },
  { id: "valleys", label: "Valleys", icon: Mountain },
  { id: "road", label: "Road trips", icon: Car },
  { id: "treks", label: "Treks", icon: Compass },
] as const;

/**
 * Discover top — large hero, four filter chips, AI-style rounded search.
 */
export function DiscoverWhereHero() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState("all");

  return (
    <section className="bg-background pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 text-center sm:px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 font-redob text-[clamp(2.25rem,6vw,4.25rem)] leading-[0.95] tracking-[-0.03em] text-foreground">
            Where in the north?
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-lg md:text-xl">
            Search valleys, base towns, or a trip style—we&apos;ll match routes, stays, and season windows.
          </p>

          <div className="mx-auto mb-10 grid w-full max-w-3xl grid-cols-2 gap-2.5 sm:mb-12 sm:grid-cols-4 sm:gap-3">
            {filters.map((f) => {
              const Icon = f.icon;
              const on = active === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActive(f.id)}
                  className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 px-2 py-2.5 text-sm font-medium transition-all sm:min-h-14 sm:px-4 sm:py-3.5 sm:text-base ${
                    on
                      ? "border-foreground bg-foreground text-background shadow-md"
                      : "border-border/80 bg-card text-foreground/90 shadow-sm hover:border-foreground/25 hover:shadow"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <p className="mb-2 flex items-center justify-center gap-1.5 text-xs font-mono text-muted-foreground sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            <span>AI-assisted route matching</span>
          </p>
          <form
            className="group relative mx-auto w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div
              className="flex min-h-14 w-full items-center overflow-hidden rounded-full border-2 border-foreground/10 bg-gradient-to-b from-card to-muted/30 px-1 py-1 pl-2 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] transition-all focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/15 sm:min-h-16 sm:pl-3"
            >
              <div className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-10 sm:w-10">
                <Search className="h-4 w-4 text-primary sm:h-5 sm:w-5" strokeWidth={1.75} />
              </div>
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Try: “Hunza in cherry blossom” or “quiet Skardu week, family of four”…"
                className="min-w-0 flex-1 border-0 bg-transparent py-3 pr-2 text-left text-sm text-foreground placeholder:text-muted-foreground/80 outline-none sm:py-3.5 sm:pr-3 sm:text-base"
              />
              <Link
                href="/trips"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground/90 sm:px-6 sm:py-3 sm:text-base"
              >
                <Sparkles className="h-3.5 w-3.5 opacity-80 sm:h-4 sm:w-4" />
                <span>Ask</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const PROMO_SLIDES = [
  { src: "/images/passu.jpg", alt: "Passu and Karakoram peaks" },
  { src: "/images/hunza.webp", alt: "Hunza high valleys" },
  { src: "/images/skardu.webp", alt: "Skardu and Baltistan" },
  { src: "/images/kumrat.jpg", alt: "Kumrat forest and streams" },
] as const;

const SLIDESHOW_MS = 1500;

type PromoBannerProps = {
  /** Override slides; defaults to `PROMO_SLIDES` */
  slides?: readonly { src: string; alt: string }[];
  /** Autoplay interval in ms (default 1500) */
  intervalMs?: number;
};

/**
 * Two-column strip: theme colors + Redob title, inset rounded slideshow.
 * Slides use stacked absolute images (reliable with `next/image` + fill).
 */
export function DiscoverPromoBanner({ slides = PROMO_SLIDES, intervalMs = SLIDESHOW_MS }: PromoBannerProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (count <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs, paused]);

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-foreground/12 bg-card p-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.06)] sm:p-4 md:p-5">
          {count > 1 && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="absolute bottom-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-sm transition hover:bg-background"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          )}

          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:min-h-[min(100%,420px)] lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-14">
            {/* On desktop, image is aligned into the center gutter (not hugging the card’s left padding) */}
            <div className="order-1 flex min-h-0 min-w-0 w-full justify-center lg:justify-end">
              <div className="relative z-0 h-[260px] w-full max-w-md overflow-hidden rounded-2xl bg-muted/30 sm:h-[300px] md:h-[340px] lg:h-[360px] lg:max-w-[min(100%,22rem)] xl:max-w-sm">
                {slides.map((s, i) => (
                  <div
                    key={s.src}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500 ease-out",
                      i === index ? "z-10 opacity-100" : "z-0 opacity-0"
                    )}
                    aria-hidden={i !== index}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      priority={i === 0}
                    />
                  </div>
                ))}
                <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 rounded-full bg-black/55 px-2.5 py-0.5 font-mono text-[10px] text-white shadow-sm sm:text-xs">
                  @NorthBucket
                </div>
                {count > 1 && (
                  <div
                    className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 flex gap-1.5"
                    aria-hidden
                  >
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-colors",
                          i === index ? "bg-white" : "bg-white/50"
                        )}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="order-2 flex w-full min-w-0 flex-col justify-center px-1 py-1 sm:px-2 md:px-0">
              <h2 className="max-w-lg font-redob text-2xl uppercase leading-[1.05] tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
                Trips and views for the way you travel
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Curated Hunza, Skardu, and high-road days—book with a team rooted in Gilgit-Baltistan and
                Khyber Pakhtunkhwa.
              </p>
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/trips"
                  className="inline-flex min-h-10 items-center justify-center border-2 border-foreground bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  Explore trips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
