"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full flex justify-center items-center">
      {/* Shared container for image and circle */}
      <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">
        {/* Animated Circle */}
        <motion.svg
          className="absolute inset-0"
          fill="transparent"
          viewBox="0 0 506 506"
          initial={{ rotate: 120 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{
              strokeDasharray: "24 10 0 0",
              pathLength: 0,
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              pathLength: 1,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="absolute inset-0 mix-blend-lighten"
        >
          <Image
            src="/assets/oluphoto.png"
            priority
            quality={100}
            fill
            alt="olatunji avatar"
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Photo;
