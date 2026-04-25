"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Mountain, Car, Compass, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All", icon: Search },
  { id: "short", label: "Weekend", icon: Mountain },
  { id: "week", label: "Week +", icon: Car },
  { id: "custom", label: "Custom", icon: Compass },
] as const;

/**
 * Trips planner strip — same layout as Discover (`DiscoverWhereHero`) with packages-focused copy.
 * When `afterPageHero` is set (full-bleed `PageHero` above), use tighter top padding.
 */
export function TripsWhereHero({ afterPageHero = false }: { afterPageHero?: boolean }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState("all");

  return (
    <section
      className={cn(
        "bg-background pb-20 md:pb-28",
        afterPageHero ? "pt-16 md:pt-20" : "pt-32 md:pt-44",
      )}
    >
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 text-center sm:px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 font-redob text-[clamp(2.25rem,6vw,4.25rem)] leading-[0.95] tracking-[-0.03em] text-foreground">
            Trips & packages
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-lg md:text-xl">
            Pick a run length, see how we build logistics and pacing, then lock a package in PKR with clear
            inclusions.
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
                  className={cn(
                    "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 px-2 py-2.5 text-sm font-medium transition-all sm:min-h-14 sm:px-4 sm:py-3.5 sm:text-base",
                    on
                      ? "border-foreground bg-foreground text-background shadow-md"
                      : "border-border/80 bg-card text-foreground/90 shadow-sm hover:border-foreground/25 hover:shadow",
                  )}
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
            <span>Itinerary-first matching</span>
          </p>
          <form className="group relative mx-auto w-full" onSubmit={(e) => e.preventDefault()}>
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
                placeholder="Try: “7 nights Hunza, family of four, June” or “Skardu, slow pace, acclimation”…"
                className="min-w-0 flex-1 border-0 bg-transparent py-3 pr-2 text-left text-sm text-foreground placeholder:text-muted-foreground/80 outline-none sm:py-3.5 sm:pr-3 sm:text-base"
              />
              <Link
                href="#pricing"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground/90 sm:px-6 sm:py-3 sm:text-base"
              >
                <Sparkles className="h-3.5 w-3.5 opacity-80 sm:h-4 sm:w-4" />
                <span>Packages</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
