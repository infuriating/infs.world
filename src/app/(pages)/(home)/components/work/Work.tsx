"use client";

import React from "react";
import Tag from "../ui/tag";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import SectionTitle from "../ui/section-title";
import ProjectWork from "../ui/project-work";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";

export default function Work(params: {
  preloadedProjects: Preloaded<typeof api.project.getLatestTwo>;
}) {
  const projects = usePreloadedQuery(params.preloadedProjects);

  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-xl flex-col">
        <Tag number={3} />
        <SectionTitle title="My work" />
        <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectWork
              key={project._id}
              slug={project.slug}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <Link
          href={"/projects"}
          className="mt-4 flex gap-x-2 text-muted-foreground transition-all hover:text-primary"
        >
          <MoveRight /> <span>View more of my work</span>
        </Link>
      </div>
    </div>
  );
}
