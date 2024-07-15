"use client";

import Image from "next/image";
import martin from "@/public/martin3.jpg";
import { motion } from "framer-motion";
import Heading from "@/app/ui/block/heading";

export default function Header() {
  return (
    <div className="flex items-center mb-16">
      <Image
        alt="picture of me"
        src={martin}
        placeholder="blur"
        className="rounded-full size-12 object-cover"
        loading="lazy"
      />
      <div className="flex items-start flex-col ml-3">
        <div className="flex items-center space-x-1">
          <Heading
            headingLevel="h1"
            className="text-xl font-medium tracking-tighter m-0"
          >
            hey, I&apos;m martin
          </Heading>
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
        </div>
        <motion.span
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="text-muted-foreground/90 tracking-tight"
        >
          Front-End Developer.
        </motion.span>
      </div>
    </div>
  );
}
