"use client";

import GradientText from "@/components/ui/gradient-text";
import { getAgeFromBirthdate } from "@/lib/functions";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import SectionTitle from "./ui/section-title";
import Tag from "./ui/tag";

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
          <Link
            href={"/about"}
            className="flex items-center gap-1 underline underline-offset-2 transition-all hover:text-neutral-300"
          >
            Learn more about me <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
