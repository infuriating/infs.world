import React from "react";
import Header from "./header/Header";
import Grain from "./Grain";
import ReturnButton from "./ReturnButton";
import Notification from "./header/Notification";

export default function Page({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="pointer-events-none fixed z-40">
        <div className="relative z-10 flex h-screen w-screen flex-col items-center justify-center gap-x-4 gap-y-4 overflow-hidden">
          <div className="lg:-96 absolute -left-6 -top-4 aspect-square h-48 w-48 rounded-full bg-gradient-to-br from-fuchsia-600 to-transparent opacity-80 blur-[120px] lg:-left-24 lg:-top-16 lg:h-96"></div>
          <div className="absolute -bottom-12 -right-10 aspect-square h-48 w-48 rounded-full bg-gradient-to-br from-fuchsia-900 to-transparent opacity-90 blur-[120px] lg:-bottom-48  lg:-right-40 lg:h-96 lg:w-96"></div>
          <div className="hidden aspect-square h-36 w-36 rounded-full bg-gradient-to-br from-fuchsia-800 to-transparent opacity-90 blur-[105px] lg:absolute lg:-bottom-14 lg:-left-14 lg:block"></div>
        </div>
      </div>
      <Notification message="Check out my new blog!" nav={"/blog"} />
      <Header />
      <Grain />

      <div className="flex flex-col justify-center px-4 pt-20 lg:pt-28">
        <ReturnButton />
        {children}
      </div>
    </>
  );
}
