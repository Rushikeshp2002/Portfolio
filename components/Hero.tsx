'use client'
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 md:pt-36 pt-3">
      {/* Spotlight components placed here */}
      <div>
        <Spotlight
          className="sm:-left-80 md:w-40 md:-left-20 md:-top-20 md:h-screen -top-[100rem] "
          fill="white"
        />
        <Spotlight className="md:-top-[68rem] md:right-48 md:h-80vh md:w-50 -top-[94rem]" fill="purple" />
        {/* <Spotlight className="top-1 left-50 h-80vh w-50" fill="purple" /> */}
        <Spotlight className="md:-top-[60rem] md:left-80 md:h-80vh md:w-50 w-96 -top-[96rem]" fill="blue" />
      </div>

      {/* Grid background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04]  md:dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative md:my-20 my-14 md:top-0 top-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl  lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Creating magic with React 💖
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Making Your Ideas Click with Awesome Designs🚀"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Rushikesh, a Front End Developer based in Pune, India
          </p>
          <a href="">
            <MagicButton
              icon={<FaLocationArrow />}
              title="Show my work"
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
