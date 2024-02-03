import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import Projects from "./components/Projects";

export default async function ProjectList() {
  const preloadedProjects = await preloadQuery(api.project.getAll);
  return <Projects preloadedProjects={preloadedProjects} />;
}
