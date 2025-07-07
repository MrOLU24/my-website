"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <>
      <style jsx global>{`
        header {
          display: none !important;
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-screen flex flex-col items-center justify-center py-12 bg-primary-solid"
      >
      <div className="container mx-auto text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
          }}
          className="mb-8"
        >
          <h1 className="text-[150px] md:text-[200px] xl:text-[280px] font-extrabold text-transparent text-outline leading-none">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.6, duration: 0.5, ease: "easeOut" },
          }}
          className="mb-8"
        >
          <h2 className="text-4xl xl:text-6xl font-bold text-white mb-4">
            Page Not Found
          </h2>            <p className="text-lg xl:text-xl text-white/80 max-w-[600px] mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <Button
              variant="default"
              size="lg"
              className="uppercase flex items-center gap-2 min-w-[200px]"
            >
              <FiHome className="text-lg" />
              <span>Go Home</span>
            </Button>
          </Link>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="uppercase flex items-center gap-2 min-w-[200px]"
          >
            <FiArrowLeft className="text-lg" />
            <span>Go Back</span>
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 1, ease: "easeOut" },
          }}
          className="mt-16"
        >
          <div className="flex justify-center items-center gap-2 text-white/40">
            <div className="w-20 h-[1px] bg-white/20"></div>
            <span className="text-sm uppercase tracking-widest">Error</span>
            <div className="w-20 h-[1px] bg-white/20"></div>
          </div>
        </motion.div>

        {/* Navigation Suggestions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1.2, duration: 0.5, ease: "easeOut" },
          }}
          className="mt-12"
        >
          <p className="text-white/60 mb-4">Maybe you were looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/services" 
              className="text-accent-solid hover:text-accent-hover transition-colors"
            >
              Services
            </Link>
            <span className="text-white/20">•</span>
            <Link 
              href="/resume" 
              className="text-accent-solid hover:text-accent-hover transition-colors"
            >
              Resume
            </Link>
            <span className="text-white/20">•</span>
            <Link 
              href="/work" 
              className="text-accent-solid hover:text-accent-hover transition-colors"
            >
              Work
            </Link>
            <span className="text-white/20">•</span>
            <Link 
              href="/contact" 
              className="text-accent-solid hover:text-accent-hover transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default NotFound;
