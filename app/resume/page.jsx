"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  Fajs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  siMongodb,
  siExpress,
  siPostgresql,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with a strong foundation in front-end and back-end technologies. I love creating dynamic and responsive web applications that provide an excellent user experience. My goal is to continuously learn and improve my skills while contributing to exciting projects.",
  info: [
    { fieldName: "Name", fieldValue: "MrOLU" },
    { fieldName: "Email", fieldValue: "abdulafeezoluwashola2@gmail.com" },
    { fieldName: "Phone", fieldValue: "+2348026709004" },
    { fieldName: "Location", fieldValue: "Lagos, Nigeria" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    { fieldName: "Education", fieldValue: "Diploma in Frontend Development" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English" },
  ],
};

const skills = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My Skills",
  description:
    "I have worked on various projects using different technologies.",
  items: [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      duration: "Jan 2023",
      description:
        "Developed and maintained responsive web applications using React, Tailwind CSS, and Next.js.",
    },
    {
      title: "Frontend Developer",
      company: "Teckcify",
      duration: "Jan 2024",
      description:
        "Worked on multiple projects using React and TypeScript. Collaborated with designers to create user-friendly interfaces.",
    },
    {
      title: "video Editor",
      company: "Video Company",
      duration: "Jan 2024",
      description:
        "Edited and produced videos for various clients using Adobe Premiere Pro and After Effects.",
    },
    {
      title: "Digital Marketer",
      company: "Marketing Company",
      duration: "Jan 2024",
      description:
        "Developed and executed digital marketing strategies to increase brand awareness and drive traffic to websites.",
    },
  ],
};

const Resume = () => {
  return <div>resume page coming soon</div>;
};

export default Resume;
