"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { calculateReadTime } from "@/lib/functions";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as SyntaxHighlightStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import FeedScrollBar from "./ScrollBar";

const components = {
  code({ node, inline, className, children, ...props }: any) {
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

export default function FeedPost({ feed }: { feed: Doc<"feed"> }) {
  const content = feed.content.join("\n");

  return (
    <div className="relative">
      <FeedScrollBar />
      <div className="grid gap-6 px-4 py-4 md:gap-8 md:px-6 lg:place-items-center xl:gap-10">
        <div className="aspect-image md:aspect-none w-full overflow-hidden rounded-lg md:order-first md:rounded-none">
          {feed.image ? (
            <Image
              alt={feed.title}
              className="aspect-image max-h-96 w-full rounded-lg object-cover"
              height={340}
              width={500}
              src={feed.image}
            />
          ) : (
            <Skeleton className="h-96 w-full" />
          )}
        </div>
        <div className="container w-full space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <span className="rounded-md border border-neutral-100/15 bg-neutral-100/5 px-1 py-0.5 text-sm font-medium text-neutral-500">
                {new Date(feed._creationTime).toLocaleDateString()}
              </span>
              <Separator orientation="horizontal" className="w-4" />
              <p className="text-xs text-neutral-500">
                {calculateReadTime(content)} min read
              </p>
            </div>
            <div className="w-max">
              <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:leading-[3.5rem]">
                {feed.title}
              </h2>
              <Separator className="mt-1.5 bg-neutral-700" />
            </div>
          </div>
          <ReactMarkdown
            className={
              "prose prose-invert pt-4 prose-img:rounded-sm prose-img:shadow-md"
            }
            components={components}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
