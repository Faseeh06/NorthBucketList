/**
 * Curated from `public/images/NorthBucketList_insta` — used on Trips + Gallery.
 */
export const instaGallery = [
  {
    src: "/images/NorthBucketList_insta/670952786_18086920208594883_4169659924015264520_n..jpg",
    alt: "North Bucket List on the road — Northern Pakistan",
  },
  {
    src: "/images/NorthBucketList_insta/671218476_18086920145594883_5626715084941354161_n..jpg",
    alt: "High valleys and team moments — @NorthBucketList",
  },
  {
    src: "/images/NorthBucketList_insta/671828067_18087146342594883_2549290888166757464_n..jpg",
    alt: "Karakoram and Swat highlands with North Bucket List",
  },
  {
    src: "/images/NorthBucketList_insta/671832889_18087146234594883_9148695822104825913_n..jpg",
    alt: "Adventure and views — North Pakistan",
  },
  {
    src: "/images/NorthBucketList_insta/672970774_18087146273594883_2758432454622951770_n..jpg",
    alt: "Field time with North Bucket List in the North",
  },
] as const;

export type InstaGalleryItem = (typeof instaGallery)[number];
