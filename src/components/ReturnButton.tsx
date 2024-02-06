"use client";

import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ReturnButton() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="w-screen pb-4 lg:px-8">
      <Link href={"/"} className="group flex items-center gap-x-2">
        <ArrowLeftSquare className="h-8 w-8 opacity-50 transition-all group-hover:scale-110 group-hover:opacity-75" />
        <p>
          <span className="opacity-75 transition-all group-hover:opacity-75 md:opacity-0">
            Return
          </span>
        </p>
      </Link>
    </div>
  );
}
