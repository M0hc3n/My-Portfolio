"use client";
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
      <main className=" bg-[#020202]">
        <MultiLayerParallax />
        <div className="max-w-[1200px] mx-auto">
          <AboutMe />
          {/* <Projects /> */}
          <Interests />
          {/* <Blogs /> */}
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}
