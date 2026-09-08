import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { AUDIENCE_PAGES } from "@/lib/audiences";

// Indexable pages only. /privacy and /terms are noindex and stay out.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    { path: "", priority: 1 },
    { path: "/how-it-works", priority: 0.9 },
    { path: "/what-is-an-agent", priority: 0.8 },
    { path: "/faq", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    ...AUDIENCE_PAGES.map((a) => ({ path: `/${a.slug}`, priority: 0.8 })),
  ];

  return paths.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
