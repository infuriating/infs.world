import GradientText from "@/components/ui/gradient-text";
import Link from "next/link";
import { Doc } from "../../../../../../convex/_generated/dataModel";

export default function ProjectWork(project: Doc<"projects">) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group text-muted-foreground"
    >
      <GradientText
        className="mb-1 text-xl font-bold brightness-200 saturate-0 transition-all group-hover:brightness-100 group-hover:saturate-100 lg:mb-2"
        text={project.title}
      />
      <p className="mb-2 max-w-80 truncate text-base transition-all group-hover:text-white sm:max-w-md lg:mb-0">
        {project.short_description}
      </p>
    </Link>
  );
}
