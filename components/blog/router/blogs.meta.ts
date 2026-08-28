/**
 * Post metadata, deliberately free of JSX.
 *
 * The sitemap route needs this list, but importing blogs.tsx there pulls in the
 * MDX content and the client components it renders, which blows up outside a
 * React runtime. Keeping the metadata in a plain module lets both the sitemap
 * and blogs.tsx read from one source.
 */
export interface BlogMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
}

export const blogsMeta: BlogMeta[] = [
  {
    title: "Collaborate as a Penguin!",
    slug: "What Can the Penguins of Madagascar Teach us About Team Collaboration ?",
    description:
      "During my childhood, I remember enjoying Penguins of Madagascar. Besides finding it funny to watch at that time, I remember also being fascinated by Kowalski, the brain logic of the team, and the mastermind behind their crazy, yet creative plans.",
    date: "Dec 21, 2024",
    image: "/images/blogs/peng/penguins.jpg",
  },
];
