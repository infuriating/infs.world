import GradientText from "@/components/ui/gradient-text";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next";
import { api } from "../../../../convex/_generated/api";
import Projects from "./components/Projects";

export const metadata: Metadata = {
  title: "infs.world - @projects",
  description: "A showcase of my web development projects and applications.",
};

export default async function ProjectList() {
  const projects = await fetchQuery(api.project.getAll);

  return (
    <div className="relative flex min-h-[calc(100_-_104px)] w-full flex-col justify-between gap-16 pb-4">
      <main className="flex w-full flex-col justify-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 lg:px-8">
          <section className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              My <GradientText text="Projects" />
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              A collection of my web development projects, ranging from personal
              experiments to full-scale applications. Each project represents a
              unique challenge and learning experience.
            </p>
          </section>

          <Projects projects={projects} />
        </div>
      </main>
    </div>
  );
}
