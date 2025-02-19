"use client"
import { format } from "date-fns";

export default function Footer() {
    return (
        <section className="bg-black px-4 xl:px-10 py-10 xl:py-20">
            <div className="container mx-auto">
                <div className="text-white flex justify-between">
                    <h1 className="font-light text-2xl max-w-[511px]">
                        Dive into a community buzzing with energy,
                        collaboration, and endless opportunities <span className="underline">Book now</span>
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
                <article className="xl:mt-[100px] border-t border-[#989898] border-b">
                    <h1 className="xl:py-20 font-normal text-center text-white text-[252px]">
                        Freelancer
                    </h1>
                </article>
                <section className="flex justify-between mt-8">
                    <div className="flex gap-10">
                        <small className="text-white text-base">Terms</small>
                        <small className="text-white text-base">Privacy</small>
                    </div>
                    <div>
                        <small className="text-white text-base">&copy; {format(new Date(), "YYY")} Freelancer All rights reserved</small>
                    </div>
                </section>
            </div>
        </section>
    );
}