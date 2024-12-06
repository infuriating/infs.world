import { Code2Icon } from "lucide-react";
import Image from "next/image";

export default function ProjectImage({
  title,
  image,
  inDevelopment,
}: {
  title: string;
  image: string;
  inDevelopment: boolean;
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border">
      <Image
        className="h-full w-full object-cover blur-sm transition-all group-hover:blur-none"
        src={image}
        alt={title}
        width={384}
        height={216}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-500/50 to-transparent" />
      <div className="pointer-events-none absolute bottom-1 left-1 flex flex-col items-center justify-center">
        {inDevelopment && (
          <div className="flex items-center gap-x-1 border bg-black/40 px-1 py-0.5">
            <Code2Icon size={14} /> <p className="text-sm">In Development</p>
          </div>
        )}
      </div>
    </div>
  );
}
