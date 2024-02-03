import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import ProjectImage from "./ui/ProjectImage";

export default function ProjectItem({
  slug,
  title,
  description,
  image,
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group w-max rounded-lg border p-4">
      <ProjectImage image={image} title={title} />
      <p className="mt-2 max-w-[384px] text-sm text-muted-foreground">
        {description}
      </p>
      <Link href={slug}>
        <Button className="mt-2">View Project</Button>
      </Link>
    </div>
  );
}
