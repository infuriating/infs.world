"use client";

import React from "react";
import ResumeButton from "./ResumeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    <div className="fixed z-50 flex h-16 w-full items-center justify-between bg-black/50 px-4 backdrop-blur-lg sm:hidden">
      <div />
      <Drawer>
        <DrawerTrigger>
          <Button size={"icon"} className="text-2xl" variant={"outline"}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
            <DrawerDescription>Explore the website</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="mb-2">
              {routes.map((route) => (
                <Link key={route.href} href={route.href}>
                  <p
                    className={`${pathname === route.href ? "text-white" : "text-muted-foreground"} font-medium text-muted-foreground transition-all hover:text-white`}
                  >
                    {route.name}
                  </p>
                </Link>
              ))}
            </div>
            <ResumeButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );

  const DesktopHeader = () => (
    <div className="fixed z-50 hidden h-16 w-full items-center justify-between bg-black/50 px-4 backdrop-blur-lg sm:flex">
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
