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

  console.log({ systemTheme, theme });

  const handleChange = () => {
    if (theme === "system") {
      systemTheme === "dark" ? setTheme("light") : setTheme("dark");
    } else {
      theme == "dark" ? setTheme("light") : setTheme("dark");
    }
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleChange}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
