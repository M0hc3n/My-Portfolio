import * as NextMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = NextMdx.default({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
