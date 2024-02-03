import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    slug: v.string(),
    title: v.string(),
    description: v.string(),
    images: v.array(v.string()),
    technologies: v.array(v.string()),
    tags: v.optional(v.array(v.string())),
    github: v.optional(v.string()),
    website: v.optional(v.string()),
    inDevelopment: v.boolean(),
  }),
});
