import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Replaces the old hand-written public/sitemap.xml, which advertised a /blogs
 * URL that had no route behind it and returned 404 to anything that followed
 * it.
 *
 * The blog is intentionally unpublished: there is no /blogs index, and posts
 * are not listed here, so nothing advertises them. The post routes still
 * resolve by direct URL. If the blog is published later, map over the posts
 * list to add their URLs -- note that importing blogs.tsx here pulls in MDX
 * content and the client components it renders, which fails outside a React
 * runtime, so the slugs would need to come from a JSX-free module.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
