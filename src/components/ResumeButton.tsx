"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function ResumeButton() {
  const [selector, setSelector] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelector(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [selector]);

  return (
    <>
      {!selector ? (
        <Button onClick={() => setSelector(!selector)} variant={"shimmer"}>
          My Resume
        </Button>
      ) : (
        <Button variant={"shimmer"}>
          <Link
            className="text-slate-400 transition-all hover:underline"
            href="/resume/luca-kuiper_resume_nl.pdf"
            target="_blank"
          >
            Dutch
          </Link>
          <Separator className="w-4 rotate-90" />
          <Link
            className="text-slate-400 transition-all hover:underline"
            href="/resume/luca-kuiper_resume_en.pdf"
            target="_blank"
          >
            English
          </Link>
        </Button>
      )}
    </>
  );
}
