"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    description: "XORA Landing page design",
    title: "XORA",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb1.png",
    live: "https://xora.vercel.app/",
    github: "https://github.com/yourusername/xora",
  },
  {
    num: "02",
    category: "frontend",
    title: "Movie App",
    description: "A movie app using TMDB API",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb2.png",
    live: "https://movie-app.vercel.app/",
    github: "https://github.com/yourusername/movie-app",
  },
  {
    num: "03",
    category: "frontend",
    title: "Weather App",
    description: "A weather app using OpenWeatherMap API",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    live: "https://weather-app.vercel.app/",
    github: "https://github.com/yourusername/weather-app",
  },
];

const Work = () => {
  const [projectsData, setProjectsData] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projectsData.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-solid transition-all duration-500 capitalize">
                {projectsData.category} project
              </h2>
              <p className="">{projectsData.description}</p>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
