import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function BlogPost({ blogPost }: { blogPost: any }) {
  const content = blogPost.content.join("\n");

  return (
    <div className="grid w-full gap-6 px-4 md:gap-8 md:px-6 lg:grid-cols-2 xl:gap-10">
      <div className="aspect-image w-full overflow-hidden rounded-lg">
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
      <div className="relative flex h-full flex-col justify-end space-y-3">
        <div className="mt-8 space-y-2">
          <span className="absolute top-0 rounded-md border border-neutral-100/15 bg-neutral-100/5 px-1 py-0.5 text-sm font-medium text-neutral-500">
            {new Date(blogPost._creationTime).toLocaleDateString()}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:leading-[3.5rem]">
            {blogPost.title}
          </h2>
        </div>
        <p className="line-clamp-3 text-neutral-400">
          <ReactMarkdown>{content}</ReactMarkdown>
        </p>
        <div>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "px-0",
            })}
            href={`/blog/${blogPost.slug}`}
          >
            &rarr; Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
