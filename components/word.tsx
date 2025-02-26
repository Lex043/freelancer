
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface WordProps {
  children: React.ReactNode;
  range: number[];
  progress: MotionValue<number>;
}


export default function Word({ children, range, progress } : WordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-[3px] relative">
      <motion.span className="absolute opacity-[0.1]"
      >{children}</motion.span>
      <motion.span
        style={{ opacity }}>{children}</motion.span>
    </span>
  );
};