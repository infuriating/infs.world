import { Skeleton } from "@/components/ui/skeleton";
import { Github, LinkIcon } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Skeleton className="h-[169px] w-[300px] rounded-xl border object-cover object-center lg:h-[281px] lg:w-[500px] xl:h-[337px] xl:w-[600px]" />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Project
              </h1>
              <p className=" text-muted-foreground md:text-xl">
                <Skeleton className="h-8 max-w-[600px] rounded-full" />
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
                Technologies Used
              </h2>
              <p className="max-w-[600px] md:text-xl">
                {Array.from({ length: 6 }, (_, i) => (
                  <span
                    key={i}
                    className="mx-0.5 inline-flex items-center rounded-full bg-secondary px-3 py-0.5 text-sm font-medium"
                  >
                    Tech {i + 1}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Github /> View on GitHub
              <LinkIcon /> Visit Live Website
            </div>
            <div className="mt-4 flex flex-wrap gap-1">
              {Array.from({ length: 6 }, (_, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                >
                  Tag {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
