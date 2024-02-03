import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";
import Project from "./components/Project";

export function generateMetadata({ params }: { params: { project: string } }) {
  params.project.replace("%20", " ");

  return {
    title: `infs.world - @${params.project}`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  const project = params.project.replace(/%20/g, " ");
  const preloadedProject = await preloadQuery(api.project.getProject, {
    slug: project,
  });
  return <Project preloadedProject={preloadedProject} />;
}
