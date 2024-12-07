import { ConvexError, v } from "convex/values";
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

export const addProject = mutation({
  args: {
    title: v.string(),
    short_description: v.string(),
    description: v.string(),
    images: v.array(v.string()),
    inDevelopment: v.boolean(),
    technologies: v.array(
      v.object({
        name: v.string(),
        url: v.string(),
      }),
    ),
    collaborators: v.array(
      v.object({
        name: v.string(),
        role: v.string(),
        github: v.string(),
        linkedin: v.string(),
        website: v.string(),
      }),
    ),
    github: v.string(),
    tags: v.array(v.string()),
    website: v.string(),
  },
  handler: async (ctx, args) => {
    const slug = args.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/ /g, "-");

    args.images = args.images[0].split(",");
    args.tags = args.tags[0].split(",");

    const project = await ctx.db.insert("projects", {
      ...args,
      slug,
    });

    return project;
  },
});

export const updateProject = mutation({
  args: {
    _id: v.string(),
    title: v.string(),
    short_description: v.string(),
    description: v.optional(v.string()),
    images: v.array(v.string()),
    inDevelopment: v.boolean(),
    technologies: v.array(
      v.object({
        name: v.string(),
        url: v.string(),
      }),
    ),
    collaborators: v.array(
      v.object({
        name: v.string(),
        role: v.string(),
        github: v.optional(v.string()),
        linkedin: v.optional(v.string()),
        website: v.optional(v.string()),
      }),
    ),
    github: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    website: v.optional(v.string()),
  },
  handler: async (
    ctx,
    {
      _id,
      title,
      short_description,
      description,
      images,
      inDevelopment,
      technologies,
      collaborators,
      github,
      tags,
      website,
    },
  ) => {
    const project = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("_id"), _id))
      .first();
    if (!project) throw new ConvexError("Project not found");

    title ? (project.title = title) : (project.title = project.title);
    short_description
      ? (project.short_description = short_description)
      : (project.short_description = project.short_description);
    description
      ? (project.description = description)
      : (project.description = project.description);
    images ? (project.images = images) : (project.images = project.images);
    inDevelopment
      ? (project.inDevelopment = inDevelopment)
      : (project.inDevelopment = project.inDevelopment);
    technologies
      ? (project.technologies = technologies)
      : (project.technologies = project.technologies);
    collaborators
      ? (project.collaborators = collaborators)
      : (project.collaborators = project.collaborators);
    github ? (project.github = github) : (project.github = project.github);
    tags ? (project.tags = tags) : (project.tags = project.tags);
    website ? (project.website = website) : (project.website = project.website);

    project.slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/ /g, "-");
    project.images = project.images[0].split(",");
    project.tags && (project.tags = project.tags[0].split(","));

    return await ctx.db.replace(project._id, project);
  },
});

export const deleteProject = mutation({
  args: {
    _id: v.string(),
  },
  handler: async (ctx, { _id }) => {
    const project = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("_id"), _id))
      .first();
    if (!project) throw new ConvexError("Project not found");

    await ctx.db.delete(project._id);
  },
});
