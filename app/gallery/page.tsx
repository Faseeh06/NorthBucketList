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
      <section className="bg-background pt-32 pb-10 md:pt-44 md:pb-14">
        <div className="mx-auto w-full max-w-[min(100%,1760px)] px-4 text-center sm:px-5 lg:px-8">
          <h1 className="font-redob text-[clamp(2.25rem,6vw,4.25rem)] leading-[0.95] tracking-[-0.03em] text-foreground">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg md:text-xl">
            A living scrapbook from the road—same set as on Trips for now, updated from our Instagram highlights.
          </p>
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
