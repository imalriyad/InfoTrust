import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBogs(data));

  }, []);
  return (
    <div>
      <div className="bg-black py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="md:space-y-7 py-10 space-y-4 text-white max-w-2xl mx-auto">
            {" "}
            <h1 className="font-bold md:text-5xl text-[32px]  text-mainColor md:text-center">
              Our Latest News
            </h1>
            <p className="text-sm md:text-base md:text-center text-left  text-secondColor">
              Discover Our Blog: Explore expert insights, safe strategies,
              rewarding advice, and unwavering guidance in the ever-evolving
              world of finance. Your knowledge, our commitment
            </p>
          </div>

         <div className="md:block hidden"> <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
           {
            blogs?.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)

           }
           </div></div>
           <div className="md:hidden space-y-4 block">
            {
               blogs?.slice(0,3).map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
           </div>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
