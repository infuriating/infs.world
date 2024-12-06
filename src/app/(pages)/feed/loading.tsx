"use client";

import { Separator } from "@/components/ui/separator";
import FeedPost from "./components/FeedPost";

export default function loading() {
  const loadingFeedPosts = new Array(3).fill(null).map(
    (_, i) =>
      ({
        _id: i,
        title: "Loading post...",
        content: ["Loading...", "Loading...", "Loading..."],
        _creationTime: Date.now(),
      }) as any,
  );

  return (
    <div className="flex animate-pulse flex-col gap-y-8 py-6">
      {loadingFeedPosts.map((feed, i) => (
        <div className="flex-col items-center gap-y-4" key={feed._id}>
          <FeedPost feed={feed} />
          <Separator className="w-full lg:mt-4 lg:w-3/4" />
        </div>
      ))}
    </div>
  );
}
