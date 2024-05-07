"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center items-center">
      <div className="  bg-black shadow-xl border-2 border-neutral-900 rounded-2xl flex justify-center items-center space-x-1 p-1 max-w-fit">
        <Link href="/">
          <div
            className="hover:bg-neutral-900 p-2 rounded-xl transition-colors duration-200 ease-in-out"
            title="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
        </Link>
        <Link href="/projects">
          <div className="hover:bg-neutral-900 p-2 rounded-xl  transition-colors duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-briefcase-business"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </div>
        </Link>
        <button>
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
                <a className="text-sm hover:bg-neutral-700 p-2 rounded-lg w-full">
                  <span>GitHub</span>
                </a>
                <a className="text-sm hover:bg-neutral-700 p-2 rounded-lg w-full">
                  <span>Linkedin</span>
                </a>
                <a className="text-sm hover:bg-neutral-700 p-2 rounded-lg w-full">
                  <span>Download.CV</span>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
        <div className="hover:bg-neutral-900 p-2 rounded-xl transition-colors duration-200 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
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
