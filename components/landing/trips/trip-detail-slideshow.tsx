"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DEFAULT_MS = 4500;

type Slide = { src: string; alt: string };

type TripDetailSlideshowProps = {
  slides: readonly Slide[];
  intervalMs?: number;
  className?: string;
  /** `hero` = full-bleed behind trip title; `inline` = bordered card (legacy). */
  variant?: "hero" | "inline";
};

export function TripDetailSlideshow({
  slides,
  intervalMs = DEFAULT_MS,
  className,
  variant = "inline",
}: TripDetailSlideshowProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  if (count === 0) return null;

  const isHero = variant === "hero";

  /** Horizontal slide: track width N× viewport; translate by −index × (100/N)% of track. */
  const slideTrack = (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-[850ms] ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none"
        style={{
          width: `${count * 100}%`,
          transform: `translateX(-${(index * 100) / count}%)`,
        }}
      >
        {slides.map((s, i) => (
          <div
            key={s.src}
            className="relative h-full shrink-0 overflow-hidden"
            style={{ width: `${100 / count}%` }}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (isHero) {
    return (
      <div className={cn("absolute inset-0 z-0", className)}>
        <div className="absolute inset-0">{slideTrack}</div>
        {count > 1 && (
          <div
            className="absolute bottom-52 left-1/2 z-[5] flex -translate-x-1/2 gap-2 sm:bottom-56 md:bottom-60"
            aria-hidden
          >
            {slides.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors shadow-sm",
                  i === index ? "bg-white" : "bg-white/40",
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 border-foreground/10 bg-muted shadow-sm",
        className,
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6] md:min-h-[min(100%,520px)] md:aspect-auto md:h-[min(72vh,560px)]">
        {slideTrack}
      </div>
      {count > 1 && (
        <div
          className="pointer-events-none absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5"
          aria-hidden
        >
          {slides.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i === index ? "bg-white" : "bg-white/45",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
