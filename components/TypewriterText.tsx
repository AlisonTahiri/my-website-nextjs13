"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  words: string[];
  prefix?: string;
  className?: string;
};

export default function TypewriterText({ words, prefix = "", className = "" }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`inline-flex items-center justify-center gap-2 ${className}`}>
      <span className="text-right w-1/3 shrink-0">{prefix}</span>
      <span className="text-left h-8 w-[11rem] sm:w-[18rem] inline-flex items-center relative overflow-visible">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="inline-block gradient-text font-bold absolute left-0 whitespace-nowrap"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
