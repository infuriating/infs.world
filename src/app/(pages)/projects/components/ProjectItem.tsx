import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectImage from "./ui/ProjectImage";

export default function ProjectItem({
  slug,
  title,
  description,
  image,
  inDevelopment,
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
  inDevelopment: boolean;
}) {
  return (
    <Link
      href={slug}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <ProjectImage
          image={image}
          title={title}
          inDevelopment={inDevelopment}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-6">
          <Button
            className="w-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            variant="ghost"
          >
            View Details
          </Button>
        </div>
      </div>
    </Link>
  );
}
