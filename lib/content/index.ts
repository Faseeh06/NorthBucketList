/**
 * Central export for marketing copy. Prefer importing from
 * `lib/content/site`, `lib/content/home/intro`, etc. for tree-shaking clarity.
 */
export { site, routes, type AppRoute } from "./site";
export { landingIntro } from "./home/intro";
export { featuredTripsContent, type FeaturedTripEntry } from "./home/featured-trips";
export { aboutUsContent } from "./home/about-us";
export { aboutContent } from "./about";
export { instaGallery, type InstaGalleryItem } from "./insta-gallery";
export { tripsPageHero } from "./trips-page";
export {
  tripsCatalog,
  getTripBySlug,
  getAllTripSlugs,
  getTripsByKind,
  type TripEntry,
  type TripKind,
  type TripStop,
} from "./trips-catalog";
