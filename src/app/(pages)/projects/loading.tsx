import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Button } from "@/components/ui/button";

const projects = Array.from({ length: 3 }, (_, i) => i);
const tags = Array.from({ length: 24 }, (_, i) => i);
const widths = ["w-4", "w-6", "w-8", "w-10", "w-12"];

export default function loading() {
  return (
    <div className="flex flex-col justify-center gap-y-6">
      <div className="hidden w-full flex-col overflow-x-auto px-8 md:flex">
        <h1 className="pb-2 text-xl font-medium">Filter by tags</h1>
        <div className="flex gap-2 overflow-x-auto">
          {tags.map((tag) => (
            <Skeleton
              key={tag}
              className={`h-6 ${
                widths[Math.floor(Math.random() * widths.length)]
              }  rounded-full`}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <div className="group w-max rounded-lg border p-4" key={project}>
            <div className="relative aspect-video w-96 overflow-hidden rounded-md border">
              <Skeleton />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="pointer-events-none absolute bottom-1 left-1 flex items-center justify-center">
                <h3 className="text-2xl font-bold">Project {i + 1}</h3>
              </div>
            </div>
            <p className="mt-2 max-w-[384px] text-sm text-muted-foreground">
              <Skeleton className="h-8 rounded-full" />
            </p>
            <Button className="mt-2">View Project</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
