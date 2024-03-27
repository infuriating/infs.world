import React from "react";
import { motion, cubicBezier } from "framer-motion";

export default function InAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: "120%", scale: 0.925, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{
          delay: 3.1,
          duration: 1.2,
          ease: cubicBezier(0.22, 0.61, 0.36, 1),
        }}
        className="flex justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}
