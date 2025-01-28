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

export default function Home({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [blogMdxPage, setBlogMdxPage] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    setLoading(true);

    const blogData: Blog = blogs.filter((blog) =>
      compareblogSlugs(decodeURIComponent(params.slug), blog.slug)
    )[0];

    if (blogData) {
      setBlogMdxPage(blogData.content);
    } else {
      router.push("/not-found");
    }

    setLoading(false);
  }, [params.slug, router]);

  if (loading) {
    return (
      <NextUIProvider>
        <main className=" flex flex-col items-center justify-center bg-[#020202] h-screen w-screen lg:px-[100px] lg:py-[60px]  ">
          <Spinner size="md" />
        </main>
      </NextUIProvider>
    );
  }

  return (
    <NextUIProvider>
      <main className=" flex flex-col items-center bg-[#020202] lg:px-[100px] lg:py-[60px]  ">
        <Navbar />
        {blogMdxPage}
        <div className="w-[800px]">
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}
