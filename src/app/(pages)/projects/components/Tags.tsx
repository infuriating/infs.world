"use client";

import { Button } from "@/components/ui/button";
import React, { useRef } from "react";

export default function Tags({
  tags,
  selectedTags,
  setSelectedTags,
}: {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const tagDivRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hidden w-full flex-col overflow-x-auto px-8 md:flex">
      <h1 className="pb-2 text-xl font-medium">Filter by tags</h1>
      {selectedTags.length > 0 && (
        <Button
          variant={"secondary"}
          className="mb-2"
          onClick={() => setSelectedTags([])}
        >
          Deselect All Tags
        </Button>
      )}

      <div
        className={`flex gap-2 overflow-x-auto
        ${
          // @ts-ignore
          tagDivRef.current?.scrollWidth > tagDivRef.current?.clientWidth
            ? "mx-4"
            : ""
        }
        `}
        style={{ flexShrink: 0 }}
        ref={tagDivRef}
      >
        {/* @ts-ignore */}
        {tagDivRef.current?.scrollWidth > tagDivRef.current?.clientWidth && (
          <Button
            className="absolute left-6 h-6"
            size={"sm"}
            variant={"secondary"}
            onClick={() => {
              tagDivRef.current?.scrollBy({ left: 150, behavior: "smooth" });
            }}
          >
            {">"}
          </Button>
        )}
        {tags.map((tag) => (
          <Button
            size={"sm"}
            variant={selectedTags.includes(tag) ? "default" : "secondary"}
            className="h-6"
            onClick={() => {
              if (selectedTags.includes(tag)) {
                setSelectedTags(selectedTags.filter((t) => t !== tag));
              } else {
                setSelectedTags([...selectedTags, tag]);
              }
            }}
            key={tag}
          >
            {tag}
          </Button>
        ))}
        {/* @ts-ignore */}
        {tagDivRef.current?.scrollWidth > tagDivRef.current?.clientWidth && (
          <Button
            className="absolute right-6 h-6"
            size={"sm"}
            variant={"secondary"}
            onClick={() => {
              tagDivRef.current?.scrollBy({ left: -150, behavior: "smooth" });
            }}
          >
            {"<"}
          </Button>
        )}
      </div>
    </div>
  );
}
