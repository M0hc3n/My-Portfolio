"use client"
import { NextUIProvider } from "@nextui-org/react";

import MultiLayerParallax from "@/components/MultiLayerParallax";
import AboutMe from "@/components/AboutMe/AboutMe.index";
import Projects from "@/components/projects/Projects.index";
import Interests from "@/components/interests/Interests.index";
import Footer from "@/components/footer/Footer.index";
import Blogs from "@/components/blogs/Blogs.index";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <MultiLayerParallax />
        <AboutMe />
        {/* <Projects /> */}
        <Interests />
        {/* <Blogs /> */}
        <Footer />
      </main>
    </NextUIProvider>
  );
}
