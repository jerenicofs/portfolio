"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-24">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89w] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi! I'm Jerenico Franssen Semanuel"
          />

          <span className="text-center md:tracking-wider mb-4 text-xl md:text-2xl lg:text-4xl font-bold">
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Tech Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>

          <MagicButton
            title="Download CV here! :)"
            icon={<FaDownload />}
            position="right"
            downloadUrl="/CV_Jerenico_Franssen_Semanuel.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
