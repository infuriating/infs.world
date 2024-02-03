import React from "react";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100_-_104px)] w-full flex-col justify-between gap-16 pb-4">
      <main className="flex w-full flex-col justify-center">
        <div className="flex flex-col gap-12">
          <Introduction />
          <About />
          <Skills />
          <Work />
        </div>
      </main>
    </div>
  );
}
