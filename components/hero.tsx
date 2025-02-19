"use client";
import { useState } from "react";
import Image from "next/image";
import { menu } from "@/utils/constant";

export default function Hero() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <header
            className="relative bg-[url(/images/hero.webp)] bg-cover bg-center h-screen w-full">
            <div className="container mx-auto">
                <nav
                    className="flex items-center justify-between px-4 lg:px-10 py-5">
                    <div className="flex gap-3 cursor-pointer">
                        <figure>
                            <Image src="/images/logo.svg" width={300} height={300}
                                   className="w-6 h-7" alt="Logo" />
                        </figure>
                        <p className="text-white font-medium text-base">Freelancer</p>
                    </div>
                    <div>
                        <ul
                            className="hidden w-full flex-col justify-end gap-6 lg:flex lg:flex-row lg:gap-12 lg:text-base">
                            {menu.map((menu) => (
                                <div
                                    className="relative flex cursor-pointer items-center text-sm font-normal text-white"
                                    key={menu.id}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <p className="under text-base font-medium">{menu.name}</p>
                                </div>
                            ))}
                        </ul>
                    </div>
                    {/* Mobile Navigation Menu */}
                    <ul
                        className={`${
                            showMenu ? "flex" : "hidden"
                        } font-outfit absolute left-0 top-24 z-20 h-svh w-full flex-col gap-10 bg-[#F7F0FF] px-4 py-[61px] md:top-36 lg:hidden`}
                    >
                        {menu.map((menu) => (
                            <div
                                className="relative flex cursor-pointer w-fit items-center gap-2 text-white"
                                key={menu.id}
                                onClick={() => setShowMenu(false)}
                            >
                                <p className="under">{menu.name}</p>
                            </div>
                        ))}
                        <button
                            className="py-[10px] px-4 text-white bg-orange-red rounded-lg">Contact
                            Us
                        </button>
                    </ul>
                    <div
                        className="flex shrink-0 cursor-pointer lg:hidden"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <div
                            className="relative flex h-1 w-8 flex-col items-center justify-center">
                        <span
                            className={`block h-1 w-8 bg-[#ffb800] transition-transform ${
                                showMenu
                                    ? "translate-y-0 rotate-45"
                                    : "-translate-y-[5px]"
                            }`}
                        />
                            <span
                                className={`block h-1 w-8 bg-[#ffb800] transition-transform ${
                                    showMenu
                                        ? "translate-y-0 -rotate-45"
                                        : "translate-y-[5px]"
                                }`}
                            />
                        </div>
                    </div>
                    <button
                        className="py-[10px] px-4 text-white bg-orange-red rounded-lg hidden lg:block">Contact
                        Us
                    </button>
                </nav>
                <h1
                    className="xl:text-9xl !leading-[110px] text-white text-center xl:mt-[154px]">
                    <span className="block">Create</span>
                    <span className="block">Innovate</span>
                    <span className="block pl-48">Connect</span>
                </h1>

            </div>
        </header>
    )
}