import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohcen Taher Chouireb | Software Engineer & AI Developer",
  description:
    "Passionate software engineer & AI developer specializing in web development, machine learning, and innovative tech solutions. View my projects, technical blogs, and expertise.",
  keywords: [
    "software engineer",
    "AI developer",
    "web development",
    "machine learning",
    "portfolio",
    "tech blogs",
  ],
  authors: [{ name: "Mohcen Taher Chouireb" }],
  creator: "Mohcen Taher Chouireb",
  openGraph: {
    title: "Mohcen Taher Chouireb | Software Engineer & AI Developer",
    description:
      "Discover cutting-edge AI projects, full-stack web applications, and technical insights from an innovative software engineer passionate about technology.",
    images: [
      {
        url: "/images/me.jpg",
        width: 1200,
        height: 630,
        alt: "Mohcen Taher Chouireb - Software Engineer & AI Developer",
      },
    ],
    type: "website",
    url: "https://m0hc3n.vercel.app/",
    siteName: "Mohcen Taher Chouireb Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohcen Taher Chouireb | Software Engineer & AI Developer",
    description:
      "Explore innovative AI projects, web development solutions, and technical insights from a passionate software engineer.",
    images: ["/images/me.jpg"],
    creator: "@m0hc3n",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://m0hc3n.vercel.app/",
  },
  verification: {
    google: "dlR2tPo3_hnzS5IOnYvIoYR0Y1T6wpmH7ZGG5Il9rlI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohcen Taher Chouireb",
    jobTitle: "Software Engineer & AI Developer",
    url: "https://m0hc3n.vercel.app/",
    image: "https://m0hc3n.vercel.app/images/me.jpg",
    sameAs: [
      "https://twitter.com/m0hc3n",
      "https://github.com/m0hc3n",
      "https://linkedin.com/in/mohcen-taher-chouireb",
    ],
    knowsAbout: [
      "Software Engineering",
      "AI Development",
      "Web Development",
      "Machine Learning",
    ],
    description:
      "Passionate software engineer & AI developer specializing in web development, machine learning, and innovative tech solutions.",
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        {process.env.GOOGLE_ANALYTICS && (
          <GoogleAnalytics ga_id={process.env.GOOGLE_ANALYTICS} />
        )}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
