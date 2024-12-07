import GradientText from "@/components/ui/gradient-text";
import { calculateReadTime } from "@/lib/functions";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Doc } from "../../../../../../convex/_generated/dataModel";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function FeedPost(feedPost: Doc<"feed">) {
  const contentText = feedPost.content.join("\n");

  return (
    <div className="group relative h-max text-muted-foreground">
      <GradientText
        className="mb-1 text-xl font-bold brightness-200 saturate-0 transition-all group-hover:brightness-100 group-hover:saturate-100 lg:mb-2"
        text={feedPost.title}
      />
      <div className="mb-2 line-clamp-3 max-w-80 text-base transition-all group-hover:text-white sm:max-w-md lg:mb-0">
        <ReactMarkdown>{contentText}</ReactMarkdown>
      </div>
      <p className="text-xs text-neutral-600">
        {calculateReadTime(contentText)} min read
      </p>
      <Link href={`/feed/${feedPost.slug}`} className="absolute inset-0" />
    </div>
  );
}
