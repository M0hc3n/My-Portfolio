import type { MetadataRoute } from "next";

import { blogsMeta } from "@/components/blog/router/blogs.meta";
import { encodeSlug } from "@/components/blog/router";
import { SITE_URL } from "@/lib/site";

/**
 * Generated from the blogs list so a new post can never be missing from the
 * sitemap. This replaces the old public/sitemap.xml, which was hand-written,
 * had never been updated with any post, and advertised a /blogs URL that did
 * not exist as a route.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = blogsMeta.map((blog) => ({
    url: `${SITE_URL}/blogs/${encodeURIComponent(encodeSlug(blog.slug))}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts,
  ];
}
