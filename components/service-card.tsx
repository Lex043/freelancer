import { cn } from "@/utils/lib";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCard({
                                        icon,
                                        title,
                                        subtitle,
                                        className,
                                        iconStyle
                                    }: {
    icon: string;
    title: string;
    subtitle: string;
    className?: string;
    iconStyle?: string;
}) {
    return (
        <motion.div transition={{ delay: 10 }}
                    className={cn("flex max-w-[378px] flex-col gap-4", className)}>
            <figure className={cn("h-6 w-6", iconStyle)}>
                <Image
                    className="h-full w-full"
                    width={100}
                    height={100}
                    src={icon}
                    alt={icon}
                ></Image>
            </figure>
            <motion.h1 initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, ease: "easeInOut" }}
                       className="text-xl font-medium text-white">
                {title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          delay: 0.1
                      }}
                      className="text-base font-light text-[#DCDCDC]">{subtitle}</motion.p>
        </motion.div>
    );
}
