"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeButton } from "../themeButton/themeButton";
import Home from "../icons/home";
import Work from "../icons/work";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", svg: <Home /> },
  { href: "/projects", svg: <Work /> },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState({
    home: false,
    work: false,
    theme: false,
  });

  const handleMouseEnter = (button: string) => {
    setIsHovered({ ...isHovered, [button]: true });
  };

  const handleMouseLeave = (button: string) => {
    setIsHovered({ ...isHovered, [button]: false });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const path = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-12 px-6">
      <div className="pointer-events-auto relative mx-auto space-x-3 flex h-full items-center rounded-[14px] bg-white dark:bg-neutral-900 px-0.5 shadow-[rgba(142,140,152,0.3)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px]">
        {links.map((link) => (
          <div key={link.href}>
            <Link href={link.href} aria-label="link">
              <div
                className={`${
                  link.href === path && "bg-neutral-100 dark:bg-neutral-800"
                } p-2 rounded-[14px]  transition-colors duration-200 ease-in-out`}
              >
                {link.svg}
              </div>
            </Link>
          </div>
        ))}
        <button aria-label="menu">
          <div
            className="p-2 rounded-xl transition-colors duration-200 ease-in-out"
            onClick={toggleMenu}
          >
            <div
              className={`min-w-[150px] py-1 px-1 rounded-lg bg-white dark:bg-neutral-800 shadow-md transition-all duration-100 ease-in-out absolute bottom-8 ${
                isMenuOpen
                  ? "z-10 -translate-y-6 opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <div className="flex flex-col items-start space-y-1 text-left">
                <a
                  href="https://github.com/Martin-Rouault"
                  target="_blank"
                  className="text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 rounded-lg w-full"
                >
                  <span className="font-mono">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/martin-rouault/"
                  target="_blank"
                  className="text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 rounded-lg w-full"
                >
                  <span className="font-mono">Linkedin</span>
                </a>
                <a
                  className="text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 rounded-lg w-full"
                  download
                  href="/cv-martin.pdf"
                >
                  <span className="font-mono">Download.CV</span>
                </a>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-grip-horizontal"
            >
              <circle cx="12" cy="9" r="1" />
              <circle cx="19" cy="9" r="1" />
              <circle cx="5" cy="9" r="1" />
              <circle cx="12" cy="15" r="1" />
              <circle cx="19" cy="15" r="1" />
              <circle cx="5" cy="15" r="1" />
            </svg>
          </div>
        </button>
        <div
          className="hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-[14px] transition-colors duration-200 ease-in-out"
          title="Theme"
          onMouseEnter={() => handleMouseEnter("theme")}
          onMouseLeave={() => handleMouseLeave("theme")}
        >
          {isHovered.theme && (
            <div className="absolute bottom-14 right-0 bg-white dark:bg-neutral-800 text-xs p-2 rounded-lg">
              Theme
            </div>
          )}
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
