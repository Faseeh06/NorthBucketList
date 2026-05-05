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

const FALLBACK_CHAR_IN_DISPLAY_TEXT = /[0-9]|[^A-Za-z\s]/;

function renderDisplayText(text: string) {
  return text.split("").map((char, index) =>
    FALLBACK_CHAR_IN_DISPLAY_TEXT.test(char) ? (
      <span key={`${char}-${index}`} className="font-sans font-black">
        {char}
      </span>
    ) : (
      char
    ),
  );
}

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
              <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                {eyebrow}
              </p>
              <h1
                className="font-redob uppercase tracking-[-0.02em] leading-[0.9] text-foreground [text-shadow:none]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
              >
                {titleLines.map((line, i) => (
                  <span key={`${i}-${line}`} className="block">
                    {renderDisplayText(line)}
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

  const fullTitle = titleLines.join(" ");

  return (
    <section className="w-full bg-background font-sans">
      <div className="mx-auto flex w-full max-w-[min(100%,1760px)] px-4 pb-16 pt-28 sm:px-5 sm:pb-20 sm:pt-32 md:pb-24 md:pt-36 lg:px-8">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground sm:mb-5 sm:text-xs">
              {eyebrow}
            </p>
            <h1
              className="font-redob uppercase leading-[0.9] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(3.2rem,9vw,7.2rem)" }}
            >
              {renderDisplayText(fullTitle)}
            </h1>
          </div>
          <div className="flex max-w-md flex-col gap-5 sm:flex-row sm:items-end lg:max-w-lg lg:flex-col lg:items-end">
            <p className="text-left font-sans text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl lg:text-right">
              {description}
            </p>
            {cta && (
              <Button
                className="h-11 self-start rounded-full bg-foreground px-6 font-mono text-xs text-background hover:bg-foreground/90 sm:self-end"
                asChild
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
