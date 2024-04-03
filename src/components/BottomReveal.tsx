"use client";

import React, { useEffect, useState } from "react";

export default function BottomReveal() {
  const [pageHeight, setPageHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const height = document.body.scrollHeight;
    setWindowHeight(window.innerHeight);
    setPageHeight(height);

    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });

    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <div
      style={{
        opacity: 1 - scrollY / (pageHeight - windowHeight),
      }}
      className="pointer-events-none fixed z-50 h-full w-full bg-gradient-to-b from-transparent from-35% to-black to-90% lg:from-20%"
    ></div>
  );
}
