import { preloadQuery } from "convex/nextjs";
import Work from "./Work";
import { api } from "../../../../../../convex/_generated/api";

export default async function WorkWrapper() {
  const preloadedProjects = await preloadQuery(api.project.getLatestTwo);
  return <Work preloadedProjects={preloadedProjects} />;
}
