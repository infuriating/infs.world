"use client";

import { Preloaded, usePreloadedQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../convex/_generated/api";
import BlogPost from "./BlogPost";
import { Separator } from "@/components/ui/separator";

export default function BlogPosts(params: {
  preloadedProjects: Preloaded<typeof api.blog.getAll>;
}) {
  const blogPosts = usePreloadedQuery(params.preloadedProjects);

  return (
    <div className="flex flex-col gap-y-8 py-6 md:py-12 lg:py-16">
      {blogPosts.map((blogPost) => (
        <div key={blogPost._id} className="flex flex-col items-center gap-y-4">
          <BlogPost blogPost={blogPost} />
          <Separator className="w-full lg:w-3/4" />
        </div>
      ))}
    </div>
  );
}
