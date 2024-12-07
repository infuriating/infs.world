import { Button } from "@/components/ui/button";
import GradientText from "@/components/ui/gradient-text";
import { fetchQuery } from "convex/nextjs";
import { Github, LinkIcon, X } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { api } from "../../../../../convex/_generated/api";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectCollaborators from "./components/ProjectCollaborators";
import ProjectDescription from "./components/ProjectDescription";

type Params = {
  project: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { project: projectParam } = await params;
  const projectSlug = projectParam.replace(/%20/g, " ");
  const project = await fetchQuery(api.project.getProject, {
    slug: projectSlug,
  });

  return {
    title: `${project?.title || projectParam} - infs.world`,
    description: project?.description || "Project details on infs.world",
    keywords: project?.tags || [],
    authors: {
      name: "Luca Kuiper",
      url: "https://infs.world",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { project: projectParam } = await params;
  const projectSlug = projectParam.replace(/%20/g, " ");
  const project = await fetchQuery(api.project.getProject, {
    slug: projectSlug,
  });

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="text-muted-foreground">
          This project doesn&apos;t exist or has been removed.
        </p>
        <Link href="/projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100_-_104px)] w-full flex-col justify-between gap-16 pb-4">
      <main className="flex w-full flex-col justify-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 lg:px-8">
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                <GradientText text={project.title} />
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                {project.inDevelopment && (
                  <div className="rounded-full bg-primary/10 px-4 py-1 text-sm text-primary">
                    In Development
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Link
                      href={tech.url}
                      target="_blank"
                      key={tech.name}
                      className="rounded-full bg-secondary px-3 py-1 text-sm font-medium transition-colors hover:bg-secondary/80"
                    >
                      {tech.name}
                    </Link>
                  ))}
                </div>
              </div>
              <p className="max-w-2xl text-lg text-muted-foreground">
                {project.short_description}
              </p>
            </div>
          </section>

          <section className="flex flex-wrap gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="min-w-[200px] flex-1"
              >
                <Button className="w-full gap-2" variant="outline">
                  <Github className="h-4 w-4" /> View on GitHub
                </Button>
              </Link>
            )}

            {project.website ? (
              <Link
                href={project.website}
                target="_blank"
                className="min-w-[200px] flex-1"
              >
                <Button className="w-full gap-2">
                  <LinkIcon className="h-4 w-4" /> Visit Website
                </Button>
              </Link>
            ) : (
              <Button className="min-w-[200px] flex-1 gap-2" disabled>
                <X className="h-4 w-4" /> No Live Website
              </Button>
            )}
          </section>

          <div className="flex flex-col gap-8">
            <div className="-mx-4 lg:mx-0">
              <ProjectCarousel project={project} />
            </div>

            {project.description && (
              <ProjectDescription description={project.description} />
            )}

            <div className="space-y-8">
              {project.collaborators && project.collaborators.length > 0 && (
                <section className="flex flex-col gap-4">
                  <div className="rounded-xl bg-card/50 p-4">
                    <ProjectCollaborators
                      collaborators={project.collaborators}
                    />
                  </div>
                </section>
              )}

              {project.tags && project.tags.length > 0 && (
                <section className="flex flex-col gap-4">
                  <h2 className="text-lg font-semibold">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
