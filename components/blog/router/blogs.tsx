import { Blog } from "./interfaces";

import Penguins from "@/components/blog/content/penguins.mdx";

export const blogs: Blog[] = [
  {
    title: "Attention is All You Need",
    slug: "Is Attention really what you need or is it what you barely do ?",
    description: "This is a blog post about how to create a blog with Next.js",
    date: "Dec 21, 2024",
    content: <Penguins />,
  },
];
