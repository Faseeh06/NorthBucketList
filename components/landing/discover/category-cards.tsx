import Image from "next/image";
import Link from "next/link";

const items: {
  title: string;
  year: string;
  image: string;
  objectPosition: string;
}[] = [
  { title: "Hunza & high valleys", year: "2025", image: "/images/hunza.webp", objectPosition: "50% 45%" },
  { title: "Skardu & Baltistan", year: "2025", image: "/images/skardu.webp", objectPosition: "50% 48%" },
  { title: "Kumrat", year: "2026", image: "/images/kumrat.jpg", objectPosition: "50% 45%" },
  { title: "Kalam", year: "2025", image: "/images/kalam.jpg", objectPosition: "50% 45%" },
];

/**
 * Stacked, full-width brutalist cards (bottom-left label, top-right year badge).
 */
export function DiscoverCategoryCards() {
  return (
    <section className="bg-background pb-12 md:pb-16">
      <div className="w-full max-w-[min(100%,960px)] mx-auto px-4 sm:px-5 lg:px-8">
        <h2 className="font-redob text-xl sm:text-2xl text-foreground text-left mb-4 md:mb-6 tracking-[-0.02em]">
          Browse the north
        </h2>
        <ul className="flex flex-col gap-2.5 md:gap-3">
          {items.map((c) => (
            <li key={c.title}>
              <Link
                href="/trips"
                className="group relative block w-full h-44 sm:h-52 md:h-56 overflow-hidden border-2 border-foreground/12 bg-card shadow-[3px_3px_0_0_rgba(0,0,0,0.05)] transition-all hover:-translate-y-px hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.07)]"
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition: c.objectPosition }}
                  sizes="(min-width: 768px) 48rem, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                <span
                  className="absolute top-3 right-3 z-10 text-[10px] sm:text-xs font-mono font-bold tracking-wide px-2 py-1 border border-black/20 bg-[#E8FF2E] text-black"
                >
                  {c.year}
                </span>
                <p className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
                  <span className="font-redob text-2xl sm:text-3xl md:text-4xl text-white leading-none tracking-[-0.02em] drop-shadow-sm">
                    {c.title}
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
