import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import BlogPosts from "./components/BlogPosts";

export default async function BlogWrapper() {
  const preloadedProjects = await preloadQuery(api.blog.getAll);
  return <BlogPosts preloadedProjects={preloadedProjects} />;
}
