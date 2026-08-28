import type { Metadata } from "next";

import BlogsPageContent from "./BlogsPageContent";

// Kept as a server component purely so the route can export metadata; the
// interactive part lives in BlogsPageContent. /blogs was listed in the sitemap
// but had no route behind it, so it returned 404 to anything that followed it.
export const metadata: Metadata = {
  title: "Blog | Mohcen Taher Chouireb",
  description:
    "Writing on software engineering, AI and the things I am reading about.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return <BlogsPageContent />;
}
