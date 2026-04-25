import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { instaGallery } from "@/lib/content/insta-gallery";

type InstaGallerySectionProps = {
  id?: string;
  /** “Full gallery” link to /gallery (Trips) */
  showViewAllLink?: boolean;
  /** Tighter heading on the dedicated gallery page */
  title?: string;
  description?: string;
};

/**
 * NorthBucketList_insta set — same brutalist card shell as Discover interest tiles.
 */
export function InstaGallerySection({
  id = "gallery",
  showViewAllLink = true,
  title = "From the field",
  description = "Moments from recent runs—pulled from our Instagram @NorthBucketList for now.",
}: InstaGallerySectionProps) {
  return (
    <section
      id={id}
      className="border-b border-border/60 bg-background py-10 md:py-16"
    >
      <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 sm:px-5 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-redob text-2xl tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{description}</p>
          </div>
          {showViewAllLink && (
            <Link
              href="/gallery"
              className="inline-flex shrink-0 items-center gap-0.5 text-sm font-medium text-foreground underline decoration-foreground/25 underline-offset-4 transition hover:decoration-foreground"
            >
              Full gallery
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
          {instaGallery.map((item) => (
            <li key={item.src}>
              <div className="group relative block aspect-[4/5] overflow-hidden rounded-sm border-2 border-foreground/12 bg-card shadow-[2px_2px_0_0_rgba(0,0,0,0.05)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-0 left-0 right-0 p-2.5 font-mono text-[10px] text-white/95 sm:text-xs">
                  @NorthBucket
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
