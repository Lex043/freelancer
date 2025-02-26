"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageProps {
    id: number;
    image: string;
    name: string;
    post: string;
}

const images: ImageProps[] = [
    {
        id: 1,
        image: "/marquee/brainA.png",
        name: "Henry Authur",
        post: "General Manager",
    },
    {
        id: 2,
        image: "/marquee/brainB.png",
        name: "Henry Authur",
        post: "General Manager",
    },
    {
        id: 3,
        image: "/marquee/brainC.png",
        name: "Louise Marvin",
        post: "CEO",
    },
    {
        id: 4,
        image: "/marquee/brainD.png",
        name: "Bode Akinwumi",
        post: "Social Media manager",
    },
    {
        id: 5,
        image: "/marquee/brainE.png",
        name: "Nguyen Shane",
        post: "Photographer",
    },
];

const duplicatedImages = [...images, ...images];

export default function Team() {
    const text = "Brains Behind Our Vision.";
    const words = text.split(" ");
    const fadeInVariants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: (index: number) => (
            {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.2 * index,
                    duration: 0.5, ease: "easeOut"
                }
            }
        )
    };
    return (
        <section className="bg-pale-peach py-10 xl:py-20">
            <div className="container mx-auto px-4 lg:px-10">
                <h1 className="w-full text-center max-w-[600px] text-5xl font-medium text-black md:text-left xl:text-[80px] xl:!leading-none">
                    {words.map((word, i) => (
                        <span key={i}
                              className="inline-block xl:overflow-hidden pb-1">
                            <motion.span
                                variants={fadeInVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={i}
                                className="mr-2 xl:mr-4 inline-block"
                            >
                              {word}
                            </motion.span>
                        </span>
                    ))}
                </h1>
            </div>
            <section className="relative mt-24 w-full overflow-hidden">
                <motion.div
                    className="flex w-max items-center gap-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 12,
                        repeat: Infinity,
                    }}
                >
                    {duplicatedImages.map((image, index) => (
                        <div key={`${image.id}-${index}`}>
                            <figure className="h-[420px] w-[348px] flex-shrink-0">
                                <Image
                                    className="h-full w-full object-cover"
                                    src={image.image}
                                    width={348}
                                    height={420}
                                    alt="marquee image"
                                />
                            </figure>
                            <figcaption>
                                <h1 className="text-base font-medium text-[#101828]">
                                    {image.name}
                                </h1>
                                <p className="text-base text-[#475467]">{image.post}</p>
                            </figcaption>
                        </div>
                    ))}
                </motion.div>
            </section>
        </section>
    );
}
