"use client";

import React from "react";
import { cubicBezier, motion } from "framer-motion";

export default function AllComponents({
  components,
}: {
  components: React.ReactNode[];
}) {
  return (
    <>
      {components.map((component, i) => (
        <motion.div
          initial={{ opacity: 0, y: "100%", filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.75,
            delay: 1.25 + i * 0.5,
            ease: cubicBezier(0.22, 0.61, 0.36, 1),
          }}
          key={i}
        >
          {component}
        </motion.div>
      ))}
    </>
  );
}
