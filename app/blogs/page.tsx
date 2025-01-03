"use client";
import { NextUIProvider } from "@nextui-org/react";

import Intro from "@/components/blog/dummy/intro.mdx";

export default function Home() {
  return (
    <NextUIProvider>
      <main className=" flex flex-col items-center bg-[#020202] px-[50px] py-[40px] lg:px-[100px] lg:py-[60px]  ">
        <Intro />
      </main>
    </NextUIProvider>
  );
}
