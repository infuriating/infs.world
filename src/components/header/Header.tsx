"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ResumeButton from "../ResumeButton";

const routes = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Feed",
    href: "/feed",
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
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          className="h-12 object-contain"
          alt="infs.world logo"
          width={100}
          height={56}
        />
      </Link>
      {/* <MobileDrawer routes={routes} pathname={pathname} /> */}
    </div>
  );

  const DesktopHeader = () => (
    <div className="fixed z-50 hidden h-16 w-screen items-center justify-between bg-black/50 px-4 backdrop-blur-lg md:flex">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          className="h-12 object-contain"
          alt="infs.world logo"
          width={100}
          height={56}
        />
      </Link>
      <div className="flex items-center gap-x-6">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <p
              className={`${pathname.includes(route.href) ? "text-white" : "text-muted-foreground"} font-medium text-muted-foreground transition-all hover:text-white`}
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
