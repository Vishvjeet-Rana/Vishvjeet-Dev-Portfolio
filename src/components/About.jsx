import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import BlurText from "./BlurText";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section className="h-dvh w-screen overflow-x-hidden">
      <div className=" h-[100%] w-[100%] bg-carbon-mist flex flex-col sm:flex-row items-center justify-center">
        {/* left part */}
        <div className="w-[100%] h-[50%] sm:w-[50%] sm:h-[100%] flex flex-col items-center justify-end ">
          {/* first text */}
          <div className="w-[100%] h-[20%] flex items-center">
            <div>
              <BlurText
                text="Learning"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl sm:text-9xl text-alpine-frost font-robert-medium font-extrabold"
              />
            </div>
          </div>
          {/* second text */}
          <div className="w-[100%] h-[20%] flex items-center">
            <div>
              <BlurText
                text="Building"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl sm:text-9xl text-alpine-frost font-robert-medium font-extrabold ml-10 sm:ml-20"
              />
            </div>
          </div>
          {/* third text */}
          <div className="w-[100%] h-[20%] flex items-center mb-2">
            <div>
              <BlurText
                text="Shipping"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl sm:text-9xl text-alpine-frost font-robert-medium font-extrabold ml-20 sm:ml-40"
              />
            </div>
          </div>
        </div>
        {/* right part */}
        <div className="w-[100%] h-[50%] sm:w-[50%] sm:h-[100%]"></div>
      </div>
    </section>
  );
};

export default About;
