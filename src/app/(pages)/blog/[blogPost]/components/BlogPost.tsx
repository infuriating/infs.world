"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Preloaded, usePreloadedQuery } from "convex/react";
import Image from "next/image";
import React from "react";
import { api } from "../../../../../../convex/_generated/api";
import ReactMarkdown from "react-markdown";
import "./blogpost.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as SyntaxHighlightStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/ui/separator";
import BlogPostScrollBar from "./ScrollBar";

const components = {
  // @ts-ignore
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={SyntaxHighlightStyle}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function BlogPost(params: {
  preloadedBlogPost: Preloaded<typeof api.blog.getBlogPost>;
}) {
  const blogPost = usePreloadedQuery(params.preloadedBlogPost);
  if (!blogPost) return <>Project not found!</>;

  const content = blogPost.content.join("\n");

  return (
    <>
      <BlogPostScrollBar />
      <div className="grid gap-6 px-4 py-4 md:gap-8 md:px-6 lg:place-items-center xl:gap-10">
        <div className="aspect-image md:aspect-none w-full overflow-hidden rounded-lg md:order-first md:rounded-none">
          {blogPost.image ? (
            <Image
              alt={blogPost.title}
              className="aspect-image max-h-96 w-full rounded-lg object-cover"
              height={340}
              width={500}
              src={blogPost.image}
            />
          ) : (
            <Skeleton className="h-96 w-full" />
          )}
        </div>
        <div className="w-full space-y-4 md:w-[48rem] lg:w-[56rem] xl:w-[64rem]">
          <div className="space-y-2">
            <span className="rounded-md border border-neutral-100/15 bg-neutral-100/5 px-1 py-0.5 text-sm font-medium text-neutral-500">
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
          <ReactMarkdown className={"react-markdown"} components={components}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
