import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { calculateReadTime } from "@/lib/functions";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Doc } from "../../../../../convex/_generated/dataModel";

const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function FeedPost({ feed }: { feed: Doc<"feed"> }) {
  const content = feed.content.join("\n");

  return (
    <div className="grid w-full gap-6 px-4 md:gap-8 md:px-6 lg:grid-cols-2 xl:gap-10">
      <div className="aspect-image w-full overflow-hidden rounded-lg">
        {feed.image ? (
          <Image
            alt={feed.title}
            className="aspect-image max-h-96 w-full rounded-lg object-cover"
            height={340}
            width={500}
            src={feed.image}
          />
        ) : (
          <Skeleton className="h-96 w-full" />
        )}
      </div>
      <div className="relative flex h-full flex-col justify-end space-y-3">
        <div className="mt-8 space-y-2">
          <span className="absolute top-0 rounded-md border border-neutral-100/15 bg-neutral-100/5 px-1 py-0.5 text-sm font-medium text-neutral-500">
            {new Date(feed._creationTime).toLocaleDateString()}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight lg:text-3xl xl:leading-[3.5rem]">
            {feed.title}
          </h2>
          <p className="text-xs text-neutral-600 underline underline-offset-2">
            {calculateReadTime(content)} min read
          </p>
        </div>
        <div className="line-clamp-3 text-neutral-400">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "px-0",
            })}
            href={`/feed/${feed.slug}`}
          >
            &rarr; Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
