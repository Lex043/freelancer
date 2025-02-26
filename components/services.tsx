"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/service-card";
import speed from "@/public/images/speed.svg";
import document from "@/public/images/document.svg";
import message from "@/public/images/message.svg";
import scan from "@/public/images/scan.svg";
import people from "@/public/images/people.svg";
import sms from "@/public/images/sms.svg";

export default function Services() {
    const text = "Unlocking Potential, Together";
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
        <section className="bg-black pb-12 pt-10 xl:pb-28 xl:pt-20">
            <div className="container mx-auto px-4 lg:px-10">
                <h1
                    className="text-center max-w-[800px] mr-1 text-4xl font-medium text-white md:text-left xl:text-[80px] xl:!leading-none">
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

                <section className="mt-10 xl:mt-[100px]">
                    <article
                        className="flex flex-wrap items-center justify-between gap-10 xl:flex-nowrap">
                        <ServiceCard
                            icon={speed}
                            title="High-Speed Internet"
                            subtitle="Experience reliable, lightning-fast internet for seamless productivity"
                        />
                        <ServiceCard
                            icon={document}
                            title="Meeting Rooms"
                            subtitle="Bookable meeting rooms equipped with AV facilities for presentations and conferences."
                        />
                        <ServiceCard
                            icon={scan}
                            title="Printing and Scanning"
                            subtitle="On-site printing, scanning, and copying services for documents."
                        />
                    </article>
                    <article
                        className="mt-10 flex flex-wrap items-center justify-between gap-10 xl:flex-nowrap">
                        <ServiceCard
                            icon={message}
                            title="Tech Support"
                            subtitle="Basic IT support for troubleshooting connectivity or equipment issues"
                        />
                        <ServiceCard
                            icon={people}
                            title="Networking Opportunities"
                            subtitle="Introductions to potential collaborators, mentors, or investors within the coworking community."
                        />
                        <ServiceCard
                            icon={sms}
                            title="Mail Handling"
                            subtitle="Reception services for mail and packages, with secure storage for members."
                        />
                    </article>
                </section>
            </div>
        </section>
    );
}
