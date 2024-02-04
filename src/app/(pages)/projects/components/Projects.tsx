"use client";

import React from "react";
import ProjectItem from "./ProjectItem";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export default function Projects(params: {
  preloadedProjects: Preloaded<typeof api.project.getAll>;
}) {
  const projects = usePreloadedQuery(params.preloadedProjects);
  if (!projects || projects.length === 0) return <>No projects found!</>;

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem
            key={project._id}
            image={project.images[0]}
            slug={`/projects/${project.slug}`}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
