import { Blog } from "./interfaces";
import { blogsMeta } from "./blogs.meta";

import Penguins from "@/components/blog/content/penguins.mdx";

/** Rendered body for each post, keyed by slug. Metadata lives in blogs.meta. */
const contentBySlug: Record<string, React.ReactNode> = {
  "What Can the Penguins of Madagascar Teach us About Team Collaboration ?": (
    <Penguins />
  ),
};

export const blogs: Blog[] = blogsMeta.map((meta) => ({
  ...meta,
  content: contentBySlug[meta.slug],
}));
