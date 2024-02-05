import GradientText from "@/components/ui/gradient-text";
import Link from "next/link";
import React from "react";

export default function ProjectWork({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={`/projects/${slug}`} className="group text-muted-foreground">
      <GradientText
        className="mb-1 text-xl font-bold brightness-200 saturate-0 transition-all group-hover:brightness-100 group-hover:saturate-100 lg:mb-2"
        text={title}
      />
      <p className="mb-2 max-w-80 truncate text-base transition-all group-hover:text-white sm:max-w-md lg:mb-0">
        {description}
      </p>
    </Link>
  );
}
