"use client";
import { compareblogSlugs } from "@/components/blog/router";
import { blogs } from "@/components/blog/router/blogs";
import { Blog } from "@/components/blog/router/interfaces";
import Footer from "@/components/footer/Footer.index";
import Navbar from "@/components/Navbar/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Spinner } from "@heroui/spinner";
import HeroTitle from "@/components/blog/shared/HeroTitle";
import HeroImage from "@/components/blog/shared/HeroImage";
import HeroSubTitle from "@/components/blog/shared/HeroSubTitle";

export default function Home({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [blogData, setBlogData] = useState<Blog | null>(null);

  useEffect(() => {
    setLoading(true);

    const blogData: Blog = blogs.filter((blog) =>
      compareblogSlugs(decodeURIComponent(params.slug), blog.slug)
    )[0];

    if (blogData) {
      setBlogData(blogData);
    } else {
      router.push("/not-found");
    }

    setLoading(false);
  }, [params.slug, router]);

  if (loading || !blogData) {
    return (
      <NextUIProvider>
        <main className=" flex flex-col items-center justify-center bg-bg__main h-screen w-screen lg:px-[100px] lg:py-[60px]  ">
          <Spinner size="md" />
        </main>
      </NextUIProvider>
    );
  }

  return (
    <NextUIProvider>
      <main className=" flex flex-col items-center bg-bg__main lg:px-[100px] lg:py-[60px]  ">
        <Navbar />
        <HeroTitle title={blogData?.title} />

        <HeroImage src={blogData?.image} alt={blogData.slug} />
        <HeroSubTitle subtitle={blogData?.slug} date={blogData?.date} />

        {blogData?.content}
        <div className="w-[800px]">
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}
