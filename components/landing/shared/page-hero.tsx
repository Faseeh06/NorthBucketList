import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PageHeroImage = { src: string; alt: string };

type PageHeroBase = {
  eyebrow: string;
  /** One or more lines; each rendered as a block in Redob. */
  titleLines: [string, ...string[]];
  description: string;
  image: PageHeroImage;
  cta?: { label: string; href: string };
};

type PageHeroProps = PageHeroBase & {
  variant?: "full" | "split";
};

/**
 * Subpage hero: full-bleed (TripAdvisor-style) or split image + copy (card layout).
 * Uses `font-redob` for titles (same as home / footer wordmark).
 */
export function PageHero({ eyebrow, titleLines, description, image, cta, variant = "full" }: PageHeroProps) {
  if (variant === "split") {
    return (
      <section className="pt-20 md:pt-24 pb-10 md:pb-14">
        <div className="w-full max-w-[min(100%,1760px)] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[min(100%,520px)] overflow-hidden rounded-3xl border border-foreground/10 bg-card shadow-sm">
            <div className="relative min-h-[260px] lg:min-h-full lg:min-h-[420px] order-2 lg:order-1">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none lg:hidden" aria-hidden />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14 order-1 lg:order-2 bg-background">
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {eyebrow}
              </p>
              <h1
                className="font-redob uppercase tracking-[-0.02em] leading-[0.9] text-foreground [text-shadow:none]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
              >
                {titleLines.map((line, i) => (
                  <span key={`${i}-${line}`} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md font-sans">
                {description}
              </p>
              {cta && (
                <div className="mt-8">
                  <Button
                    className="rounded-full h-12 px-8 bg-foreground text-background hover:bg-foreground/90 font-mono text-xs"
                    asChild
                  >
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[min(100vh,640px)] md:min-h-[min(100vh,720px)] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent"
          aria-hidden
        />
        <div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/45 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 w-full max-w-[min(100%,1760px)] mx-auto px-4 sm:px-5 lg:px-8 pb-10 sm:pb-12 md:pb-16 pt-32 md:pt-36">
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/60 mb-4">
          {eyebrow}
        </p>
        <h1
          className="font-redob uppercase tracking-[-0.02em] leading-[0.9] text-white max-w-[20ch] [text-shadow:0_2px_40px_rgba(0,0,0,0.4)]"
          style={{ fontSize: "clamp(2.25rem, 7vw, 4.25rem)" }}
        >
          {titleLines.map((line, i) => (
            <span key={`${i}-${line}`} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed font-sans">
          {description}
        </p>
        {cta && (
          <div className="mt-8 sm:mt-10">
            <Button
              className="rounded-full h-12 px-8 bg-white text-black hover:bg-white/90 font-mono text-xs shadow-lg shadow-black/20"
              asChild
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
