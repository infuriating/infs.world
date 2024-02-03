import { cn } from "@/lib/utils";
import React from "react";

export default function GradientText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "w-max bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent",
        className,
      )}
    >
      {text}
    </span>
  );
}
