import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-purple">Your Digital Presence</span> to the next
          level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and discuss about future projects!
        </p>

        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          href="mailto:jerenicofs@gmail.com"
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-8 md:mb-0">
          &copy; 2024 Portfolio by Jerenico Franssen Semanuel
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
        rounded-lg border border-black-300 transform transition-all duration-200 hover:scale-105 hover:border-[#CBACF9]"
            >
              <img
                src={profile.img}
                alt={profile.img}
                width={20}
                height={20}
                className="transition-colors duration-200 hover:fill-[#CBACF9]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
