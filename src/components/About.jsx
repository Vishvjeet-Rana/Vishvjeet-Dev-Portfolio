import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import BlurText from "./BlurText";
import GradientText from "./GradientText";
import "./Styles/stack.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section id="about" className="h-dvh w-screen overflow-x-hidden stack">
      <div className="stacking-section h-[100%] w-[100%] bg-carbon-mist flex flex-col lg:flex-row items-center justify-center">
        {/* left part */}
        <div className="w-[100%] h-[50%] lg:w-[50%] lg:h-[100%] flex flex-col items-center justify-end">
          {/* first text */}
          <div className="w-[100%] h-[20%] mb-2 flex items-center">
            <div>
              <BlurText
                text="Learning"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl sm:text-9xl text-alpine-frost pl-5 font-robert-medium font-extrabold"
              />
            </div>
          </div>
          {/* second text */}
          <div className="w-[100%] h-[20%] flex mb-2 items-center">
            <div>
              <BlurText
                text="Building"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl sm:text-9xl text-blue-tint font-robert-medium font-extrabold ml-15 sm:ml-25"
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
                className="text-6xl sm:text-9xl text-alpine-frost font-robert-medium font-extrabold ml-25 sm:ml-45"
              />
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="w-[100%] h-[50%] sm:w-[50%] sm:h-[100%] ">
          {/* main container */}
          <div className="h-full w-full p-5">
            {/* about me text */}
            <div className=" flex items-center justify-start h-[20%]">
              <div>
                <GradientText
                  colors={[
                    "#a1a1a6",
                    "#7d7d81",
                    "#121212",
                    "#a1a1a6",
                    "#7d7d81",
                  ]}
                  animationSpeed={5}
                  showBorder={false}
                  className="custom-class font-robert-medium text-6xl sm:text-8xl font-bold"
                >
                  About Me
                </GradientText>
              </div>
            </div>

            {/* whole about me text */}
            <div className="flex-col items-start justify-start mt-10 h-[70%] pr-5">
              <p className="font-robert-medium text-sm sm:text-2xl text-metallic-gray">
                Namaste, I'm{" "}
                <span className="text-blue-tint">Vishvjeet Rana</span> — a Full
                Stack Web Developer who enjoys building web applications with
                clean design and smooth functionality. I specialize in crafting
                seamless digital experiences by blending creativity with
                efficient problem-solving. Occasionally I work with Three js for
                giving 3D and realistic feel to websites.
              </p>
              <p className="font-robert-medium text-sm sm:text-2xl text-metallic-gray">
                I'm diving into the world of AI to add smarter features to
                websites. It's all about making web apps more helpful and
                responsive in simple ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
