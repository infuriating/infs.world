import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    slug: v.string(),
    title: v.string(),
    description: v.string(),
    images: v.array(v.string()),
    technologies: v.array(
      v.object({
        name: v.string(),
        url: v.string(),
      }),
    ),

    tags: v.optional(v.array(v.string())),
    github: v.optional(v.string()),
    website: v.optional(v.string()),
    collaborators: v.optional(
      v.array(
        v.object({
          name: v.string(),
          role: v.string(),
          github: v.optional(v.string()),
          linkedin: v.optional(v.string()),
          website: v.optional(v.string()),
        }),
      ),
    ),
    inDevelopment: v.boolean(),
  }),
  blogPosts: defineTable({
    image: v.optional(v.string()),
    slug: v.string(),
    title: v.string(),
    content: v.array(v.string()),
    tags: v.array(v.string()),
  }),
  games: defineTable({
    title: v.string(),
    description: v.string(),
    status: v.union(
      v.literal("played"),
      v.literal("currentlyPlaying"),
      v.literal("completed"),
    ),
    rank: v.optional(
      v.object({ peak: v.string(), current: v.optional(v.string()) }),
    ),
    difficulties: v.optional(v.array(v.string())),
    hoursPlayed: v.optional(v.number()),
    platform: v.array(v.string()),
  }),
});
