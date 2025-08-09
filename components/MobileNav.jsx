"use client";

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle, 
  SheetDescription 
} from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLinkClick = (path) => {
    setOpen(false); // Close the menu first
    // Use router.push for programmatic navigation
    setTimeout(() => {
      router.push(path);
    }, 100); // Small delay to allow sheet to close
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-solid" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Hidden but accessible title and description for screen readers */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to different sections of the portfolio website
        </SheetDescription>
        
        <div className="mt-32 mb-40 text-center text-2xl">
          <button onClick={() => handleLinkClick("/")}>
            <h1 className="text-4xl font-semibold">
              MrOLU <span className="text-accent-solid">.</span>
            </h1>
          </button>
        </div>
        <nav className="flex flex-col items-center gap-5 justify-center">
          {Links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleLinkClick(link.path)}
              className={`${
                link.path === pathname
                  ? "text-accent-solid border-b-2 border-accent-solid"
                  : ""
              } text-xl capitalize hover:text-accent-hover transition-all`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
