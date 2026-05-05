"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "3000+", label: "travelers" },
  { value: "10+", label: "years" },
  { value: "15+", label: "trips" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden text-white pt-24 pb-12 md:pt-28 md:pb-16">
      {/* Full-bleed Passu — image stays vivid; no white wash */}
      <div className="absolute inset-0 z-0 min-h-full">
        <Image
          src="/images/passu.jpg"
          alt="Passu, Hunza — Karakoram"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Contrast: dark scrim on the left only (where type sits) — right side = clear sky & peaks */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 from-[-5%] via-black/25 via-[45%] to-transparent to-[85%] sm:via-[50%] sm:to-[90%]"
          aria-hidden
        />
        {/* Soft bottom lift so stats row reads without a solid white block */}
        <div
          className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/50 via-black/10 to-transparent"
          aria-hidden
        />
        {/* Top: slight dim for legible nav over bright sky */}
        <div
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/35 to-transparent"
          aria-hidden
        />
      </div>

      <div
        className={`relative z-10 w-full max-w-[min(100%,1760px)] mx-auto px-4 sm:px-5 lg:px-7 flex flex-1 flex-col justify-center min-h-[48vh]`}
      >
        <div
          className={`max-w-[min(100%,52rem)] flex flex-col justify-center min-w-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/70 mb-6 sm:mb-8">
            Northern Pakistan — curated trips
          </p>
          <h1
            className="font-redob uppercase tracking-[-0.02em] leading-[0.88] text-white select-none [text-shadow:0_2px_40px_rgba(0,0,0,0.35),0_1px_3px_rgba(0,0,0,0.5)]"
            style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)" }}
          >
            <span className="block">North</span>
            <span className="block">Bucket</span>
            <span className="block whitespace-nowrap">
              List
              <span
                className="ml-0.5 align-super text-[0.45em] font-sans font-black leading-none text-[#F97316] [text-shadow:0_0_20px_rgba(0,0,0,0.4)] sm:ml-1.5"
                aria-hidden
              >
                *
              </span>
            </span>
          </h1>
        </div>
      </div>

      {/* Stats — glass strip, not white card */}
      <div
        className={`relative z-10 mt-auto pt-6 lg:pt-8 max-w-[min(100%,1760px)] mx-auto w-full px-4 sm:px-5 lg:px-7 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-6 sm:gap-10 border-t border-white/15 pt-6 sm:pt-8">
          <div className="flex flex-wrap gap-8 sm:gap-14 lg:gap-20">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <span className="block font-sans text-2xl sm:text-3xl font-bold tabular-nums text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.3)]">
                  {s.value}
                </span>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/50">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-white/55 max-w-xs text-left sm:text-right font-mono">
            Karakoram · Hindukush · Himalaya
          </p>
        </div>
      </div>
    </section>
  );
}
