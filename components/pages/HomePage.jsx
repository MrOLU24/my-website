"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-3xl font-bold">Frontend & UX Engineer</span>
            <h1 className="h1 mb-6">
              <span className="text-sm">
                Hello I&apos;m <br />
              </span>
              <span className="text-accent-solid">Olatunji Oluwashola</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Frontend & UX engineer shipping production React/Next experiences with measurable business lift. I lead teams to deliver accessible, performant UI systems.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/OLUWASHOLA2_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <a
                href="/certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Certificate</span>
                  <FiDownload />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-solid rounded-full flex justify-center items-center text-center text-accent-solid text-base hover:bg-accent-solid hover:text-primary-solid hover:transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </motion.section>
  );
};

export default HomePage;
