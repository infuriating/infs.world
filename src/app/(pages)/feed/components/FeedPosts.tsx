"use client";

import InAnimationWrapper from "@/components/ui/in-animation-wrapper";
import { Separator } from "@/components/ui/separator";
import { Doc } from "../../../../../convex/_generated/dataModel";
import FeedPost from "./FeedPost";

export default function FeedPosts({ feedPosts }: { feedPosts: Doc<"feed">[] }) {
  return feedPosts.map((feed, i) => (
    <InAnimationWrapper
      className="flex-col items-center gap-y-4"
      delay={i * 0.1}
      side={i % 2 === 0 ? "up" : "down"}
      key={feed._id}
    >
      <FeedPost feed={feed} />
      <Separator className="w-full lg:mt-4 lg:w-3/4" />
    </InAnimationWrapper>
  ));
}
