"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Notification({
  message,
  nav,
}: {
  message: string;
  nav: string;
}) {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="relative flex items-center justify-center bg-purple-950 py-1.5 text-xs">
          <div
            className="absolute right-2 cursor-pointer"
            onClick={() => setShow(false)}
          >
            X
          </div>
          <Link href={nav} className="flex items-center gap-x-1">
            {message} <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </>
  );
}
