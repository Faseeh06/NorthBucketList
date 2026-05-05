"use client";

import { useState, useEffect, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Discover top — large hero, four filter chips, AI-style rounded search.
 */
export function DiscoverWhereHero() {
  const [q, setQ] = useState("");
  const [dates, setDates] = useState("");
  const [budget, setBudget] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAsk(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!q.trim()) return;

    setLoading(true);
    setError("");
    setAnswer("");
    try {
      const composedQuery = [
        `What to ask: ${q}`,
        dates ? `Dates: ${dates}` : "",
        budget ? `Budget: ${budget}` : "",
      ]
        .filter(Boolean)
        .join(" | ");

      const res = await fetch("/api/ai/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: composedQuery }),
      });
      const data = (await res.json()) as { answer?: string; error?: string };
      if (!res.ok || !data.answer) {
        throw new Error(data.error || "Could not generate a route suggestion.");
      }
      setAnswer(data.answer);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not generate a route suggestion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full bg-background font-sans">
      <div className="w-full pb-16 pt-0 sm:pb-20 md:pb-24">
        <div className="w-full">
          <div className="relative overflow-hidden" style={{ clipPath: "ellipse(120% 100% at 50% 0%)" }}>
            <div className="relative h-[72vh] min-h-[420px] max-h-[860px]">
              <Image
                src="/images/passu.jpg"
                alt="Passu landscape"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 80vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/35" aria-hidden />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <h1 className="font-redob text-[clamp(2rem,5.5vw,4.5rem)] uppercase leading-[0.9] tracking-[-0.03em]">
                  Where in the north
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
                  Ask by plan type, dates, and budget to get a practical route suggestion.
                </p>
              </div>
            </div>
          </div>

          <form
            className="relative z-20 mx-auto -mt-9 w-[min(100%-2rem,1120px)] rounded-full border border-foreground/10 bg-card p-2 shadow-[0_14px_38px_-18px_rgba(0,0,0,0.35)] sm:-mt-11 sm:w-[min(100%-2.5rem,1120px)] sm:p-2.5"
            onSubmit={handleAsk}
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_auto]">
              <label className="flex min-h-12 items-center gap-2 rounded-full px-4">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.75} />
                <input
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="What to ask"
                  className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none sm:text-base"
                />
              </label>
              <label className="flex min-h-12 items-center rounded-full px-4">
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="Dates calendar"
                  className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none sm:text-base"
                />
              </label>
              <label className="flex min-h-12 items-center rounded-full px-4">
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Budget"
                  className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none sm:text-base"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
              >
                {loading ? "Asking..." : "Ask AI"}
              </button>
            </div>
          </form>

          {(answer || error) && (
            <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-foreground/10 bg-card p-4 text-left sm:p-5">
              {answer && <p className="text-sm leading-relaxed text-foreground sm:text-base">{answer}</p>}
              {error && <p className="text-sm leading-relaxed text-destructive sm:text-base">{error}</p>}
            </div>
          )}
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

          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:min-h-[min(100%,420px)] lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-10">
            <div className="order-1 flex min-h-0 min-w-0 w-full justify-center lg:justify-start">
              <div className="relative z-0 h-[260px] w-full max-w-md overflow-hidden rounded-2xl bg-muted/30 sm:h-[320px] md:h-[360px] lg:h-[400px] lg:max-w-none">
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
