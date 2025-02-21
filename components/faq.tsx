"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    answer:
      "The coworking space includes amenities such as high-speed Wi-Fi, meeting rooms, printing services, a kitchen, free coffee, and lounge areas.",
  },
  {
    id: 2,
    question: "Can I use the coworking space on weekends and after hours",
    answer:
      "Yes, you can use the coworking space on weekends and after hours, depending on your membership plan.",
  },
  {
    id: 3,
    question: "How do I book meeting rooms, and is there an additional cost",
    answer:
      "You can book meeting rooms through the coworking space’s website or reception. Additional costs may apply.",
  },
  {
    id: 4,
    question:
      "Are there any networking or community events held at the coworking space",
    answer: "Yes, the coworking space hosts networking and community events.",
  },
  {
    id: 5,
    question: "Can I bring guests or clients to the coworking space",
    answer: "Yes, you can bring guests or clients to the coworking space.",
  },
  {
    id: 6,
    question: "Is parking available at the coworking space",
    answer: "Yes, parking is available at the coworking space.",
  },
];
export default function Faq() {
  const [show, setShow] = useState<number | null>(null);
  return (
    <section className="bg-orange-red pb-11 pt-10 xl:pb-[92px] xl:pt-20">
      <div className="container mx-auto px-4 lg:px-10">
        <h1 className="text-5xl font-medium text-white xl:text-9xl">FAQ’S</h1>
        <div className="border-gainsboro mt-9 border-b border-t xl:mt-[76px]">
          {accordion.map((list) => (
            <article
              onClick={() => setShow(show === list.id ? null : list.id)}
              className={`flex cursor-pointer justify-between ${list.id === accordion.length ? "border-none" : "border-b"} items-center border-b-[#DCDCDC] py-5`}
              key={list.id}
            >
              <div>
                <h1 className="text-lg font-light text-white md:text-[24px]">
                  {list.question}
                </h1>
                {show === list.id && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="pt-5 text-sm font-light text-white md:text-base"
                  >
                    {list.answer}
                  </motion.p>
                )}
              </div>
              <motion.div
                  className="flex-shrink-0"
                animate={{ rotate: show === list.id ? -45 : 0 }}
                transition={{ ease: "easeInOut", duration: 0.4 }}
              >
                <Image
                  src="/images/arrowDown.svg"
                  width={24}
                  height={24}
                  alt="arrow down"
                ></Image>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
