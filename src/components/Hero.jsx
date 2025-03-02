import React from "react";
import BlurText from "./BlurText";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import RotatingText from "./RotatingText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BounceCards from "./BounceCards";
import v0 from "../assets/v0.png";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.png";

const images = [v3, v1, v2, v0];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // for the animation of the VariableProximity text
  useGSAP(() => {
    // GSAP animation for the VariableProximity text
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.8, y: 50 }, // Starting animation properties
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5, // Delay to sync with other animations
      }
    );
  }, []);

  // for the animation of the small text under namaste
  useGSAP(() => {
    // GSAP animation for the VariableProximity text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8, y: 50 }, // Starting animation properties
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5, // Delay to sync with other animations
      }
    );
  }, []);

  return (
    <section className="h-dvh w-screen overflow-x-hidden bg-graph-paper-lg px-8 pt-10 pb-3">
      {/* inner main category div which gonna hold the all content */}
      <div className=" h-full w-full bg-steel-gray rounded-[30px] p-3 flex flex-col items-center justify-between gap-4 xl:flex-row">
        {/* left part */}
        <div className="h-[95%] w-[98%] overflow-hidden bg-steel-gray p-4 flex flex-col justify-between">
          <div>
            {/* welcome blur text */}
            <div>
              <BlurText
                text="Namaste"
                delay={500}
                animateBy="words"
                direction="top"
                className="text-5xl sm:text-6xl font-zentry font-extrabold text-grayish"
              />
            </div>

            {/*  small text under namaste */}
            <div
              ref={textRef}
              className="font-robert-medium mt-5 font-semibold text-smoky text-sm"
            >
              Welcome to my tech space.
            </div>
          </div>

          {/* variable proximity code with animation */}
          <div
            ref={containerRef}
            style={{ position: "relative" }}
            className="mt-10"
          >
            <VariableProximity
              label={"You are exactly where you need to be."}
              className={
                "variable-proximity-demo font-robert-regular font-extrabold selection:bg-grayish text-lavender text-4xl sm:text-7xl"
              }
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={300}
              falloff="linear"
            />
          </div>

          {/* rotating text */}
          <div className="w-[90%] flex h-[200px] gap-5 items-center justify-center mt-12">
            <div className="flex-shrink-0">
              <h2 className="font-bold text-2xl sm:text-3xl text-grayish font-robert-medium">
                I Love Doing{" "}
              </h2>
            </div>
            <div className="w-[60%]">
              <RotatingText
                texts={[
                  "Coding",
                  "Problem Solving",
                  "Time Travelling",
                  "Designing",
                  "Watching movies",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-lavender text-steel-gray text-xl font-bold font-robert-medium overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg whitespace-nowrap"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="h-[95%] w-[98%] overflow-hidden">
          {/* div -- where my images will reside */}
          <div className="h-[48%] m-2 bg-grayish rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="h-[80%] w-[90%] flex items-center justify-center">
              <BounceCards
                className="custom-bounceCards w-full h-full"
                images={images}
                containerWidth={window.innerWidth < 768 ? 300 : 500} // Mobile vs Desktop
                containerHeight={window.innerWidth < 768 ? 150 : 250}
                animationDelay={1}
                animationStagger={0.1}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            </div>
          </div>

          {/* here is the introduction */}
          <div className="h-[48%] m-2 bg-grayish rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="h-full w-full p-2 rounded-3xl sm:flex sm:flex-col sm:items-start sm:justify-around ">
              <h2 className="font-robert-medium font-extrabold text-2xl text-steel-gray sm:text-5xl ">
                Hello, I'm
              </h2>
              <p className="font-zentry font-extrabold text-xl text-steel-gray sm:text-5xl">
                Vishvjeet Rana
              </p>
              <p className="font-robert-medium font-semibold text-lg text-smoky sm:text-2xl">
                I am a Full Stack MERN Developer. And, I Love to talk about Web
                Dev and AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
