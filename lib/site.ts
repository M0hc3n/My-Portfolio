/**
 * Canonical origin for the site, with no trailing slash.
 *
 * Used for metadataBase, the sitemap and robots routes, and the JSON-LD block,
 * so those cannot drift apart. Next resolves relative OG/twitter image paths
 * against metadataBase; without it they resolve against the deployment URL,
 * which differs for every preview deploy.
 */
export const SITE_URL = "https://m0hc3n.vercel.app";
