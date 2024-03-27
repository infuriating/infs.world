"use client";

import { Preloaded, usePreloadedQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../convex/_generated/api";
import BlogPost from "./BlogPost";
import { Separator } from "@/components/ui/separator";
import InAnimationWrapper from "@/components/ui/in-animation-wrapper";

export default function BlogPosts(params: {
  preloadedProjects: Preloaded<typeof api.blog.getAll>;
}) {
  const blogPosts = usePreloadedQuery(params.preloadedProjects);

  return (
    <div className="flex flex-col gap-y-8 py-6">
      {blogPosts.map((blogPost, i) => (
        <InAnimationWrapper
          className="flex-col items-center gap-y-4"
          delay={i * 0.1}
          side={i % 2 === 0 ? "up" : "down"}
          key={blogPost._id}
        >
          <BlogPost blogPost={blogPost} />
          <Separator className="w-full lg:mt-4 lg:w-3/4" />
        </InAnimationWrapper>
      ))}
    </div>
  );
}
