import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import "./Styles/stack.css";

const LastSection = () => {
  return (
    <section id="hireme" className="h-dvh w-screen overflow-x-hidden stack">
      <div className="h-full w-full bg-carbon-mist flex items-center justify-center">
        {/* main container */}
        <div className="h-full w-full flex flex-col items-center justify-center">
          {/* the main text */}
          <div className="h-[60%] w-[80%] flex flex-col items-center justify-center gap-5">
            <p className="font-robert-medium text-8xl sm:text-9xl font-extrabold text-blue-tint">
              Hiring?
            </p>
            <p className="font-robert-medium text-alpine-frost text-3xl sm:text-6xl font-bold">
              Your wait ends here.
            </p>
            <p className="font-robert-medium text-sm font-semibold text-metallic-gray">
              I am a time traveller, but you wouldn't believe me because I'm not
              famous yet.
            </p>
          </div>

          {/* social icons */}
          <div className="h-[30%] w-[100%]  flex items-center justify-center">
            <div className="h-[30%] w-[70%] sm:h-[35%] sm:w-[20%] bg-alpine-frost rounded-4xl flex items-center justify-around">
              <div className="h-[90%] rounded-4xl w-[20%] text-5xl flex items-center justify-center text-carbon-mist hover:scale-125 duration-200 transition-all hover:text-blue-600 cursor-pointer">
                <a
                  href="https://x.com/RVishvjeet_/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaXTwitter />
                </a>
              </div>
              <div className="h-[90%] rounded-4xl w-[20%] text-5xl flex items-center justify-center text-carbon-mist hover:scale-125 duration-200 transition-all hover:text-blue-600 cursor-pointer">
                <a
                  href="https://github.com/Vishvjeet-Rana/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IoLogoGithub />
                </a>
              </div>
              <div className="h-[90%] rounded-4xl w-[20%] text-5xl flex items-center justify-center text-carbon-mist hover:scale-125 duration-200 transition-all hover:text-blue-600 cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/vishvjeet-rana/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
