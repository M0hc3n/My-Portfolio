import React from "react";
import { blogs } from "../blog/router/blogs";
import BlogCard from "./Card/Blog.card";

const Blogs = () => {
  return (
    <div className="w-full bg-bg__main py-[30px] px-[30px] lg:px-[50px] 2xl:px-[100px] flex flex-col justify-center  gap-[30px]">
      <h1 className="text-white text-left text-[32px] font-bold font-montserrat">
        Blog
      </h1>

      <div className="flex flex-col gap-[30px]  justify-evenly">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
