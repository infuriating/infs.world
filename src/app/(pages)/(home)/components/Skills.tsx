"use client";

import SectionTitle from "./ui/section-title";
import Tag from "./ui/tag";

export default function Skills() {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-xl flex-col">
        <Tag number={2} />
        <SectionTitle title="Skills" />
        <div className="flex flex-col gap-y-4 text-lg">
          <p>
            As a full stack developer, I&apos;m most experienced with Next.js,
            TypeScript, Node.js, and TailwindCSS.
          </p>
          <p>
            Other technologies I&apos;ve worked with as a full stack developer
            include MongoDB, tRPC, Vue, Laravel, and more to mention.
          </p>
        </div>
      </div>
    </div>
  );
}
