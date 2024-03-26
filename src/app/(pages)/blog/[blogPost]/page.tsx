import { preloadQuery } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";
import BlogPost from "./components/BlogPost";

export function generateMetadata({ params }: { params: { blogPost: string } }) {
  params.blogPost.replace("%20", " ");

  return {
    title: `infs.world - @${params.blogPost}`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { blogPost: string };
}) {
  const blogPost = params.blogPost.replace(/%20/g, " ");
  const preloadedBlogPost = await preloadQuery(api.blog.getBlogPost, {
    slug: blogPost,
  });
  return <BlogPost preloadedBlogPost={preloadedBlogPost} />;
}
