"use client";

import Image from "next/image";
import martin from "@/public/martin3.jpg";
import { motion } from "framer-motion";
import Heading from "@/app/ui/block/heading";
import { ButtonTw } from "@/components/component/test";

export default function Header() {
  return (
    <div className="flex items-center mb-20">
      <Image
        alt="picture of me"
        src={martin}
        placeholder="blur"
        className="rounded-full size-12 object-cover"
        loading="lazy"
      />
      <div className="flex items-start flex-col ml-3">
        <div className="flex items-center space-x-1">
          <Heading headingLevel="h1">Martin Rouault</Heading>
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
          className="text-muted-foreground/90 font-semibold tracking-tight"
        >
          Front-End Developer
        </motion.span>
      </div>
    </div>
  );
}
