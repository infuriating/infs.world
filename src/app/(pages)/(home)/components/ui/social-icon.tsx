import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function SocialIcon({
  url,
  icon,
  medium,
}: {
  url: string;
  icon: IconProp;
  medium: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link href={url} target="_blank">
          <FontAwesomeIcon className="h-10 w-10" icon={icon} />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent>
        <p>{medium}</p>
        <p className="text-muted-foreground">
          {url.includes("https://")
            ? url.slice(url.indexOf("/") + 2)
            : url.replace("mailto:", "")}
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}
