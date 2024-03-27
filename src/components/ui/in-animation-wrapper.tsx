import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { cn } from "@/lib/utils";

export default function InAnimationWrapper({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: "100%", scale: 0.925, filter: "blur(6px)" }}
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
