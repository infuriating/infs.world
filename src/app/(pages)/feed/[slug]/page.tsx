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
  const feedPost = await fetchQuery(api.feed.getFeedPost, {
    slug: slugWithoutSpaces,
  });

  return {
    title: `${feedPost?.title || slugWithoutSpaces} - infs.world`,
    description: "Feed post on infs.world",
    keywords: feedPost?.tags || [],
    authors: {
      name: "Luca Kuiper",
      url: "https://infs.world",
    },
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
