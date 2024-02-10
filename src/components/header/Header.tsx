"use client";

import React from "react";
import ResumeButton from "../ResumeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileDrawer from "./MobileDrawer";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  const MobileHeader = () => (
    <div className="fixed z-50 flex h-16 w-screen items-center justify-between bg-black/50 px-4 backdrop-blur-lg md:hidden">
      <div />
      <MobileDrawer routes={routes} pathname={pathname} />
    </div>
  );

  const DesktopHeader = () => (
    <div className="fixed z-50 hidden h-16 w-screen items-center justify-between bg-black/50 px-4 backdrop-blur-lg md:flex">
      <div />
      <div className="flex items-center gap-x-6">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <p
              className={`${pathname === route.href ? "text-white" : "text-muted-foreground"} font-medium text-muted-foreground transition-all hover:text-white`}
            >
              {route.name}
            </p>
          </Link>
        ))}
        <ResumeButton />
      </div>
    </div>
  );

  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
}
