import { cn } from "@/utils/lib";
import Image from "next/image";

export default function AudienceCard({ text, icon, className, iconStyle }: {
    text: string;
    icon: string;
    className?: string;
    iconStyle?: string;
}) {
    return (
        <div
            className={cn("bg-black rounded-lg flex items-center gap-2 p-2", className)}>
            <div className={cn("text-white text-xl", iconStyle)}>
                <Image className="w-full h-full" width={100} height={100}
                       src={icon} alt={icon}></Image>
            </div>
            <p className="text-white text-xl text-wrap">{text}</p>
        </div>
    );
}