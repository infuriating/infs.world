import { Separator } from "@/components/ui/separator";
import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="w-max">
      <p className="text-base text-muted-foreground">{title}</p>
      <Separator className="my-[.125rem]" />
    </div>
  );
}
