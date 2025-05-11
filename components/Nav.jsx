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
    <nav className="flex gap-8">
      {Links.map((linkItem) => (
        <Link
          href={linkItem.path}
          key={linkItem.path} // Better key using path instead of index
          className={`capitalize font-medium transition-colors ${
            pathname === linkItem.path
              ? "text-accent-solid border-b-2 border-accent-solid"
              : "hover:text-accent-solid-hover"
          }`}
        >
          {linkItem.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
