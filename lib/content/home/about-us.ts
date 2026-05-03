/**
 * Home — About North Bucket List (who we are, how we work, @NorthBucketList shots).
 */
export const aboutUsContent = {
  sectionId: "about" as const,
  label: "About North Bucket List",
  title: { line1: "About", line2: "North Bucket List." },
  paragraphs: [
    "At North Bucket List, we plan trips across the north that are built around you—what you want, how you want to travel, and the kind of experience you're looking for. It's not just about putting together an itinerary. It's about creating moments you'll actually remember, the kind that turn strangers into friends and trips into something you carry with you long after it ends.",
    "From where you stay to how you get there, everything is handled properly so you don't have to stress about the details. You can just show up, take it all in, and enjoy the journey the way it's meant to be.",
    "How we work… We prioritize safe and well-planned travel with trusted drivers, local hosts, and carefully chosen seasons. Our itineraries are flexible, giving you space to truly experience the mountains without feeling rushed.",
  ] as const,
  onEveryTrip: "At North Bucket List, every trip is designed to be real, memorable, and transformative.",
  card: {
    kicker: "Our promise",
  },
  pillars: ["Real", "Memorable", "Transformative"] as const,
  /** Shots from `public/images/NorthBucketList_insta/` (Instagram). */
  instaGallery: [
    {
      src: "/images/NorthBucketList_insta/670952786_18086920208594883_4169659924015264520_n..jpg",
      alt: "North Pakistan on the road — NorthBucket List on Instagram",
    },
    {
      src: "/images/NorthBucketList_insta/671218476_18086920145594883_5626715084941354161_n..jpg",
      alt: "High valleys and travel moments — NorthBucket List on Instagram",
    },
    {
      src: "/images/NorthBucketList_insta/671828067_18087146342594883_2549290888166757464_n..jpg",
      alt: "Northern Pakistan landscape — NorthBucket List on Instagram",
    },
    {
      src: "/images/NorthBucketList_insta/671832889_18087146234594883_9148695822104825913_n..jpg",
      alt: "Skardu and road days — NorthBucket List on Instagram",
    },
    {
      src: "/images/NorthBucketList_insta/672970774_18087146273594883_2758432454622951770_n..jpg",
      alt: "Karakoram and team on the trail — NorthBucket List on Instagram",
    },
  ] as const,
} as const;
