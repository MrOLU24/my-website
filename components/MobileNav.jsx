"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); // Close the menu no matter which link is clicked
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-solid" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold">
              MrOLU <span className="text-accent-solid">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-5 justify-center">
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={handleLinkClick}
              className={`${
                link.path === pathname
                  ? "text-accent-solid border-b-2 border-accent-solid"
                  : ""
              } text-xl capitalize hover:text-accent-hover transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
