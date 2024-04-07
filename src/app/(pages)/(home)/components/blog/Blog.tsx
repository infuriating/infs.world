"use client";

import React from "react";
import Tag from "../ui/tag";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import SectionTitle from "../ui/section-title";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import BlogPost from "../ui/blog-post";

export default function Work(params: {
  preloadedProjects: Preloaded<typeof api.blog.getLatestTwo>;
}) {
  const blogPosts = usePreloadedQuery(params.preloadedProjects);

  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-xl flex-col">
        <Tag number={4} />
        <SectionTitle title="Blog" />
        <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
          {blogPosts.map((blogPost) => (
            <BlogPost
              key={blogPost._id}
              slug={blogPost.slug}
              title={blogPost.title}
              content={blogPost.content}
            />
          ))}
        </div>
        <Link
          href={"/blog"}
          className="mt-4 flex gap-x-2 text-muted-foreground transition-all hover:text-primary"
        >
          <MoveRight /> <span>View more of my blog posts</span>
        </Link>
      </div>
    </div>
  );
}
