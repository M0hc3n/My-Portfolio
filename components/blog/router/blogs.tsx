import { Blog } from "./interfaces";

import Penguins from "@/components/blog/content/penguins.mdx";

export const blogs: Blog[] = [
  {
    title: "Collaborate as a Penguin!",
    slug: "What Can the Penguins of Madagascar Teach us About Team Collaboration ?",
    description:
      "During my childhood, I remember enjoying Penguins of Madagascar. Besides finding it funny to watch at that time, I remember also being fascinated by Kowalski, the brain logic of the team, and the mastermind behind their crazy, yet creative plans.",
    date: "Dec 21, 2024",
    content: <Penguins />,
    image: "/images/blogs/peng/penguins.jpg",
  },
];
