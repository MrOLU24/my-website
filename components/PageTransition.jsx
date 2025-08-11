"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Slide-in transition overlay */}
      <motion.div
        key={`overlay-${pathname}`}
        initial={{ x: "100%" }}
        animate={{ x: transitioning ? "0%" : "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1], // Custom easing
        }}
        className="fixed inset-0 z-40 bg-gradient-to-r from-accent-solid to-primary-solid opacity-90 pointer-events-none"
        style={{ display: transitioning ? "block" : "none" }}
      />

      {/* Content with smooth fade and slide */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Geometric accent animation */}
      <motion.div
        key={`accent-${pathname}`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: transitioning ? 1 : 0,
          opacity: transitioning ? 1 : 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0.1
        }}
        className="fixed top-0 left-0 h-1 bg-accent-solid z-50 pointer-events-none"
        style={{ 
          width: "100%",
          transformOrigin: "left",
          display: transitioning ? "block" : "none"
        }}
      />
    </>
  );
};

export default PageTransition;