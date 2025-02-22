"use client"

import Image from "next/image";
import { motion } from "framer-motion";


export default function Preloader() {
  return (
    <motion.section
      animate={{y: "-100%"}}
      transition={{duration: 1, delay: 1, ease: "easeInOut"}}
      className="min-h-screen z-20 bg-black fixed w-full right-0 left-0 flex flex-col justify-center items-center">
      <div className="flex items-center gap-3">
        <figure>
          <Image
            src="/images/logo.svg"
            width={300}
            height={300}
            className="h-full w-full"
            alt="Logo"
          />
        </figure>
        <p
          className="text-base xl:text-2xl font-medium text-white">Freelancer</p>
      </div>
    </motion.section>
  );
}