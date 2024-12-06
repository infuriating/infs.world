import AllComponents from "./AllComponents";
import About from "./components/About";
import FeedWrapper from "./components/feed/FeedWrapper";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import WorkWrapper from "./components/work/WorkWrapper";

export default function Home() {
  const components = [
    <About key={2} />,
    <Skills key={3} />,
    <WorkWrapper key={4} />,
    <FeedWrapper key={5} />,
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
