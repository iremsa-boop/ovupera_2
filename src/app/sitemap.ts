import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { navigation, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...navigation.map((n) => n.href)].map((p) => ({ url: `${site.url}${p}` }));
  const posts = getAllPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date }));
  return [...pages, ...posts];
}
