"use client";
import { format } from "date-fns";

export default function Footer() {
  return (
    <section className="bg-black py-10 xl:py-20">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-wrap justify-between gap-10 text-white">
          <h1 className="max-w-[511px] text-xl font-light md:text-2xl">
            Dive into a community buzzing with energy, collaboration, and
            endless opportunities <span className="underline">Book now</span>
          </h1>
          <div className="flex gap-6">
            <ul className="flex flex-col gap-3 xl:w-[140px]">
              <h1 className="cursor-pointer">MENU</h1>
              <div className="relative w-fit cursor-pointer">
                <li className="text-gainsboro under">Home</li>
              </div>
              <div className="relative w-fit cursor-pointer">
                <li className="text-gainsboro under">About</li>
              </div>
              <div className="relative w-fit cursor-pointer">
                <li className="text-gainsboro under">Membership</li>
              </div>
            </ul>
            <ul className="flex flex-col gap-3 xl:w-[140px]">
              <h1 className="cursor-pointer">SOCIALS</h1>
              <div className="relative w-fit cursor-pointer">
                <li className="text-gainsboro under cursor-pointer">Home</li>
              </div>
              <div className="relative w-fit cursor-pointer">
                <li className="text-gainsboro under">About</li>
              </div>
              <div className="relative w-fit cursor-pointer">
                <li className="text-gainsboro under">Membership</li>
              </div>
            </ul>
          </div>
        </div>
        <article className="mt-10 border-b border-t border-[#989898] xl:mt-[100px]">
          <h1 className="py-10 text-center text-5xl font-normal text-white md:text-9xl xl:py-20 xl:text-[252px]">
            Freelancer
          </h1>
        </article>
        <section className="mt-8 flex items-center justify-between gap-6">
          <div className="flex gap-2 md:gap-10">
            <small className="text-base text-white">Terms</small>
            <small className="text-base text-white">Privacy</small>
          </div>

          <small className="text-base text-white">
            &copy; {format(new Date(), "yyy")} Freelancer All rights reserved
          </small>
        </section>
      </div>
    </section>
  );
}
