"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {Links.map((linkItem, index) => {
        return (
          <Link
            href={linkItem.path}
            key={index}
            className={`${
              linkItem.path === pathname &&
              "text-accent-solid border-b-2 border-accent-solid"
            } capitalize font-medium hover:text-accent-solid-hover transition-all`}
          >
            {linkItem.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;