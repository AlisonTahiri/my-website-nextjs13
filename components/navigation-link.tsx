import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {
  name: string;
  hash: string;
  onClick: () => void;
  isActive: boolean;
};

export default function NavLink({ hash, isActive, name, onClick }: Props) {
  return (
    <motion.li
      className="h-3/4 flex items-center justify-center relative"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        className={clsx(
          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
          {
            "text-gray-950 dark:text-gray-100": isActive,
          }
        )}
        href={hash}
        onClick={onClick}
      >
        {name}

        {isActive && (
          <motion.span
            className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          ></motion.span>
        )}
      </Link>
    </motion.li>
  );
}
