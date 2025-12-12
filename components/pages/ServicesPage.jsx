"use client";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceItems = [
  {
    num: "01",
    title: "Frontend Development",
    desc: "Building performant, accessible web applications with React, Next.js, and TypeScript. Focused on responsive design, component architecture, and optimal Core Web Vitals.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    desc: "Creating cross-platform mobile applications with React Native. Delivering native-like experiences with smooth animations and offline-first capabilities.",
    href: "",
  },
  {
    num: "03",
    title: "UX Research",
    desc: "Conducting user research, usability testing, and data analysis to inform design decisions. Translating insights into actionable product improvements.",
    href: "",
  },
  {
    num: "04",
    title: "UX Engineering",
    desc: "Bridging design and development by implementing design systems, interaction patterns, and accessible UI components that scale across products.",
    href: "",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 justify-center gap-6 group"
            >
              <div className="w-full flex items-center justify-between">
                <div className="text-6xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500">
                  {item.num}
                </div>
                <Link
                  href={item.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-solid transition-all duration-500 flex justify-center items-center hover:rotate-45"
                >
                  <BsArrowUpRight className="text-primary-solid text-3xl transform" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-solid transition-all duration-500">
                {item.title}
              </h2>
              <p className="text-white/60">{item.desc}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
