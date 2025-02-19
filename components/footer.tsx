"use client";
import { format } from "date-fns";

export default function Footer() {
    return (
        <section className="bg-black py-10 xl:py-20">
            <div className="container mx-auto px-4 lg:px-10">
                <div
                    className="text-white flex justify-between gap-10 flex-wrap">
                    <h1 className="font-light text-xl md:text-2xl max-w-[511px]">
                        Dive into a community buzzing with energy,
                        collaboration, and endless opportunities <span
                        className="underline">Book now</span>
                    </h1>
                    <div className="flex gap-6">
                        <ul className="flex flex-col gap-3 xl:w-[140px]">
                            <h1>MENU</h1>
                            <li className="text-[#DCDCDC]">Home</li>
                            <li className="text-[#DCDCDC]">About</li>
                            <li className="text-[#DCDCDC]">Membership</li>
                        </ul>
                        <ul className="flex flex-col gap-3 xl:w-[140px]">
                            <h1>SOCIALS</h1>
                            <li className="text-[#DCDCDC]">Home</li>
                            <li className="text-[#DCDCDC]">About</li>
                            <li className="text-[#DCDCDC]">Membership</li>
                        </ul>
                    </div>
                </div>
                <article
                    className="mt-10 xl:mt-[100px] border-t border-[#989898] border-b">
                    <h1 className="py-10 xl:py-20 font-normal text-center text-white text-5xl md:text-9xl xl:text-[252px]">
                        Freelancer
                    </h1>
                </article>
                <section className="flex justify-between gap-6 items-center mt-8">
                    <div className="flex gap-2 md:gap-10">
                        <small className="text-white text-base">Terms</small>
                        <small className="text-white text-base">Privacy</small>
                    </div>

                    <small
                        className="text-white text-base">&copy; {format(new Date(), "yyy")} Freelancer
                        All rights reserved</small>
                </section>
            </div>
        </section>
    );
}