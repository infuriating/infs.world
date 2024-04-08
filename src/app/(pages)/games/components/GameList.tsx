"use client";

import { Preloaded, usePreloadedQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../convex/_generated/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function GameList(params: {
  preloadedGames: Preloaded<typeof api.game.getAll>;
}) {
  const games = usePreloadedQuery(params.preloadedGames);
  if (!games) return;

  const formatStatus = (status: string) => {
    switch (status) {
      case "played":
        return false;
      case "currentlyPlaying":
        return "I still play this game to this day.";
      case "completed":
        return "I have completed this game.";
      default:
        return status;
    }
  };

  return (
    <div className="flex justify-center pb-4">
      <div className="flex w-full flex-col gap-y-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <p className="text-xl font-bold md:text-2xl lg:text-4xl">
          A collection of the games I have played.
        </p>
        <p className="text-muted-foreground lg:text-xl">
          Nothing too important, but maybe we share some interests in games!
        </p>
        <Accordion type="single" className="w-full" collapsible>
          {games.map((game) => (
            <AccordionItem key={game._id} value={game._id}>
              <AccordionTrigger className="text-xl">
                {game.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-1.5">
                <Separator className="mb-1" />
                <p className="text-lg font-medium">{game.description}</p>
                {game.rank && (
                  <div className="flex flex-col gap-y-1">
                    <p className="text-base font-medium">Rank</p>
                    <p>
                      Peak: {game.rank.peak}
                      {game.rank.current && ` | Current: ${game.rank.current}`}
                    </p>
                  </div>
                )}
                {formatStatus(game.status) && (
                  <p className="text-base">{formatStatus(game.status)}</p>
                )}
                {game.status === "completed" && game.difficulties && (
                  <div className="flex flex-col">
                    <p className="text-base font-medium">Difficulties</p>
                    <p>{game.difficulties.join(", ")}</p>
                  </div>
                )}
                {game.hoursPlayed ? (
                  <p className="text-base">
                    I have played this game for{" "}
                    <span className="font-bold">{game.hoursPlayed}</span> hours
                  </p>
                ) : (
                  <p className="text-base">
                    I have not yet specified or have no clue how many hours I
                    have played this game for.
                  </p>
                )}
                <div className="flex flex-col">
                  <p className="text-base font-medium">
                    Platform{game.platform.length > 1 ? "s" : ""}
                  </p>
                  <p className="text-sm">{game.platform.join(", ")}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
