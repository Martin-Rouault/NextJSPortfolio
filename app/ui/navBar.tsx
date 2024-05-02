"use client";

import Link from "next/link";
import { useState } from "react";


// why the import of cv is not working?
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
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
        </Link>
        <Link href="/projects">
          <div className="hover:bg-neutral-900 p-2 rounded-xl  transition-colors duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
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
                <a className="text-sm hover:bg-neutral-700 p-2 rounded-lg w-full" >
                  <span>Download.CV</span>
                </a>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </button>
        <div className="hover:bg-neutral-900 p-2 rounded-xl transition-colors duration-200 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
