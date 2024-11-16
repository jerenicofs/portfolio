"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Typewriter from "typewriter-effect";
import MagicButton from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa";
import Footer from "./Footer";

const AboutMe = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row relative my-20 z-10 items-center lg:items-start ">
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 flex justify-center py-20 ">
          <img
            src="/about/self1.png"
            alt="Profile Picture"
            className="rounded-lg object-cover 
                       w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-[300px] xl:h-[350px]"
          />
        </div>

        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start justify-center px-4">
          <TextGenerateEffect
            className="text-left text-[30px] md:text-4xl lg:text-5xl"
            words="About Me"
          />

          <span className="text-left md:tracking-wider mb-4 text-xl md:text-2xl lg:text-4xl font-bold text-purple">
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Tech Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className="font-bold text-center lg:text-left mb-6">
            Hi, I'm Jerenico, a full-stack developer specializing in creating
            user-friendly and efficient software solutions. I embarked on my
            programming journey in 2022 and have since developed several
            impactful projects. I thrive on challenges and am committed to
            constant learning, always aiming to stay ahead of evolving
            technologies. Feel free to reach out to me through the social media
            links below!
          </p>

          <MagicButton
            title="Download CV here! :)"
            icon={<FaDownload />}
            position="right"
            downloadUrl="/CV_Jerenico_Franssen_Semanuel.pdf"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
