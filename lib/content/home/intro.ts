/**
 * Home — post-hero intro (WHAT WE DO + columns + CTA + gallery).
 */
export const landingIntro = {
  metaLabel: "What we do",
  headline: `Rooted across the North of Pakistan, from the Karakoram to the Hindu Kush, we design journeys that follow real roads, real stays, and real time in each valley. No packaged versions, just the North as it unfolds—raw, connected, and alive.`,
  cta: { href: "/contact" as const, label: "Get in touch" },
  columns: [
    {
      title: "On the road",
      body:
        "We carefully connect stays, trusted drivers, and valley experiences\nso you can explore Hunza, Skardu, and the Karakoram Highway\nas they truly are: raw, real, and unforgettable.",
    },
    {
      title: "How we plan",
      body:
        "Rather than offering rigid packages, we refine your wishlist into a grounded, actionable journey tailored to the season.\nFrom the viability of specific passes to curated overnight stays, we anticipate the nuances of changing conditions so you can commit with absolute confidence.",
    },
    {
      title: "Let's build your north together",
      body:
        "Whether it's your first time or you've already been before, we'll plan something that fits you, your pace, your people,\nand the kind of experience you want to have.\nJust reach out and we'll take it from there.",
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
