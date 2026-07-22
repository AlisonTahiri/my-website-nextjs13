"use client";

import { motion } from "framer-motion";

export default function BgDecorator() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top-right gradient orb */}
      <motion.div
        className="absolute -top-24 right-[10%] h-[500px] w-[700px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left accent orb */}
      <motion.div
        className="absolute top-[20%] -left-[15%] h-[450px] w-[600px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom center orb */}
      <motion.div
        className="absolute bottom-[10%] left-[30%] h-[400px] w-[500px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
