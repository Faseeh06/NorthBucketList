import type { MetadataRoute } from "next";
import { getAllTripSlugs } from "@/lib/content/trips-catalog";
import { routes, site } from "@/lib/content/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [routes.home, routes.discover, routes.trips, routes.about, routes.gallery, routes.contact];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : 0.8,
  }));

  const tripEntries: MetadataRoute.Sitemap = getAllTripSlugs().map((slug) => ({
    url: `${baseUrl}/trips/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...tripEntries];
}
