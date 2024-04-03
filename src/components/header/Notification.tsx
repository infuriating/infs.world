"use client";

import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface NotificationProps {
  message: string;
  visible: boolean;
}

export default function Notification({
  message,
  nav,
}: {
  message: string;
  nav: string;
}) {
  let notification: NotificationProps;
  notification = JSON.parse(localStorage.getItem("notification") || "{}");

  const [data, setData] = useState(notification);
  const [show, setShow] = useState(data.visible);

  if (data.message !== message) {
    setData({ message, visible: true });
    localStorage.setItem(
      "notification",
      JSON.stringify({ message, visible: true }),
    );
  }

  const handleClick = () => {
    setShow(false);
    setData({ message, visible: false });
    localStorage.setItem(
      "notification",
      JSON.stringify({ message, visible: false }),
    );
  };

  return (
    <>
      {show && (
        <div className="relative flex items-center justify-center bg-purple-950 py-1.5 text-xs">
          <div
            className="absolute right-2 cursor-pointer"
            onClick={handleClick}
          >
            <X
              className="transition-all duration-100 hover:scale-110"
              size={14}
            />
          </div>
          <Link href={nav} className="flex items-center gap-x-1">
            {message} <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </>
  );
}
