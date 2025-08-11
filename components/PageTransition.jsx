"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.4, 
            ease: "easeInOut" 
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -20,
          transition: { 
            duration: 0.2, 
            ease: "easeInOut" 
          }
        }}
        className="min-h-screen"
        style={{ pointerEvents: 'auto' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;