export const compareblogSlugs = (rightSlug: string, givenSlug: string) => {
  return rightSlug === givenSlug.toLocaleLowerCase().split(" ").join("-");
};
