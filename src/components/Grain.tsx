"use client";

import React, { useEffect, useRef, useCallback } from "react";

const keyframesX = [
  "0%",
  "-5%",
  "-15%",
  "7%",
  "-5%",
  "-15%",
  "15%",
  "0%",
  "3%",
  "-10%",
];
const keyframesY = [
  "0%",
  "-10%",
  "5%",
  "-25%",
  "25%",
  "10%",
  "0%",
  "15%",
  "35%",
  "10%",
];

export default function Grain() {
  const grainRef = useRef<HTMLDivElement>(null);

  const animateGrain = useCallback(() => {
    let i = 0;
    const grain = grainRef.current;
    if (!grain) return;

    return setInterval(() => {
      grain.style.transform = `translateX(${
        keyframesX[i % keyframesX.length]
      }) translateY(${keyframesY[i % keyframesY.length]})`;

      i++;
    }, 50);
  }, []);

  useEffect(() => {
    const interval = animateGrain();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [animateGrain]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden">
      <div
        ref={grainRef}
        className="absolute inset-[-200%] h-[400%] w-[400%] bg-[url('/assets/grain.png')] bg-[length:256px] bg-left-top opacity-[3%]"
      />
    </div>
  );
}
