/**
 * Home — post-hero intro (editorial block + CTA + two columns + gallery).
 */
export const landingIntro = {
  metaLabel: "Hey—just an intro",
  headline: `A trip desk rooted in the Karakoram and Hindu Kush, obsessed with real road days—not brochure fantasy. We stitch together stays, drivers, and valley time so you see Hunza, Skardu, and the KKH the way they actually are.`,
  cta: { href: "/contact" as const, label: "Get in touch" },
  columns: [
    {
      title: "How we work in the highlands",
      body: `We turn your season and wish-list into a grounded itinerary: which passes are realistic, where to overnight, and what to do when weather shifts. You get clarity before you commit—not a one-size-fits-all package.`,
    },
    {
      title: "Let's build your north together",
      body: `Whether it's a first Hunza run or a long Skardu loop, we'll align on pace, group size, and the stories you want to bring home. Reach out—we reply within one business day.`,
    },
  ] as const,
  /** Three images from the NorthBucketList Instagram set (`public/images/NorthBucketList_insta/`) */
  gallery: [
    {
      src: "/images/NorthBucketList_insta/670952786_18086920208594883_4169659924015264520_n..jpg",
      alt: "Hunza and Karakoram — from NorthBucket on Instagram",
    },
    {
      src: "/images/NorthBucketList_insta/671218476_18086920145594883_5626715084941354161_n..jpg",
      alt: "Northern Pakistan on the road — from NorthBucket on Instagram",
    },
    {
      src: "/images/NorthBucketList_insta/671828067_18087146342594883_2549290888166757464_n..jpg",
      alt: "Valley views and highland travel — from NorthBucket on Instagram",
    },
  ] as const,
};
