"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

export default function AnimatedBadge({ text, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${className}`}
      style={{
        background: "var(--gradient-primary)",
        color: "#fff",
      }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
      </span>
      {text}
    </motion.div>
  );
}
