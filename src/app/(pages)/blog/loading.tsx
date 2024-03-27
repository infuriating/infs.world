"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import BlogPost from "./components/BlogPost";

export default function loading() {
  const loadingBlogPosts = new Array(3).fill(null).map(
    (_, i) =>
      ({
        _id: i,
        title: "Loading blog post...",
        content: ["Loading...", "Loading...", "Loading..."],
        _creationTime: Date.now(),
      }) as any,
  );

  return (
    <div className="flex flex-col gap-y-8 py-6">
      {loadingBlogPosts.map((blogPost, i) => (
        <div className="flex-col items-center gap-y-4" key={blogPost._id}>
          <BlogPost blogPost={blogPost} />
          <Separator className="w-full lg:mt-4 lg:w-3/4" />
        </div>
      ))}
    </div>
  );
}
