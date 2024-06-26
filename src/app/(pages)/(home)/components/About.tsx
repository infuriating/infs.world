"use client";

import React from "react";
import Tag from "./ui/tag";
import GradientText from "@/components/ui/gradient-text";
import SectionTitle from "./ui/section-title";
import Link from "next/link";
import { getAgeFromBirthdate } from "@/lib/functions";

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-full max-w-xl flex-col">
        <Tag number={1} />
        <SectionTitle title="About me" />
        <div className="flex flex-col gap-y-4 text-lg">
          <p>
            I&apos;m Luca Kuiper, a {getAgeFromBirthdate("2003-03-11")}-year-old{" "}
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
          <Link
            href={"/about"}
            className="underline underline-offset-2 transition-all hover:text-neutral-300 hover:no-underline"
          >
            If you&apos;d like to know more about me, visit my about page!
          </Link>
        </div>
      </div>
    </div>
  );
}
