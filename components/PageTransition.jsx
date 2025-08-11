"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(true); // Start with transitioning true
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Handle route changes
    setTransitioning(true);
    const timer = setTimeout(() => {
      setTransitioning(false);
      setIsInitialLoad(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Hide header during transition by adding class to body
  useEffect(() => {
    if (transitioning) {
      document.body.classList.add('hide-header');
    } else {
      document.body.classList.remove('hide-header');
    }
    
    return () => {
      document.body.classList.remove('hide-header');
    };
  }, [transitioning]);

  return (
    <>
      {/* Slide-in transition overlay */}
      <motion.div
        key={`overlay-${pathname}`}
        initial={{ x: "100%" }}
        animate={{ x: transitioning ? "0%" : "100%" }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-0 z-[60] bg-gradient-to-r from-accent-solid/20 to-primary-solid opacity-95 pointer-events-none"
        style={{ display: transitioning ? "block" : "none" }}
      />

      {/* Loading indicator during transition */}
      {transitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-8 h-8 rounded-full bg-accent-solid"
          />
        </motion.div>
      )}

      {/* Content with smooth fade and slide */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3
          }
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;