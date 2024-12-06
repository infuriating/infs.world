"use client";

import { Doc } from "../../../../../convex/_generated/dataModel";
import ProjectItem from "./ProjectItem";

export default function Projects({
  projects,
}: {
  projects: Doc<"projects">[];
}) {
  if (!projects || projects.length === 0) {
    return (
      <p className="text-center text-lg text-muted-foreground">
        No projects found! Check back later.
      </p>
    );
  }

  const sortedProjects = [...projects].sort((a, b) => {
    return (
      new Date(b._creationTime).getTime() - new Date(a._creationTime).getTime()
    );
  });

  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedProjects.map((project) => (
          <ProjectItem
            key={project._id}
            image={project.images[0]}
            slug={`/projects/${project.slug}`}
            title={project.title}
            description={project.description}
            inDevelopment={project.inDevelopment}
          />
        ))}
      </div>
    </section>
  );
}
