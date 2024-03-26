import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../../../convex/_generated/api";
import Blog from "./Blog";

export default async function BlogWrapper() {
  const preloadedProjects = await preloadQuery(api.blog.getLatestTwo);
  return <Blog preloadedProjects={preloadedProjects} />;
}
