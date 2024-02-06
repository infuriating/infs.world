"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerPortal,
  DrawerFooter,
} from "@/components/ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ResumeButton from "../ResumeButton";
import { motion } from "framer-motion";

export default function MobileDrawer({
  routes,
  pathname,
}: {
  routes: { name: string; href: string }[];
  pathname: string;
}) {
  const [isRendered, setIsRendered] = useState(false);

  const delayRender = async () => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    setIsRendered(true);
  };

  if (!isRendered) {
    delayRender();
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Drawer>
        <DrawerTrigger>
          <Button className="px-2 py-2 text-2xl" variant={"outline"}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
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
        </DrawerPortal>
      </Drawer>
    </motion.div>
  );
}
