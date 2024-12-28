"use client";
import { NextUIProvider } from "@nextui-org/react";

import Intro from "@/components/blog/dummy/intro.mdx";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Intro />
      </main>
    </NextUIProvider>
  );
}
