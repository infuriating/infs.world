import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ blogPost }: { blogPost: any }) {
  const content = blogPost.content.join("\n");

  return (
    <div className="grid w-full gap-6 px-4 md:gap-8 md:px-6 lg:grid-cols-2 xl:gap-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="text-sm font-medium text-neutral-500">
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
              className: "px-2",
            })}
            href={`/blog/${blogPost.slug}`}
          >
            &rarr; Read more
          </Link>
        </div>
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
