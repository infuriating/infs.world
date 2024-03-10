"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";
import Tag from "./ui/tag";
import GradientText from "@/components/ui/gradient-text";
import SectionTitle from "./ui/section-title";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 3.25,
        duration: 1.25,
        ease: cubicBezier(0.22, 0.61, 0.36, 1),
      }}
      className="flex justify-center opacity-0"
    >
      <div className="relative flex w-full max-w-xl flex-col">
        <Tag number={1} />
        <SectionTitle title="About me" />
        <div className="flex flex-col gap-y-4 text-lg">
          <p>
            I&apos;m Luca Kuiper, a 21-year-old{" "}
            <GradientText className="font-medium" text="full-stack developer" />{" "}
            based in the Netherlands. I specialize in web development using
            React, with Next.js as my metaframework of choice.
          </p>
          <p>
            With a passion for design and doing the work on the front-end,
            within my heart I also carry a love for back-end.
          </p>
          <p>
            Other than that, I always try to expand my knowledge and improve
            myself physically by working out. I also love to play video games
            and spend time with my girlfriend.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
