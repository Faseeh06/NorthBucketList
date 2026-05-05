/**
 * Global site copy and URL helpers — import from here instead of hardcoding in components.
 */
export const site = {
  name: "NorthBucket List",
  shortName: "NorthBucket",
  email: "hello@northbucketlist.com",
  siteUrl: "https://northbucketlist.com",
  locale: "en_PK",
} as const;

export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  discover: "/discover",
  /** @deprecated use `about` — `/feedbacks` redirects to `/about` */
  feedbacks: "/about",
  trips: "/trips",
  gallery: "/gallery",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
