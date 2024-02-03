import Image from "next/image";
import React from "react";

export default function ProjectImage({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="relative aspect-video w-96 overflow-hidden rounded-md border">
      <Image
        className="object-cover blur-sm transition-all group-hover:blur-none"
        src={image}
        alt={title}
        width={384}
        height={216}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute bottom-1 left-1 flex items-center justify-center">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
}
