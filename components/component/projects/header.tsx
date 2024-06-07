"use client";

import { motion } from "framer-motion";
import TextBlock from "@/app/ui/block/textBlock";

export default function Header() {
  return (
    <div className="mb-12">
      <h1 className="text-xl font-semibold tracking-tighter">Work</h1>
      <div className="flex items-center space-x-2">
        <TextBlock>
          Here are some of my projects. I hope you like them!
        </TextBlock>
        <motion.div
          initial={{ y: 20, x: -15, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 100 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          🚀
        </motion.div>
      </div>
    </div>
  );
}
