"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8" role="navigation" aria-label="Main navigation">
      {Links.map((linkItem) => {
        const isActive = pathname === linkItem.path;
        return (
          <Link
            href={linkItem.path}
            key={linkItem.path}
            prefetch={true}
            aria-current={isActive ? "page" : undefined}
            className={`capitalize font-medium transition-colors relative z-10 ${
              isActive
                ? "text-accent-solid border-b-2 border-accent-solid"
                : "hover:text-accent-solid-hover"
            }`}
            style={{ pointerEvents: 'auto' }}
          >
            {linkItem.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
