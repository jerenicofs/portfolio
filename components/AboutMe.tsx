"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Typewriter from "typewriter-effect";
import MagicButton from "./ui/MagicButton";
import { FaDownload, FaLongArrowAltLeft } from "react-icons/fa";
import Footer from "./Footer";
import { socialMedia } from "@/data";
import ViewMore from "./ui/ViewMore";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="min-h-screen">
      <div className="ml-8 mt-20">
        <ViewMore
          title="Back"
          icon={<FaLongArrowAltLeft />}
          position="left"
          href="/"
        />
      </div>

      <div className="flex flex-col lg:flex-row relative my-20 z-10 items-center lg:items-start ">
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 flex justify-center py-20 ">
          <Image
            src="/about/self1.png"
            alt="Profile Picture"
            width={300}
            height={350}
            className="rounded-lg object-cover 
                       w-40 h-45 md:w-60 md:h-70 lg:w-70 lg:h-90 xl:w-[300px] xl:h-[350px]"
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
            Hi, I&apos;m Jerenico, a full-stack developer specializing in
            creating user-friendly and efficient software solutions. I embarked
            on my programming journey in 2022 and have since developed several
            impactful projects. I thrive on challenges and am committed to
            constant learning, always aiming to stay ahead of evolving
            technologies. Feel free to reach out to me through the social media
            links below!
          </p>

          <div className="flex items-center md:gap-3 gap-6 mb-8 md:mb-0">
            {socialMedia.map((profile) => (
              <a
                key={profile.id}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
        rounded-lg border border-black-300 transform transition-all duration-200 hover:scale-105 hover:border-[#CBACF9]"
              >
                <Image
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                  className="transition-colors duration-200 hover:fill-[#CBACF9]"
                />
              </a>
            ))}
          </div>

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
