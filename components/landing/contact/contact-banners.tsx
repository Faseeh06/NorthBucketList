import Image from "next/image";

/**
 * Cinematic wordmark strip before the global footer.
 */
export function ContactWordmarkStrip() {
  return (
    <section className="relative w-full h-[min(50vh,420px)] min-h-[280px]">
      <div className="absolute inset-0">
        <Image
          src="/images/isolated.jpg"
          alt="Mountain road and high landscape in Northern Pakistan"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <p className="font-sans text-4xl sm:text-5xl md:text-6xl text-white text-center tracking-[-0.04em] [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">
          NorthBucket List
          <span className="text-primary">*</span>
        </p>
      </div>
    </section>
  );
}
