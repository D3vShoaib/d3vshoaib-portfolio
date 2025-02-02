"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";

export default function TitleList({ titles }: { titles: string[] }) {
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia("(max-width: 1024px)").matches;
  }
  // Define arrays of colors for text and background
  const textColors = ["text-[#6385f2]", "text-[#6385f2]", "text-purple-500"];
  const bgColors = ["bg-blue-700", "bg-blue-700", "bg-purple-950"];

  return (
    <ul className="flex flex-wrap gap-2 w-full justify-center lg:justify-start mt-6">
      {titles.map((title, index) => (
        <motion.li
          key={title}
          variants={
            isMobile
              ? slideInFromTop(0.8 + index * 0.2)
              : slideInFromLeft(0.8 + index * 0.2)
          }
          initial="hidden"
          animate="visible"
          className={`text-xs bg-opacity-20 lg:text-[0.6rem] xl:text-xs font-medium border border-[#6385f2] ${
            textColors[index % textColors.length]
          } ${
            bgColors[index % bgColors.length]
          } p-1 px-2 rounded-full flex items-center`}
        >
          {title}
        </motion.li>
      ))}
    </ul>
  );
}
