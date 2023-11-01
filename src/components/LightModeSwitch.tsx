"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdLightbulbOutline, MdLightbulb } from "react-icons/md";

const LightModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const browserTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted &&
        (browserTheme === "dark" ? (
          <MdLightbulbOutline
            className="text-xl cursor-pointer hover:text-emerald-600 transition-all"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdLightbulb
            className="text-xl cursor-pointer hover:text-emerald-600 transition-all"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
};

export default LightModeSwitch;
