"use client";

import React from "react";
import Tag from "./ui/tag";
import SectionTitle from "./ui/section-title";

export default function Skills() {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-xl flex-col">
        <Tag number={2} />
        <SectionTitle title="Skills" />
        <div className="flex flex-col gap-y-4 text-lg">
          <p>
            Technology wise I&apos;m most experienced with Next.js, TypeScript,
            Node.js, SQL and TailwindCSS.
          </p>
          <p>
            I am also familiar with React Native, MongoDB, tRPC, Firebase,
            Convex and Drizzle.
          </p>
        </div>
      </div>
    </div>
  );
}
