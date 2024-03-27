import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("blogPosts").order("desc").collect();
  },
});

export const getLatestTwo = query({
  handler: async (ctx) => {
    return await ctx.db.query("blogPosts").order("desc").take(2);
  },
});

export const getBlogPost = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, { slug }) => {
    const project = await ctx.db
      .query("blogPosts")
      .filter((q) => q.eq(q.field("slug"), slug))
      .first();

    return project;
  },
});
