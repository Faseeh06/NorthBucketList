import Image from "next/image";
import { BRAND_ACCENT_HEX } from "@/lib/constants/brand";

/**
 * Inset wordmark banner before the global footer (contact page) — full-bleed image card,
 * not edge-to-edge; extra vertical size and page padding.
 */
export function ContactWordmarkStrip() {
  return (
    <section className="w-full bg-background py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[min(100%,1520px)] px-3 sm:px-4 md:px-5 lg:px-6">
        <div
          className="relative flex min-h-[min(50vh,440px)] w-full items-center justify-center overflow-hidden rounded-2xl border border-foreground/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.28)] sm:min-h-[min(52vh,500px)] sm:rounded-3xl md:min-h-[min(55vh,540px)]"
        >
          <Image
            src="/images/hunza.webp"
            alt="Hunza high valleys and peaks"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1520px) 1480px, (min-width: 1024px) 90vw, 94vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55"
            aria-hidden
          />
          <p
            className="relative z-10 max-w-5xl px-5 text-center font-redob uppercase leading-[0.88] tracking-[-0.02em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.45),0_1px_3px_rgba(0,0,0,0.5)] sm:px-8 md:px-10"
            style={{ fontSize: "clamp(2.25rem,7vw,5.25rem)" }}
          >
            <span className="block sm:inline">North</span>{" "}
            <span className="block sm:inline">Bucket</span>{" "}
            <span className="inline-block whitespace-nowrap">
              List
              <span
                className="ml-0.5 align-super text-[0.4em] sm:ml-1"
                style={{ color: BRAND_ACCENT_HEX }}
                aria-hidden
              >
                *
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
