import GradientText from "@/components/ui/gradient-text";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { calculateReadTime } from "@/lib/functions";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function BlogPost({
  slug,
  title,
  content,
}: {
  slug: string;
  title: string;
  content: string[];
}) {
  const contentText = content.join("\n");

  return (
    <Link href={`/blog/${slug}`} className="group text-muted-foreground">
      <GradientText
        className="mb-1 text-xl font-bold brightness-200 saturate-0 transition-all group-hover:brightness-100 group-hover:saturate-100 lg:mb-2"
        text={title}
      />
      <p className="mb-2 line-clamp-3 max-w-80 text-base transition-all group-hover:text-white sm:max-w-md lg:mb-0">
        <ReactMarkdown>{contentText}</ReactMarkdown>
      </p>
      <p className="text-xs text-neutral-600">
        {calculateReadTime(contentText)} min read
      </p>
    </Link>
  );
}
