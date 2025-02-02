"use client";

import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import Image from "next/image";
import MotionTag from "./MotionTag";

export default function HeroTitle() {
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia("(max-width: 1024px)").matches;
  }

  return (
    <div>
      <MotionTag
        tag="div"
        variants={slideInFromLeft(0.5)}
        initial={isMobile ? "visible" : "hidden"}
        animate="visible"
        className="text-lg sm:text-xl md:text-2xl font-medium flex items-center w-full justify-center lg:justify-start"
      >
        <Image
          src="/127685413.jpg"
          alt="Shoaib Ahmad Portfolio Logo"
          className="w-7 h-7 mr-3  rounded-full"
          width={28}
          height={28}
        />
        <h1 className="text-opacity-45">Hey there, I'm Shoaib! 👾</h1>
      </MotionTag>
      <MotionTag
        tag="h1"
        variants={slideInFromLeft(0.6)}
        initial={isMobile ? "visible" : "hidden"}
        animate="visible"
        className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold text-center lg:text-start"
      >
        Building <span className="gradient-accent"> optimal</span>
      </MotionTag>
      <MotionTag
        tag="h1"
        variants={isMobile ? slideInFromTop(1) : slideInFromLeft(1)}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold text-center lg:text-start mb-2"
      >
        projects and webApps.
      </MotionTag>
    </div>
  );
}
