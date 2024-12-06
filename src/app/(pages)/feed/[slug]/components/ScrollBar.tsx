"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function FeedScrollBar() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest);
  });

  return (
    <div className="pointer-events-none absolute -left-4 top-0 -z-10 h-full w-full">
      <motion.div
        style={{
          height: `${scrollY * 100}%`,
        }}
        className="absolute w-4 bg-gradient-to-b from-purple-900 to-purple-950"
      />
    </div>
  );
}
