"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/marquee/row1b.png",
  "/marquee/row1c.png",
  "/marquee/row1a.png",
  "/marquee/row1d.png",
];

const secondImages = [
  "/marquee/row2b.png",
  "/marquee/row2d.png",
  "/marquee/row2a.png",
  "/marquee/row2c.png",
];

export default function About() {
  return (
    <section className="bg-[#F7E9D1] py-12 md:py-[100px]">
      <div className="container mx-auto px-4 lg:px-10">
        <header className="flex flex-col justify-between gap-6 md:flex-row">
          <h1 className="max-w-[692px] text-center text-3xl font-medium leading-10 md:text-left md:text-6xl xl:text-9xl xl:!leading-[120px]">
            Where <br className="hidden lg:block xl:hidden" />
            Productivity <br className="hidden lg:block xl:hidden" />
            Meets <br className="hidden lg:block xl:hidden" /> Community
          </h1>
          <p className="mx-auto max-w-[364px] text-center text-base font-normal text-[#475467] md:text-left">
            Step into our co-working sanctuary – where ambition ignites and
            creativity flourishes. With top-notch amenities and a vibrant
            community, fuel your drive and feed your imagination. Welcome to the
            space where your dreams take flight.
          </p>
        </header>
      </div>
      <section className="relative mt-20 w-full overflow-hidden md:mt-[160px]">
        <motion.div
          className="flex w-max items-center gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 12,
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <figure key={index} className="h-[340px] w-[416px] flex-shrink-0">
              <Image
                className="h-full w-full object-cover"
                src={src}
                width={416}
                height={340}
                alt="marquee image"
              />
            </figure>
          ))}
        </motion.div>
      </section>
      <section className="relative mt-4 w-full overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        >
          {[...secondImages, ...secondImages].map((src, index) => (
            <figure key={index} className="h-[340px] w-[416px] flex-shrink-0">
              <Image
                className="h-full w-full object-cover"
                src={src}
                width={416}
                height={340}
                alt="marquee image"
              />
            </figure>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
