"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
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
    "I'm passionate about crafting digital experiences that feel intuitive and delightful. When I'm not pushing pixels or debugging TypeScript, you'll find me exploring new design patterns, mentoring junior developers, or diving into the latest web technologies. I believe great products come from understanding users deeply and writing code that's as clean as the interfaces it creates.",
  info: [
    { fieldName: "Name", fieldValue: "Oluwashola Olatunji" },
    { fieldName: "Email", fieldValue: "abdulafeezoluwashola2@gmail.com" },
    { fieldName: "Phone", fieldValue: "+2348026709004" },
    { fieldName: "Location", fieldValue: "Lagos, Nigeria" },
    { fieldName: "Experience", fieldValue: "3+ years" },
    { fieldName: "Education", fieldValue: "HND Computer Science" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English" },
  ],
};

const experience = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My Experience",
  description:
    "I have shipped production-grade applications, led cross-functional teams, and consistently delivered measurable business outcomes through UX optimization and modern frontend practices.",
  items: [
    {
      position: "Frontend Engineer",
      company: "Klone",
      duration: "Feb 2025 - Aug 2025",
      description:
        "Redesigned booking flow end-to-end; improved conversion 12% and cut payment drop-off 18%.",
    },
    {
      position: "Frontend Engineer",
      company: "Geeky Experts",
      duration: "Sep 2025 - Dec 2025",
      description:
        "Shipped a browser-based Integrity & Corrosion Analysis platform with Next 15, React 19, TypeScript.",
    },
    {
      position: "Technology Officer",
      company: "Crelivio Incorporations",
      duration: "Sep 2025 - Present",
      description:
        "Delivered 12-month roadmap; launched 3 brand/campaign sites that grew leads by 22%.",
    },
    {
      position: "Frontend Developer",
      company: "Gopay Inc.",
      duration: "Jan 2024 - Sep 2024",
      description:
        "Worked on multiple projects using React and TypeScript. Collaborated with designers to create user-friendly interfaces.",
    },
  ],
};

const education = {
  icon: "assets/icons/cap.svg",
  title: "Education",
  description: "My educational background and certifications.",
  items: [
    {
      degree: "HND Computer Science",
      institution: "Gateway Polytechnic, Ogun State",
      year: "2019 - 2023",
    },
    {
      institution: "AltSchool Africa",
      degree: "Diploma in Frontend Engineering",
      year: "2024",
    },
    {
      degree: "National Diploma in Computer Science",
      institution: "Gateway Polytechnic",
      year: "2019 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I specialize in modern frontend technologies with expertise in React, Next.js, TypeScript, and building accessible, performant UI systems.",
  skillList: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS 3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Figma", icon: <FaFigma /> },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
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
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 text-left">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="text-white/60 min-w-[90px]">
                        {item.fieldName}
                      </span>
                      <span className="text-xl break-all">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
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
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent-solid">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-solid"></span>
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
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent-solid">
                          {item.institution}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-solid"></span>
                          <p className="text-white/60">{item.year}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full mb-10">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger className="flex flex-col items-center justify-center gap-2">
                          <div className="text-accent-solid text-4xl">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
