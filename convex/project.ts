import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const getLatestTwo = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").order("desc").take(2);
  },
});

export const getProject = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, { slug }) => {
    const project = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("slug"), slug))
      .first();

    return project;
  },
});
