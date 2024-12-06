import GradientText from "@/components/ui/gradient-text";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative flex min-h-[calc(100_-_104px)] w-full flex-col justify-between gap-16 pb-4">
      <main className="flex w-full flex-col justify-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 lg:px-8">
          {/* Header Section */}
          <section className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              My <GradientText text="Projects" />
            </h1>
            <div className="max-w-2xl space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
          </section>

          {/* Projects Grid */}
          <section>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-xl border bg-card"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Skeleton className="absolute inset-0" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <Skeleton className="h-7 w-3/4" />
                        <Skeleton className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
