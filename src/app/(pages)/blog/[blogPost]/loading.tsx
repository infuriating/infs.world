"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";
import "./components/blogpost.css";

export default function loading() {
  const blogPost = {
    _id: 0,
    title: "Loading blog post...",
    content: ["# Loading...", "## Loading...", "### Loading..."],
    _creationTime: Date.now(),
  };

  const content = blogPost.content.join("\n");

  return (
    <div className="grid animate-pulse gap-6 px-4 md:gap-8 md:px-6 lg:place-items-center xl:gap-10">
      <div className="aspect-image md:aspect-none w-full overflow-hidden rounded-lg md:order-first md:rounded-none">
        <Skeleton className="h-96" />
      </div>
      <div className="max-w-screen space-y-4 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <div className="space-y-2">
          <span className="w-full text-sm font-medium text-neutral-500">
            {new Date(blogPost._creationTime).toLocaleDateString()}
          </span>
          <div className="w-max">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:leading-[3.5rem]">
              {blogPost.title}
            </h2>
            <Separator className="mt-1.5 bg-neutral-700" />
          </div>
        </div>
        {/* @ts-ignore */}
        <ReactMarkdown className={"react-markdown"}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
