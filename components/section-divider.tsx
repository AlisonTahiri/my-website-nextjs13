"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider({
  hideDivider,
}: {
  hideDivider?: boolean;
}) {
  return (
    <>
      {hideDivider ? (
        <div className="my-16 sm:my-24" />
      ) : (
        <div className="flex justify-center my-16 sm:my-24">
          <motion.div
            className="sm:h-16 sm:w-[2px] w-16 h-[2px] rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.125, duration: 0.5 }}
          />
        </div>
      )}
    </>
  );
}
