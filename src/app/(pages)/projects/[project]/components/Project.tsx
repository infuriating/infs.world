"use client";

import Image from "next/image";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Project(params: {
  preloadedProject: Preloaded<typeof api.project.getProject>;
}) {
  const project = usePreloadedQuery(params.preloadedProject);
  if (!project) return <>Project not found!</>;
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src={project.image}
            alt={project.title}
            className="mx-auto aspect-video overflow-hidden rounded-xl border object-cover object-bottom sm:w-full lg:order-last lg:aspect-square"
            height="550"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {project.title}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {project.description}
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
                Technologies Used
              </h2>
              <p className="max-w-[600px] md:text-xl">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="mx-0.5 inline-flex items-center rounded-full bg-secondary px-3 py-0.5 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {project.github && (
                <Link href={project.github}>
                  <Button className="flex gap-x-2" variant={"outline"}>
                    <Github /> View on Github
                  </Button>
                </Link>
              )}
              {project.website && (
                <Link href={project.website}>
                  <Button>Visit Live Website</Button>
                </Link>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-1">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                Tag 1
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                Tag 2
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                Tag 3
              </span>
              {project.tags &&
                project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
