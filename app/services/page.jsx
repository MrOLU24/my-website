"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceItems = [
  {
    num: 1,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    href: "",
  },
  {
    num: 2,
    title: "Mobile Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    href: "",
  },
  {
    num: 3,
    title: "Vidio Editor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    href: "",
  },
  {
    num: 4,
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 justify-center gap-6 group"
            >
              <div className="w-full flex items-center justify-between">
                <div className="text-6xl font-extrabold text-outline text-transparent">
                  {item.num}
                </div>
                <Link href={item.href}>
                  <BsArrowDownRight />
                </Link>
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
