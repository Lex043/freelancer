"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/service-card";
import { serviceA, serviceB } from "@/utils/constant";

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
                        {serviceA.map((service) => (
                            <ServiceCard
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                subtitle={service.subtitle}
                            />
                        ))}
                    </article>
                    <article
                        className="mt-12 flex flex-wrap items-center justify-between gap-10 xl:flex-nowrap">
                        {serviceB.map((service) => (
                            <ServiceCard
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                subtitle={service.subtitle}
                            />
                        ))}
                    </article>
                </section>
            </div>
        </section>
    );
}
