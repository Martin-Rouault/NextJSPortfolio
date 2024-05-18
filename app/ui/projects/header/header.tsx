"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <h1 className="text-xl font-semibold tracking-tighter mb-2">Work</h1>
      <div className="flex items-center space-x-2">
        <p className="text-[17px] text-neutral-600 dark:text-neutral-400">
          Here are some of my projects. I hope you like them!
        </p>
        <motion.div
          initial={{ y: 20, x: -15, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 100 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          🚀
        </motion.div>
      </div>
    </>
  );
}
