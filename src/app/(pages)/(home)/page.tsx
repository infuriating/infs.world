import React from "react";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkWrapper from "./components/work/WorkWrapper";
import BlogWrapper from "./components/blog/BlogWrapper";
import AllComponents from "./AllComponents";

export default function Home() {
  const components = [
    <About key={2} />,
    <Skills key={3} />,
    <WorkWrapper key={4} />,
    <BlogWrapper key={5} />,
  ];
  return (
    <div className="relative flex min-h-[calc(100_-_104px)] w-full flex-col justify-between gap-16 pb-4">
      <main className="flex w-full flex-col justify-center">
        <div className="flex flex-col gap-12">
          <Introduction />
          <AllComponents components={components} />
        </div>
      </main>
    </div>
  );
}
