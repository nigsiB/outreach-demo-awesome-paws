import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://example.com";

const paths = ["", "/prices", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
