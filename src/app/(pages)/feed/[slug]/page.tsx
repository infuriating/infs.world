import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";
import FeedPost from "./components/FeedPost";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const slugWithoutSpaces = slug.replace("%20", " ");

  return {
    title: `infs.world - @${slugWithoutSpaces}`,
  };
}

export default async function FeedDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const slugWithoutSpaces = slug.replace("%20", " ");
  const feed = await fetchQuery(api.feed.getFeedPost, {
    slug: slugWithoutSpaces,
  });

  if (!feed) return <>Post not found!</>;

  return <FeedPost feed={feed} />;
}
