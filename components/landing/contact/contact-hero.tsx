import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function ContactHero() {
  return (
    <section className="w-full bg-background font-sans">
      <div className="mx-auto flex w-full max-w-[min(100%,1760px)] px-4 pb-16 pt-28 sm:px-5 sm:pb-20 sm:pt-32 md:pb-24 md:pt-36 lg:px-8">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground sm:mb-5 sm:text-xs">
              NorthBucket List
            </p>
            <h1
              className="font-redob uppercase leading-[0.9] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(3.2rem,9vw,7.2rem)" }}
            >
              Contact Us
            </h1>
          </div>
          <div className="flex max-w-md flex-col gap-5 sm:flex-row sm:items-end lg:max-w-lg lg:flex-col lg:items-end">
            <p className="text-left font-sans text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl lg:text-right">
              Share your season, group size, and the valleys you have in mind—we reply within one
              business day.
            </p>
            <Link
              href="#connect"
              className="inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground sm:self-end"
            >
              <span>Scroll to form</span>
              <ChevronDown className="h-4 w-4 animate-bounce" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
