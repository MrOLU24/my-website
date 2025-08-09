"use client";

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle, 
  SheetDescription 
} from "@/components/ui/sheet";
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
    // Close the menu immediately
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetTrigger asChild>
        <button 
          className="flex justify-center items-center relative z-10" 
          aria-label="Open navigation menu"
          style={{ pointerEvents: 'auto' }}
        >
          <CiMenuFries className="text-[32px] text-accent-solid" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col z-[45]" side="right">
        {/* Hidden but accessible title and description for screen readers */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to different sections of the portfolio website
        </SheetDescription>
        
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold">
              MrOLU <span className="text-accent-solid">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-5 justify-center" role="navigation" aria-label="Mobile navigation">
          {Links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={handleLinkClick}
              prefetch={true}
              className={`${
                link.path === pathname
                  ? "text-accent-solid border-b-2 border-accent-solid"
                  : ""
              } text-xl capitalize hover:text-accent-hover transition-all block w-full text-center py-2 relative z-10`}
              style={{ pointerEvents: 'auto' }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};export default MobileNav;
