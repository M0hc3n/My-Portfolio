"use client";
import { compareblogSlugs } from "@/components/blog/router";
import { blogs } from "@/components/blog/router/blogs";
import { Blog } from "@/components/blog/router/interfaces";
import Footer from "@/components/footer/Footer.index";
import Navbar from "@/components/Navbar/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { slug: string } }) {
  const [blogMdxPage, setBlogMdxPage] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const blogData: Blog = blogs.filter((blog) =>
      compareblogSlugs(decodeURIComponent(params.slug), blog.slug)
    )[0];

    setBlogMdxPage(blogData.content);
  }, [params.slug]);

  return (
    <NextUIProvider>
      <main className=" flex flex-col items-center bg-[#020202] lg:px-[100px] lg:py-[60px]  ">
        <Navbar />
        {blogMdxPage ?? <h1>404</h1>}
        <Footer />
      </main>
    </NextUIProvider>
  );
}
