import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohcen Taher Chouireb",
  description: "Mohcen Taher Chouireb's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Mohcen Taher Chouireb</title>
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
