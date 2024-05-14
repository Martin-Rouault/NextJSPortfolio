"use client";

import { useState, useEffect } from "react";
import Sun from "@/app/ui/icons/sun";
import Moon from "@/app/ui/icons/moon";
import { useTheme } from "next-themes";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const {setTheme, resolvedTheme} = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {resolvedTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="flex items-center"
          title="Toggle dark mode"
        >
          <Sun />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="flex items-center"
          title="Toggle light mode"
        >
          <Moon />
        </button>
      )}
    </>
  );
};
