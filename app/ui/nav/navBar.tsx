"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-12 px-6">
      <div className="pointer-events-auto relative mx-auto space-x-2 flex h-full bg-neutral-950 items-center rounded-[14px] bg-mauve-light-1 px-0.5 shadow-[rgba(142,140,152,0.3)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px]">
        <Link href="/">
          <div
            className="hover:bg-neutral-900 p-2 rounded-[14px] transition-colors duration-200 ease-in-out"
            title="Home"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={() => handleMouseLeave("home")}
          >
            {isHovered.home && (
              <div className="absolute left-0 bottom-14 bg-neutral-900 p-2 text-xs rounded-lg border-2 border-neutral-800">
                Home
              </div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
        </Link>
        <Link href="/projects">
          <div
            className="hover:bg-neutral-900 p-2 rounded-[14px] transition-colors duration-200 ease-in-out"
            title="Work"
            onMouseEnter={() => handleMouseEnter("work")}
            onMouseLeave={() => handleMouseLeave("work")}
          >
            {isHovered.work && (
              <div className="absolute bottom-14 right-24 bg-neutral-900 p-2 text-xs rounded-lg border-2 border-neutral-800">
                Work
              </div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-business"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </div>
        </Link>
        <button aria-label="menu">
          <div
            className="p-2 rounded-xl transition-colors duration-200 ease-in-out"
            onClick={toggleMenu}
          >
            <div
              className={`min-w-[150px] py-1 px-1 rounded-lg border-2 border-neutral-800 bg-neutral-900 shadow-md transition-all duration-100 ease-in-out absolute bottom-8 ${
                isMenuOpen
                  ? "z-10 -translate-y-6 opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <div className="flex flex-col items-start space-y-1 text-left">
                <a
                  href="https://github.com/Martin-Rouault"
                  target="_blank"
                  className="text-sm hover:bg-neutral-700 p-2 rounded-lg w-full"
                >
                  <span className="font-mono">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/martin-rouault/"
                  target="_blank"
                  className="text-sm hover:bg-neutral-700 p-2 rounded-lg w-full"
                >
                  <span className="font-mono">Linkedin</span>
                </a>
                <a
                  className="text-sm hover:bg-neutral-700 p-2 rounded-lg w-full"
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
          className="hover:bg-neutral-900 p-2 rounded-[14px] transition-colors duration-200 ease-in-out"
          title="Theme"
          onMouseEnter={() => handleMouseEnter("theme")}
          onMouseLeave={() => handleMouseLeave("theme")}
        >
          {isHovered.theme && (
            <div className="absolute bottom-14 right-0  bg-neutral-900 text-xs p-2 rounded-lg border-2 border-neutral-800">
              Theme
            </div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sun"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </div>
      </div>
    </div>
  );
}
