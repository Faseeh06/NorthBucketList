import type { Metadata } from "next";
import { SiteLayout } from "@/components/landing/shell/site-layout";
import { InstaGallerySection } from "@/components/landing/gallery/insta-gallery-section";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments from the road with North Bucket List—field photos from our community runs in the North.",
};

export default function GalleryPage() {
  return (
    <SiteLayout>
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
                Gallery
              </h1>
            </div>
            <p className="max-w-lg text-left font-sans text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl lg:text-right">
              A living scrapbook from the road - same set as on Trips for now, updated from our
              Instagram highlights.
            </p>
          </div>
        </div>
      </section>
      <InstaGallerySection
        id="photos"
        showViewAllLink={false}
        title="On the road"
        description="NorthBucketList_insta — recent posts, full width below."
      />
    </SiteLayout>
  );
}
