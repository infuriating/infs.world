"use client";

import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Preloaded, usePreloadedQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { api } from "../../../../../../convex/_generated/api";

export default function BlogPost(params: {
  preloadedBlogPost: Preloaded<typeof api.blog.getBlogPost>;
}) {
  const blogPost = usePreloadedQuery(params.preloadedBlogPost);
  if (!blogPost) return <>Project not found!</>;
  return (
    <div className="grid gap-6 px-4 md:gap-8 md:px-6 xl:gap-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="w-full text-sm font-medium text-neutral-500">
            {new Date(blogPost._creationTime).toLocaleDateString()}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:leading-[3.5rem]">
            {blogPost.title}
          </h2>
        </div>
        <p className="text-neutral-400 lg:line-clamp-5">{blogPost.content}</p>
      </div>
      <div className="aspect-image md:aspect-none w-full overflow-hidden rounded-lg md:order-first md:rounded-none">
        {blogPost.image ? (
          <Image
            alt="Blog post image"
            className="aspect-image object-cover"
            height={340}
            src="/logo.png"
            width={500}
          />
        ) : (
          <Skeleton className="h-full min-h-32 w-full" />
        )}
      </div>
    </div>
  );
}
