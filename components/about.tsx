"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/marquee/row1b.png",
    "/marquee/row1c.png",
    "/marquee/row1a.png",
    "/marquee/row1d.png"
];

const secondImages = [
    "/marquee/row2b.png",
    "/marquee/row2d.png",
    "/marquee/row2a.png",
    "/marquee/row2c.png"
];


export default function About() {
    return (
        <section className="bg-[#F7E9D1] py-12 md:py-[100px]">
            <div className="container mx-auto px-4 lg:px-10">
                <header
                    className="flex flex-col gap-6 md:flex-row justify-between ">
                    <h1 className="text-3xl md:text-6xl font-medium md:text-left xl:text-9xl leading-10 text-center
                     max-w-[692px] xl:!leading-[120px]">Where <br
                        className="hidden lg:block xl:hidden" />
                        Productivity <br
                            className="hidden lg:block xl:hidden" />
                        Meets <br
                            className="hidden lg:block xl:hidden" /> Community
                    </h1>
                    <p className="text-base mx-auto md:text-left text-[#475467] font-normal text-center max-w-[364px]">Step
                        into our
                        co-working sanctuary – where ambition
                        ignites and creativity flourishes. With top-notch
                        amenities and a vibrant community, fuel your drive and
                        feed your imagination. Welcome to the space where your
                        dreams take flight.
                    </p>
                </header>
            </div>
                <section
                    className="relative overflow-hidden w-full mt-20 md:mt-[160px]">
                    <motion.div
                        className="flex items-center gap-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 12,
                            repeat: Infinity
                        }}
                    >
                        {[...images, ...images].map((src, index) => (
                            <figure key={index}
                                    className="w-[416px] h-[340px] flex-shrink-0">
                                <Image
                                    className="w-full h-full object-cover"
                                    src={src}
                                    width={416}
                                    height={340}
                                    alt="marquee image"
                                />
                            </figure>
                        ))}
                    </motion.div>
                </section>
                <section
                    className="relative overflow-hidden w-full mt-4">

                    <motion.div
                        className="flex items-center gap-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 10,
                            repeat: Infinity
                        }}
                    >
                        {[...secondImages, ...secondImages].map((src, index) => (
                            <figure key={index}
                                    className="w-[416px] h-[340px] flex-shrink-0">
                                <Image
                                    className="w-full h-full object-cover"
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