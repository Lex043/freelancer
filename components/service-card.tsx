import { cn } from "@/utils/lib";
import Image from "next/image";

export default function ServiceCard({
  icon,
  title,
  subtitle,
  className,
  iconStyle,
}: {
  icon: string;
  title: string;
  subtitle: string;
  className?: string;
  iconStyle?: string;
}) {
  return (
    <div className={cn("flex max-w-[378px] flex-col gap-4", className)}>
      <figure className={cn("h-6 w-6", iconStyle)}>
        <Image
          className="h-full w-full"
          width={100}
          height={100}
          src={icon}
          alt={icon}
        ></Image>
      </figure>
      <h1 className="text-xl font-medium text-white">{title}</h1>
      <p className="text-base font-light text-[#DCDCDC]">{subtitle}</p>
    </div>
  );
}
