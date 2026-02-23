import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/site-config";

const BASE_URL = "https://drmullerdentistry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/map`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: s.featured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...servicePages];
}
