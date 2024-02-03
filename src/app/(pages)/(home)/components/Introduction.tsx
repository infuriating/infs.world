"use client";

import { cubicBezier, motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import React from "react";

export default function Introduction() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-lg flex-col">
        <br />
        <TextGenerateEffect
          className="text-base text-muted-foreground"
          words="Luca Kuiper @ infs.world"
        />
        <TextGenerateEffect
          className="text-2xl"
          words="Bringing web experiences out of this universe. Exploring design, UX and back-end."
        />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 2.75,
            duration: 0.75,
            ease: cubicBezier(0.22, 0.61, 0.36, 1),
          }}
        >
          Get in touch via{" "}
          <Link
            className="text-purple-400 underline transition-all hover:text-purple-500"
            href="https://github.com/infuriating"
          >
            GitHub
          </Link>
          ,{" "}
          <Link
            className="text-purple-400 underline transition-all hover:text-purple-500"
            href="https://linkedin.com/in/lucakuiper>"
          >
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link href="mailto:luca@infs.world">
            <span className="text-purple-400 underline transition-all hover:text-purple-500">
              email
            </span>
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
