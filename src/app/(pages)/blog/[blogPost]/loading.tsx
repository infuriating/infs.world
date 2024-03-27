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
    content: [
      "![Loading Image (Gengar)](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db7c6753-956b-4327-8db9-27975ad43253/db2bpd5-0b5cd9ea-53cc-409c-91bb-1651be393b6c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiN2M2NzUzLTk1NmItNDMyNy04ZGI5LTI3OTc1YWQ0MzI1M1wvZGIyYnBkNS0wYjVjZDllYS01M2NjLTQwOWMtOTFiYi0xNjUxYmUzOTNiNmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4QBd2gjsm3Vh9tn6NbGuZwz5icDzNLe5QSC2uFlzpdI)",
      "# Gengar is currently helping us out!",
    ],
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
        <ReactMarkdown className={"react-markdown"}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
