"use client"

import Image from "next/image";
import { motion } from "framer-motion";


export default function Preloader() {
  return (
    <motion.section
      animate={{y: "-100%"}}
      transition={{duration: 1, delay: 1, ease: "easeInOut"}}
      className="min-h-screen z-20 bg-black fixed w-full right-0 left-0 flex flex-col justify-center items-center">
      <div className="flex items-center gap-3 overflow-hidden">
        <figure>
          <Image
            src="/images/logo.svg"
            width={300}
            height={300}
            className="h-full w-full"
            alt="Logo"
          />
        </figure>
        <motion.p
          initial={{opacity: 0, y: "100%"}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-base xl:text-2xl font-medium text-white">Freelancer</motion.p>
      </div>
    </motion.section>
  );
}