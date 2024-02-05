import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={url} target="_blank">
            <FontAwesomeIcon
              className="h-6 w-6 transform transition-all duration-200 hover:scale-110"
              icon={icon}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{medium}</p>
          <p className="text-muted-foreground">
            {url.includes("https://")
              ? url.slice(url.indexOf("/") + 2)
              : url.replace("mailto:", "")}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
