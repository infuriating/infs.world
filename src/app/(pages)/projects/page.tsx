import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import Projects from "./components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "infs.world - @projects",
  description: "infs.world's Portfolio of projects.",
};

export default async function ProjectList() {
  const preloadedProjects = await preloadQuery(api.project.getAll);
  return <Projects preloadedProjects={preloadedProjects} />;
}
