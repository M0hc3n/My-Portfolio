"use client";

import { HeroUIProvider } from "@heroui/react";

import Navbar from "@/components/Navbar/Navbar";
import Blogs from "@/components/blogs/Blogs.index";
import Footer from "@/components/footer/Footer.index";

const BlogsPageContent = () => (
  <HeroUIProvider>
    <main className="flex flex-col items-center bg-bg__main min-h-screen lg:px-[100px] lg:py-[60px]">
      <Navbar />
      <div className="w-full max-w-[1200px]">
        <Blogs />
        <div className="px-[30px] w-full lg:w-[1000px] lg:px-0 mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  </HeroUIProvider>
);

export default BlogsPageContent;
