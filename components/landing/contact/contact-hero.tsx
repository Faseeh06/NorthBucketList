import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

/**
 * Contact hero: dark photo scrim (no paper-colored wash) so white type stays legible
 * and matches other route heroes.
 */
export function ContactHero() {
  return (
    <section className="relative flex min-h-[min(88vh,820px)] w-full flex-col">
      <div className="absolute inset-0">
        <Image
          src="/images/passu.jpg"
          alt="Karakoram peaks and the highway in Northern Pakistan"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto mt-28 flex w-full max-w-[min(100%,1760px)] flex-1 flex-col justify-end px-4 pb-10 sm:px-5 sm:mt-32 sm:pb-12 md:pb-16 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
              NorthBucket List
            </p>
            <h1
              className="max-w-[14ch] font-sans text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.45)]"
            >
              Contact
              <br />
              <span className="font-normal text-white/80">us</span>
            </h1>
          </div>
          <div className="flex max-w-md flex-col gap-5 sm:flex-row sm:items-end lg:max-w-sm lg:flex-col lg:items-end">
            <p className="text-left text-base font-sans leading-relaxed text-white/90 sm:text-lg lg:text-right">
              Share your season, group size, and the valleys you have in mind—we reply within one
              business day.
            </p>
            <Link
              href="#connect"
              className="inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white sm:self-end"
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
