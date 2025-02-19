"use client";

import Image from "next/image";
import { useState } from "react";

interface accordionProps {
    id: number;
    question: string;
    answer: string;
}

const accordion: accordionProps[] = [
    {
        id: 1,
        question: "What amenities are included in the coworking space",
        answer: "The coworking space includes amenities such as high-speed Wi-Fi, meeting rooms, printing services, a kitchen, free coffee, and lounge areas."
    },
    {
        id: 2,
        question: "Can I use the coworking space on weekends and after hours",
        answer: "Yes, you can use the coworking space on weekends and after hours, depending on your membership plan."
    },
    {
        id: 3,
        question: "How do I book meeting rooms, and is there an additional cost",
        answer: "You can book meeting rooms through the coworking space’s website or reception. Additional costs may apply."
    },
    {
        id: 4,
        question: "Are there any networking or community events held at the coworking space",
        answer: "Yes, the coworking space hosts networking and community events."
    },
    {
        id: 5,
        question: "Can I bring guests or clients to the coworking space",
        answer: "Yes, you can bring guests or clients to the coworking space."
    },
    {
        id: 6,
        question: "Is parking available at the coworking space",
        answer: "Yes, parking is available at the coworking space."
    }
];
export default function Faq() {
    const [show, setShow] = useState<number | null>(null);
    return (
        <section
            className="bg-orange-red pt-10 xl:pt-20 xl:pb-[92px]">
            <div className="container mx-auto">
                <h1 className="font-medium xl:text-9xl text-white px-4 xl:px-10">FAQ’S</h1>
                <div className="xl:mt-[76px] border-[#DCDCDC] border-t border-b">
                    {accordion.map((list) => (
                        <article
                            onClick={() => setShow(show === list.id ? null : list.id)}
                            className={`flex justify-between cursor-pointer ${list.id === accordion.length ? "border-none" : "border-b"} border-b-[#DCDCDC] items-center  px-10 py-5`}
                            key={list.id}>
                            <div>
                                <h1 className="text-white font-light text-[24px]">{list.question}</h1>
                                {show === list.id && (
                                    <p className="text-white font-light pt-5">{list.answer}</p>
                                )}
                            </div>
                            <Image src="/images/arrowDown.svg" width={24}
                                   height={24} alt="arrow down"></Image>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}