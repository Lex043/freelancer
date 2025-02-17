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
        post: "General Manager"
    },
    {
        id: 2,
        image: "/marquee/brainB.png",
        name: "Henry Authur",
        post: "General Manager"
    },
    {
        id: 3,
        image: "/marquee/brainC.png",
        name: "Louise Marvin",
        post: "CEO"
    },
    {
        id: 4,
        image: "/marquee/brainD.png",
        name: "Bode Akinwumi",
        post: "Social Media manager"
    },
    {
        id: 5,
        image: "/marquee/brainE.png",
        name: "Nguyen Shane",
        post: "Photographer"
    }
];

const duplicatedImages = [...images, ...images];

export default function Team() {
    return (
        <section className="bg-pale-peach xl:py-20">
            <div className="container mx-auto">
                <h1 className="text-black xl:text-[80px] w-full px-4 xl:px-10 font-medium !leading-none">Brains
                    Behind <br/> Our Vision.
                </h1>
                <section className="relative overflow-hidden w-full mt-24">
                    <motion.div
                        className="flex items-center gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 12,
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedImages.map((image) => (
                            <div key={image.id}>
                                <figure
                                    className="w-[348px] h-[420px] flex-shrink-0">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={image.image}
                                        width={348}
                                        height={430}
                                        alt="marquee image"
                                    />
                                </figure>
                                <figcaption>
                                    <h1 className="text-[#101828] text-base font-medium">{image.name}</h1>
                                    <p className="text-[#475467] text-base">{image.post}</p>
                                </figcaption>
                            </div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </section>
    );
}