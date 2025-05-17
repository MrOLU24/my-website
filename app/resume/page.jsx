"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  // siMongodb,
  // siExpress,
  // siPostgresql,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

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

const experience = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My Experience",
  description:
    " I have worked on various projects, both independently and as part of a team. My experience includes frontend development, digital marketing, and video editing. I am proficient in using modern web technologies to build scalable and efficient applications.",
  items: [
    {
      position: "Frontend Developer",
      company: "Tech Company",
      duration: "Jan 2023",
      description:
        "Developed and maintained responsive web applications using React, Tailwind CSS, and Next.js.",
    },
    {
      position: "Frontend Developer",
      company: "Gopay Inc.",
      duration: "Jan 2024",
      description:
        "Worked on multiple projects using React and TypeScript. Collaborated with designers to create user-friendly interfaces.",
    },
    {
      position: "Video Editor",
      company: "Freelance",
      duration: "Jan 2024",
      description:
        "Edited and produced videos for various clients using Adobe Premiere Pro and After Effects.",
    },
    {
      position: "Digital Marketer",
      company: "Marketing Company",
      duration: "Jan 2024",
      description:
        "Developed and executed digital marketing strategies to increase brand awareness and drive traffic to websites.",
    },
    {
      position: "Frontend Developer",
      company: "Startup Company",
      duration: "Jan 2024",
      description:
        "Worked on a startup project using React and Node.js. Collaborated with a team of developers to build a scalable web application.",
    },
  ],
};

const education = {
  icon: "assets/icons/cap.svg",
  title: "Education",
  description: "My educational background.",
  items: [
    {
      degree: "National Diploma in Computer Science",
      institution: "Gateway Polytechnic",
      year: "2020",
    },
    {
      degree: "Higher National Diploma in Computer Science",
      institution: "Gateway Polytechnic",
      year: "2022",
    },
    {
      institution: "Online Programming Bootcamp",
      degree: "Certificate in Web Developer",
      year: "2023-2024",
    },
    {
      institution: "AltSchool Africa",
      degree: "Diploma in Frontend Engineering",
      year: "2025",
    },
    {
      degree: "Certificate in Digital Marketing",
      institution: "Udemy",
      year: "2024",
    },
    {
      degree: "Certificate in Video Editing",
      institution: "Udemy",
      year: "2025",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a diverse skill set that includes both front-end and back-end technologies. I am always eager to learn new skills and improve my existing ones.",
  skillList: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS 3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    // { name: "Express.js", icon: <siExpress /> },
    // { name: "MongoDB", icon: <siMongodb /> },
    // { name: "PostgreSQL", icon: <siPostgresql /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Python", icon: <FaPython /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="w-full min-h-[70vh]">
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-solid">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
