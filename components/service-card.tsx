import { cn } from "@/utils/lib";
import Image from "next/image";

export default function ServiceCard({ icon, title, subtitle, className, iconStyle }: {
    icon: string,
    title: string,
    subtitle: string;
    className?: string;
    iconStyle?: string;
}) {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <figure className={cn("w-6 h-6", iconStyle)}>
                <Image className="w-full h-full" width={100}
                       height={100}
                       src={icon} alt={icon}>
                </Image>
            </figure>
            <h1 className="font-medium text-xl text-white">{title}</h1>
            <p className="text-[#DCDCDC] font-light text-base">{subtitle}</p>
        </div>
    );
}