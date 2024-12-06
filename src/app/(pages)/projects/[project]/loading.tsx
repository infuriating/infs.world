import { Button } from "@/components/ui/button";
import GradientText from "@/components/ui/gradient-text";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, LinkIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative flex min-h-[calc(100_-_104px)] w-full flex-col justify-between gap-16 pb-4">
      <main className="flex w-full flex-col justify-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 lg:px-8">
          {/* Header Section */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Loading <GradientText text="Project" />
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <Skeleton className="h-7 w-28" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }, (_, i) => (
                    <Skeleton key={i} className="h-7 w-24" />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-full max-w-2xl" />
                <Skeleton className="h-5 w-4/5 max-w-2xl" />
              </div>
            </div>
          </section>

          {/* Project Links */}
          <section className="flex flex-wrap gap-3">
            <Button
              className="min-w-[200px] flex-1 gap-2"
              variant="outline"
              disabled
            >
              <Github className="h-4 w-4" /> View on GitHub
            </Button>
            <Button className="min-w-[200px] flex-1 gap-2" disabled>
              <LinkIcon className="h-4 w-4" /> Visit Website
            </Button>
          </section>

          {/* Project Details */}
          <div className="flex flex-col gap-8">
            {/* Main Content - Images */}
            <div className="-mx-4 lg:mx-0">
              <div className="space-y-4">
                <Skeleton className="aspect-video w-full rounded-xl" />
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 4 }, (_, i) => (
                    <Skeleton
                      key={i}
                      className="aspect-video w-full rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Collaborators Section */}
              <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">Collaborators</h2>
                <div className="rounded-xl bg-card/50 p-4">
                  <div className="flex gap-2">
                    {Array.from({ length: 2 }, (_, i) => (
                      <Skeleton key={i} className="h-8 w-8 rounded-full" />
                    ))}
                  </div>
                </div>
              </section>

              {/* Tags Section */}
              <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 6 }, (_, i) => (
                    <Skeleton key={i} className="h-7 w-16" />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
