"use client";

import { cn } from "@/lib/utils";
import { cubicBezier, motion } from "framer-motion";
import React from "react";

export default function InAnimationWrapper({
  children,
  side,
  className,
  delay,
}: {
  children: React.ReactNode;
  side?: "up" | "down";
  className?: string;
  delay?: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: side === "up" ? "100%" : side === "down" ? "-100%" : 0,
          scale: 0.825,
          filter: "blur(6px)",
        }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{
          duration: 1.2,
          delay: delay || 0,
          ease: cubicBezier(0.22, 0.61, 0.36, 1),
        }}
        className={cn("flex justify-center", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}
