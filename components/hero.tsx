"use client";

import { menu } from "@/utils/constant";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const variants = {
    initial: { opacity: 0, y: 50 },
    animate:{ opacity: 1, y: 0 }
  }
  return (
    <header
      className="relative h-screen w-full bg-[url(/images/hero.webp)] bg-cover bg-center">
      <div className="container mx-auto px-4 lg:px-10">
        <nav className="flex items-center justify-between py-5">
          <div className="flex cursor-pointer gap-3">
            <figure>
              <Image
                src="/images/logo.svg"
                width={300}
                height={300}
                className="h-7 w-6"
                alt="Logo"
              />
            </figure>
            <p className="text-base font-medium text-white">Freelancer</p>
          </div>
          <div>
            <ul
              className="hidden w-full flex-col justify-end gap-6 lg:flex lg:flex-row lg:gap-12 lg:text-base">
              {menu.map((menu) => (
                <div
                  className="relative flex cursor-pointer items-center text-sm font-normal text-white"
                  key={menu.id}
                  onClick={() => setShowMenu(false)}
                >
                  <p className="under text-base font-medium">{menu.name}</p>
                </div>
              ))}
            </ul>
          </div>
          {/* Mobile Navigation Menu */}
          <ul
            className={`${
              showMenu ? "flex" : "hidden"
            } font-outfit absolute left-0 top-24 z-20 h-svh w-full flex-col gap-10 bg-[#444444] px-4 py-[61px] md:top-36 lg:hidden`}
          >
            {menu.map((menu) => (
              <div
                className="relative flex w-fit cursor-pointer items-center gap-2 text-white"
                key={menu.id}
                onClick={() => setShowMenu(false)}
              >
                <p className="under">{menu.name}</p>
              </div>
            ))}
            <button
              className="rounded-lg bg-orange-red px-4 py-[10px] text-white">
              Contact Us
            </button>
          </ul>
          <div
            className="flex shrink-0 cursor-pointer lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <div
              className="relative flex h-1 w-8 flex-col items-center justify-center">
              <span
                className={`block h-1 w-8 bg-white transition-transform ${
                  showMenu ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`block h-1 w-8 bg-white transition-transform ${
                  showMenu ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </div>
          </div>
          <button
            className="hidden rounded-lg bg-orange-red px-4 py-[10px] text-white lg:block">
            Contact Us
          </button>
        </nav>
        <h1
          className="text-center overflow-hidden text-6xl mt-28 xl:mt-40 text-white md:text-9xl xl:!leading-[110px]">
          <motion.span variants={variants}
                       initial="initial"
                       viewport={{ once: true }}
                       whileInView="animate"
                       transition={{ delay: 2.1, duration: 0.5 }}
                       className="block">Create
          </motion.span>
          <motion.span variants={variants}
                       initial="initial"
                       viewport={{ once: true }}
                       whileInView="animate"
                       transition={{ delay: 2.2, duration: 0.6 }}
                       className="block">Innovate
          </motion.span>
          <motion.span variants={variants}
                       initial="initial"
                       viewport={{ once: true }}
                       whileInView="animate"
                       transition={{ delay: 2.4, duration: 0.7 }}
                       className="block pl-8 md:pl-32 xl:pl-48">Connect
          </motion.span>
        </h1>
      </div>
    </header>
  );
}
