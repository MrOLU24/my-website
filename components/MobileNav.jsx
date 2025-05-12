"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons for each link
import { AiFillHome } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Links = [
  {
    name: "home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    name: "services",
    path: "/services",
    icon: <MdDesignServices />,
  },
  {
    name: "resume",
    path: "/resume",
    icon: <FaRegFileAlt />,
  },
  {
    name: "work",
    path: "/work",
    icon: <MdWork />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <IoMdContact />,
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/50 border-t border-white/10 z-50">
      <nav className="flex justify-between px-6 py-3">
        {Links.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={index}
              href={link.path}
              className={`flex flex-col items-center text-sm transition-all ${
                isActive ? "text-accent-solid" : "text-white"
              }`}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-xs capitalize">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileNav;