"use client"
import { NextUIProvider } from "@nextui-org/react";

import MultiLayerParallax from "@/components/MultiLayerParallax";
import AboutMe from "@/components/AboutMe/AboutMe.index";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <MultiLayerParallax />
        <AboutMe />
      </main>
    </NextUIProvider>
  );
}
