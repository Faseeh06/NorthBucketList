import type { MetadataRoute } from "next";
import { site } from "@/lib/content/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
