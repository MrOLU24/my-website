import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialsData = [
  { icon: <FaGithub />, path: "https://github.com/MrOLU24" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mrolu-dev" },
  { icon: <FaTwitter />, path: "https://x.com/MrOlu247" },
];
const socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsData.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default socials;
