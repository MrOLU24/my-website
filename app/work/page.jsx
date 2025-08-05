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
import WorkSliderBtn from "@/components/WorkSlideBtn";

const projects = [
  {
    num: "01",
    category: "kayverified barber",
    description: "Modern barbershop website with online booking system and service showcase",
    title: "Kayverified Barber",
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/thumb8.png",
    live: "https://www.kayverified.com/",
    github: "#",
  },
  {
    num: "02",
    category: "Trustpeer",
    title: "p2p Platform",
    description: "Secure peer-to-peer cryptocurrency trading platform with escrow services",
    stack: [{ name: "Nestjs" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb2.png",
    live: "https://trustpeer-201.vercel.app/",
    github: "",
  },
  {
    num: "03",
    category: "Video editing",
    title: "Xora Video Editing",
    description: "Professional video editing service landing page with portfolio showcase",
    stack: [{ name: "React" }, { name: "JavaScript" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    live: "https://xora-page.vercel.app/",
    github: "https://github.com/MrOLU24/XORA",
  },
  {
    num: "04",
    category: "E-commerce",
    title: "E-commerce website",
    description: "Full-featured online store with cart, payments, and inventory management",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: " Movie App",
    title: "Movie App",
    description: "Interactive movie discovery app with ratings, reviews, and watchlist features",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb5.png",
    live: "https://movie-app-seven-mauve.vercel.app/",
    github: "https://github.com/MrOLU24/movieApp",
  },
  {
    num: "06",
    category: "Portfolio",
    title: "Portfolio",
    description: "Personal portfolio website showcasing projects and professional experience",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb6.png",
    live: "https://mrolu-webdev.vercel.app/",
    github: "/",
  }
];

const Work = () => {
  const [projectsData, setProjectsData] = useState(projects[0]);
  const [swiperRef, setSwiperRef] = useState(null);
  
  const handleSlideChange = (swiper) => {
    // Get the current index of the active slide
    const currentIndex = swiper.activeIndex;
    // Update the projectsData state with the new project data
    setProjectsData(projects[currentIndex]);
  };

  const goToSlide = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (swiperRef) {
        if (event.key === 'ArrowLeft') {
          swiperRef.slidePrev();
        } else if (event.key === 'ArrowRight') {
          swiperRef.slideNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [swiperRef]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projectsData.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-solid transition-all duration-500 capitalize">
                {projectsData.category} App
              </h2>
              <p className="">{projectsData.description}</p>
              <ul>
                {projectsData.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent-solid">
                    {item.name}
                    {index !== projectsData.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              
              {/* Project Number Indicators */}
              <div className="flex gap-2 mb-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      projectsData.num === projects[index].num
                        ? 'bg-accent-solid'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to project ${projects[index].num}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-4 items-center">
                {/* Live Project Link */}
                {projectsData.live && projectsData.live !== "" ? (
                  <Link href={projectsData.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-solid transition-all duration-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-50 cursor-not-allowed">
                    <BsArrowUpRight className="text-white text-3xl" />
                  </div>
                )}

                {/* GitHub Link */}
                {projectsData.github &&
                projectsData.github !== "" &&
                projectsData.github !== "#" ? (
                  <Link href={projectsData.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent-solid transition-all duration-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-50 cursor-not-allowed">
                    <BsGithub className="text-white text-3xl" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={false}
              className="xl:h-[520px] mb-12 rounded-lg"
              onSlideChange={handleSlideChange}
              onSwiper={setSwiperRef}
              initialSlide={0}
              watchSlidesProgress={true}
              centerInsufficientSlides={true}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center rounded-lg overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="w-full h-full relative p-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-all duration-500 rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        onError={(e) => {
                          console.log(`Failed to load image: ${project.image}`);
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent-solid hover:bg-accent-hover text-primary-solid text-[22px] w-[44px] flex justify-center items-center transition-all duration-500"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
