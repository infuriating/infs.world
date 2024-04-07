import { preloadQuery } from "convex/nextjs";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import GameList from "./components/GameList";

export default async function page() {
  const preloadedGames = await preloadQuery(api.game.getAll);
  return <GameList preloadedGames={preloadedGames} />;
}
