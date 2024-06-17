import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

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
        {children}

        <Analytics />
      </body>
    </html>
  );
}
