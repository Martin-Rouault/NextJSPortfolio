"use client";

import { useState, useEffect } from "react";
import Sun from "@/app/icons/sun";
import Moon from "@/app/icons/moon";
import { useTheme } from "next-themes";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {resolvedTheme === "dark" ? (
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme("light")}
                className="flex items-center p-2"
              >
                <Sun />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Light</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme("dark")}
                className="flex items-center p-2"
              >
                <Moon />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dark</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
}
