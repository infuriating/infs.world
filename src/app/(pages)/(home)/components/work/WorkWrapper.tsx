import { fetchQuery } from "convex/nextjs";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { api } from "../../../../../../convex/_generated/api";
import SectionTitle from "../ui/section-title";
import Tag from "../ui/tag";
import Work from "./Work";

export default async function WorkWrapper() {
  const projects = await fetchQuery(api.project.getLatestTwo);

  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-xl flex-col">
        <Tag number={3} />
        <SectionTitle title="My work" />
        <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
          <Work projects={projects} />
        </div>
        <Link
          href={"/projects"}
          className="mt-4 flex gap-x-2 text-muted-foreground transition-all hover:text-primary"
        >
          <MoveRight /> <span>View more of my work</span>
        </Link>
      </div>
    </div>
  );
}
