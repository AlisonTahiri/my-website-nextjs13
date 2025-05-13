"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = () => {
    if (theme === "system") {
      systemTheme === "dark" ? setTheme("light") : setTheme("dark");
    } else {
      theme == "dark" ? setTheme("light") : setTheme("dark");
    }
  };

  return (
    <button
      className="mx-2 flex items-center justify-center text-[1.2rem] cursor-pointer transform transition-transform duration-200 hover:scale-110  dark:bg-gray-950"
      onClick={handleChange}
    >
      {theme === "light" ? <BsSun /> : <BsMoon className="text-gray-400" />}
    </button>
  );
}
