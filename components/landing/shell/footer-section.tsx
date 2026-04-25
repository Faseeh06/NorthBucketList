"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content/site";
import { BRAND_ACCENT_HEX } from "@/lib/constants/brand";

const navLinks: { n: string; name: string; href: string }[] = [
  { n: "01", name: "Discover", href: "/discover" },
  { n: "02", name: "Feedbacks", href: "/feedbacks" },
  { n: "03", name: "Trips", href: "/trips" },
  { n: "04", name: "Contact", href: "/contact" },
  { n: "05", name: "Home", href: "/" },
];

export function FooterSection() {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground">
      <div className="w-full px-4 pt-12 pb-5 sm:px-6 sm:pt-14 sm:pb-6 md:px-8 md:pt-16 md:pb-7 lg:px-12 lg:pt-20 lg:pb-8 xl:px-16 xl:pt-20">
        {/* Top: contact + nav + badge — full width, larger type */}
        <div className="grid w-full grid-cols-1 gap-10 border-b border-foreground/10 pb-12 lg:grid-cols-12 lg:gap-10 lg:gap-y-10 lg:pb-16">
          <div className="flex w-full max-w-xl flex-col gap-5 lg:col-span-4">
            <h3 className="font-redob text-2xl uppercase leading-tight tracking-[-0.02em] text-foreground sm:text-3xl">
              Stay in the loop
              <span
                className="align-super text-[0.55em] text-muted-foreground"
                aria-label=" registered trademark"
              >
                ®
              </span>
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="font-sans text-2xl font-semibold tracking-[-0.03em] text-foreground underline decoration-foreground/20 underline-offset-[0.2em] transition-colors hover:decoration-foreground/50 sm:text-3xl md:text-4xl"
            >
              {site.email}
            </a>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Route drops, season notes for Hunza & Skardu, and reply within one business day.
            </p>
            <Button
              asChild
              className="mt-1 h-14 w-fit rounded-full border border-foreground/10 bg-card pl-2 pr-8 text-foreground shadow-none transition-colors hover:bg-foreground/[0.04] sm:mt-2"
            >
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-primary-foreground"
                  style={{ backgroundColor: BRAND_ACCENT_HEX }}
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <span className="text-base font-medium sm:text-lg">Contact now</span>
              </a>
            </Button>
          </div>

          <nav
            className="flex w-full flex-col gap-0 lg:col-span-5 lg:max-w-none lg:pt-2"
            aria-label="Footer navigation"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href + item.n}
                href={item.href}
                className="group flex w-full items-center justify-between gap-4 border-b border-foreground/10 py-5 text-foreground/85 transition-colors first:pt-0 hover:text-foreground sm:py-6"
              >
                <span className="text-base sm:text-lg md:text-xl">
                  <span className="font-mono text-sm tabular-nums text-muted-foreground sm:text-base">{item.n}</span>
                  <span className="mx-2.5 text-muted-foreground/50 sm:mx-3">/</span>
                  <span className="font-sans font-medium tracking-tight">{item.name}</span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 sm:h-5 sm:w-5"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
            <div className="flex items-center gap-2.5 pt-4">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_ACCENT_HEX }} aria-hidden />
              <a
                href="/#top"
                className="text-sm font-mono text-muted-foreground transition-colors hover:text-foreground sm:text-base"
              >
                Back to top
              </a>
            </div>
          </nav>

          <div className="flex w-full flex-col items-start justify-start gap-3 lg:col-span-3 lg:items-end lg:pt-2">
            <div className="inline-flex max-w-full items-baseline gap-2.5 rounded-2xl border border-foreground/10 bg-card px-4 py-3 text-foreground/90 sm:px-5 sm:py-3.5">
              <span className="font-redob text-base uppercase leading-none tracking-[-0.02em] sm:text-lg">Karakoram</span>
              <span className="text-muted-foreground/50">|</span>
              <span className="text-sm font-mono uppercase tracking-[0.12em] text-muted-foreground sm:text-base">
                curated travel
              </span>
            </div>
          </div>
        </div>

        {/* Logo (left) + wordmark (right) */}
        <div className="w-full pt-8 pb-5 sm:pt-10 sm:pb-6 md:pt-12 md:pb-7 lg:pt-14 lg:pb-8">
          <div className="flex w-full min-w-0 flex-col items-start gap-4 sm:gap-5 md:flex-row md:items-end md:justify-start md:gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="block h-24 w-auto max-w-[55vw] shrink-0 sm:h-32 sm:max-w-[min(50vw,20rem)] md:h-40 md:max-w-[24rem] lg:h-48 lg:max-w-[28rem] xl:h-56"
              aria-label="NorthBucket List home"
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={800}
                height={320}
                className="h-full w-auto max-h-full object-contain object-left"
                sizes="(min-width: 1280px) 400px, (min-width: 768px) 320px, 45vw"
                priority={false}
              />
            </Link>
            <div className="min-w-0 shrink-0">
              <h2
                className="font-redob uppercase leading-[0.92] tracking-[-0.02em] text-foreground"
                style={{ fontSize: "clamp(3.75rem, 10vw, 8.0rem)" }}
              >
                <span className="block">North Bucket</span>
                <span className="mt-0.5 block sm:mt-1">
                  List
                  <span
                    className="ml-0.5 align-super text-[0.3em] sm:ml-1"
                    style={{ color: BRAND_ACCENT_HEX }}
                    aria-hidden
                  >
                    *
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-0 flex w-full flex-col gap-1.5 py-2 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-2.5 sm:text-xs">
          <p className="max-w-4xl">Copyright © NorthBucket List {new Date().getFullYear()}. All rights reserved.</p>
          <a
            href="/#top"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            Top
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
