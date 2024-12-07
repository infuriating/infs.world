"use client";

import dynamic from "next/dynamic";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function ProjectDescription({
  description,
}: {
  description: string;
}) {
  return (
    <ReactMarkdown
      className={
        "prose prose-invert pt-4 prose-img:rounded-sm prose-img:shadow-md"
      }
    >
      {description}
    </ReactMarkdown>
  );
}
