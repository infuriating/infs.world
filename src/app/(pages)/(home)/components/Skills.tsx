"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";
import Tag from "./ui/tag";
import SectionTitle from "./ui/section-title";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 3.75,
        duration: 0.75,
        ease: cubicBezier(0.22, 0.61, 0.36, 1),
      }}
      className="flex justify-center opacity-0"
    >
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
    </motion.div>
  );
}
