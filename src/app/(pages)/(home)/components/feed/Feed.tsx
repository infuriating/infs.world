"use client";

import { Doc } from "../../../../../../convex/_generated/dataModel";
import FeedPost from "../ui/feed-post";

export default function Feed({ feedPosts }: { feedPosts: Doc<"feed">[] }) {
  return feedPosts.map((feedPost) => (
    <FeedPost
      key={feedPost._id}
      slug={feedPost.slug}
      title={feedPost.title}
      content={feedPost.content}
    />
  ));
}
