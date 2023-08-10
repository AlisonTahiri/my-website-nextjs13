import React from "react";
import { motion } from "framer-motion";
import { BsSquare, BsSquareFill } from "react-icons/bs";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

type Props = {
  levelOverTen: number;
};

export default function LanguageLevel({ levelOverTen }: Props) {
  const numberOfEmptySquares = 10 - levelOverTen;

  return (
    <div className="flex gap-1 text-xs text-gray-700 dark:text-gray-400">
      {createArrayFromN(levelOverTen).map((l, i) => (
        <motion.span
          key={i}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={i}
        >
          <BsSquareFill />
        </motion.span>
      ))}

      {createArrayFromN(numberOfEmptySquares).map((l, i) => (
        <motion.span
          key={i}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={i}
        >
          <BsSquare />
        </motion.span>
      ))}
    </div>
  );
}

const createArrayFromN = (n: number) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  return array;
};
