import { fetchQuery } from "convex/nextjs";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { api } from "../../../../../../convex/_generated/api";
import SectionTitle from "../ui/section-title";
import Tag from "../ui/tag";
import Feed from "./Feed";

export default async function FeedWrapper() {
  const feedPosts = await fetchQuery(api.feed.getLatestTwo);
  if (!feedPosts) return null;

  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-xl flex-col">
        <Tag number={4} />
        <SectionTitle title="Feed" />
        <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
          <Feed feedPosts={feedPosts} />
        </div>
        <Link
          href={"/feed"}
          className="mt-4 flex gap-x-2 text-muted-foreground transition-all hover:text-primary"
        >
          <MoveRight /> <span>Check my feed</span>
        </Link>
      </div>
    </div>
  );
}
