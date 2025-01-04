import { Blog } from "./interfaces";

import Penguins from "@/components/blog/content/penguins.mdx";

export const blogs: Blog[] = [
  {
    title: "Collaborate as a Penguin!",
    slug: "What Can the Penguins of Madagascar Teach us About Team Collaboration ?",
    description: "This is a blog post about how to create a blog with Next.js",
    date: "Dec 21, 2024",
    content: <Penguins />,
  },
];
