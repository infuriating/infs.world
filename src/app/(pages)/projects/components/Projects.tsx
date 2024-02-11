"use client";

import React from "react";
import ProjectItem from "./ProjectItem";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import Tags from "./Tags";

export default function Projects(params: {
  preloadedProjects: Preloaded<typeof api.project.getAll>;
}) {
  const projects = usePreloadedQuery(params.preloadedProjects);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const tags: string[] = [];
  if (!projects || projects.length === 0) return <>No projects found!</>;

  projects.sort((a, b) => {
    return (
      new Date(b._creationTime).getTime() - new Date(a._creationTime).getTime()
    );
  });

  projects.forEach((project) => {
    if (!project.tags) return;
    project.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  const filteredProjects = projects.filter((project) => {
    return selectedTags.every((tag) => project.tags?.includes(tag));
  });

  return (
    <div className="flex flex-col justify-center gap-y-6">
      <Tags
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
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
