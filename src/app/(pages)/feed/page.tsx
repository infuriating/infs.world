import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import FeedPosts from "./components/FeedPosts";

export default async function FeedWrapper() {
  const feedPosts = await fetchQuery(api.feed.getAll);
  return (
    <div className="flex flex-col gap-y-8 py-6">
      <FeedPosts feedPosts={feedPosts} />
    </div>
  );
}
