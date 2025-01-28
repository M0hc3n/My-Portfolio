export const compareblogSlugs = (rightSlug: string, givenSlug: string) => {
  return rightSlug === encodeSlug(givenSlug);
};

export const encodeSlug = (slug: string) => {
  return slug.toLocaleLowerCase().split(" ").join("-");
};
