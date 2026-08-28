"use client";
import { compareblogSlugs } from "@/components/blog/router";
import { blogs } from "@/components/blog/router/blogs";
import { Blog } from "@/components/blog/router/interfaces";
import Footer from "@/components/footer/Footer.index";
import Navbar from "@/components/Navbar/Navbar";
import { HeroUIProvider } from "@heroui/react";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Spinner } from "@heroui/react";
import HeroTitle from "@/components/blog/shared/HeroTitle";
import HeroImage from "@/components/blog/shared/HeroImage";
import HeroSubTitle from "@/components/blog/shared/HeroSubTitle";
import ReadTracker from "@/components/blog/ReadTracker";

export default function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();

  const blogData: Blog | null =
    blogs.find((blog) =>
      compareblogSlugs(decodeURIComponent(slug), blog.slug)
    ) ?? null;

  useEffect(() => {
    if (!blogData) {
      router.push("/not-found");
    }
  }, [blogData, router]);

  if (!blogData) {
    return (
      <HeroUIProvider>
        <main className=" flex flex-col items-center justify-center bg-bg__main h-screen w-screen lg:px-[100px] lg:py-[60px]  ">
          <Spinner size="md" />
        </main>
      </HeroUIProvider>
    );
  }

  return (
    <HeroUIProvider>
      <main className=" flex flex-col items-center bg-bg__main lg:px-[100px] lg:py-[60px]  ">
        <ReadTracker slug={blogData.slug} title={blogData.title} />
        <Navbar />
        <HeroTitle title={blogData?.title} />

        <HeroImage src={blogData?.image} alt={blogData.slug} />
        <HeroSubTitle subtitle={blogData?.slug} date={blogData?.date} />

        {blogData?.content}
        <div className="w-[800px]">
          <Footer />
        </div>
      </main>
    </HeroUIProvider>
  );
}
