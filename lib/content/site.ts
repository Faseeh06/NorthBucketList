/**
 * Global site copy and URL helpers — import from here instead of hardcoding in components.
 */
export const site = {
  name: "NorthBucket List",
  shortName: "NorthBucket",
  email: "hello@northbucketlist.com",
} as const;

export const routes = {
  home: "/",
  contact: "/contact",
  discover: "/discover",
  feedbacks: "/feedbacks",
  trips: "/trips",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
