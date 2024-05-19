"use client";

import Image from "next/image";
import martin from "@/public/martin3.jpg";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex items-center mb-20">
      <Image
        alt="picture of me"
        src={martin}
        placeholder="blur"
        className="rounded-full size-16 object-cover"
        loading="lazy"
      />
      <div className="flex items-start flex-col ml-3">
        <h1 className="flex text-xl font-semibold tracking-tighter">
          hey, I&apos;m martin
          <motion.div
            animate={{ x: [0, 5, 0], rotateZ: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            🖐️
          </motion.div>
        </h1>
        <motion.span
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="text-neutral-500 dark:text-neutral-400 font-mono "
        >
          Front-End Developer
        </motion.span>
      </div>
    </div>
  );
}
