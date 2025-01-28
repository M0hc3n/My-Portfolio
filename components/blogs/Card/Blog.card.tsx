import { encodeSlug } from "@/components/blog/router";
import { Blog } from "@/components/blog/router/interfaces";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blogs/${encodeURIComponent(encodeSlug(blog.slug))}`}
      className="flex flex-col lg:flex-row gap-[20px] cursor-pointer hover:bg-discord-hovered rounded-md ease-in-out transition-all duration-300 group"
    >
      <div
        className={
          "text-white h-full min-w-[250px] max-w-[300px] transition-opacity duration-300"
        }
      >
        <Image
          src={blog.image}
          alt={blog.title}
          height={200}
          className="object-contain rounded-md group-hover:bg-black"
        />
      </div>

      <div className="flex flex-col lg:h-[200px] py-3">
        <h1 className="text-[20px] lg:text-[32px] font-bold text-white   ">
          {blog.title}
        </h1>
        <p className="text-[14px] lg:text-[16px] mt-[2px]  text-gray-600">
          {blog.slug}{" "}
        </p>
        <p className="text-[14px] lg:text-[16px] mt-[20px]  text-gray-400">
          {blog.description.substring(0, 260) + "..."}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
