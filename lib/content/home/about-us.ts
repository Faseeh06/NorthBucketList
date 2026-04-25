/**
 * Home — “1.2 About us” (who we are, youth & growth, @NorthBucketList shots).
 */
export const aboutUsContent = {
  sectionId: "about" as const,
  label: "1.2 About us",
  title: { line1: "About", line2: "us." },
  paragraphs: [
    "North Bucket List is more than just a travel company. We create transformative experiences for young people by combining travel, adventure, and personal growth.",
    "We are rooted in Gilgit-Baltistan and the high north, but our focus is the people in the group: how you show up when the pass is long, how the team carries each other when plans change, and what you take home that is not only photos.",
    "On the road, that means honest season and weather windows, vetted drivers and hosts, and itineraries with room to breathe—so the mountain days feel earned, not rushed from one gate to the next.",
  ] as const,
  onEveryTrip:
    "From hiking expeditions to team-based challenges, every trip is designed to help you grow, connect, and discover your potential.",
  card: {
    kicker: "On every trip",
  },
  pillars: ["Grow", "Connect", "Discover"] as const,
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
