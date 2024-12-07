"use client";

import { Doc } from "../../../../../../convex/_generated/dataModel";
import ProjectWork from "../ui/project-work";

export default function Work({ projects }: { projects: Doc<"projects">[] }) {
  return projects.map((project) => (
    <ProjectWork key={project._id} {...project} />
  ));
}
