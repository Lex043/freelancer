"use client"
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
        <section className="bg-[#F7E9D1]">
            <div className="container mx-auto py-[100px]">
                <header
                    className="flex justify-between px-4 lg:px-10">
                    <h1 className="xl:text-9xl max-w-[692px] !leading-[120px]">Where Productivity
                        Meets Community</h1>
                    <p className="text-base max-w-[364px]">Step into our
                        co-working sanctuary – where ambition
                        ignites and creativity flourishes. With top-notch
                        amenities and a vibrant community, fuel your drive and
                        feed your imagination. Welcome to the space where your
                        dreams take flight.
                    </p>
                </header>
                <section
                    className="relative overflow-hidden w-full mt-[160px]">

                    <motion.div
                        className="flex items-center gap-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 12,
                            repeat: Infinity,
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
                            repeat: Infinity,
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
            </div>
        </section>
    );
}