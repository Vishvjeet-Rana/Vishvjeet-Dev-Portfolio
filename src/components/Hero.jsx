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
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const mainSectionRef = useRef(null);
  const blurTextRef = useRef(null);

  // this section for scrolling effect of whole main section
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Hero Section Scroll Effect
    tl.to(mainSectionRef.current, {
      scale: 0.9,
      opacity: 0.6,
      filter: "blur(10px)",
      ease: "power2.inOut",
    });
  }, []);

  // this animation for hero section
  useGSAP(() => {
    const tl = gsap.timeline({ duration: 0.1, ease: "power2.inOut" });

    // Then, add a small delay before starting the main section animation
    tl.fromTo(
      sectionRef.current,
      {
        scaleY: 0,
        transformOrigin: "top",
        opacity: 0,
        skewY: 10,
        filter: "blur(20px)",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.8)",
      },
      {
        scaleY: 1,
        opacity: 1,
        skewY: 0,
        filter: "blur(0px)",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
        duration: 1.8,
        ease: "elastic.out(1, 0.6)",
        immediateRender: false,
      },
      0 // Start after a 0.5 second delay
    );

    // First, animate the BlurText (Namaste) immediately
    gsap.set(blurTextRef.current.querySelectorAll(".blur-text span"), {
      filter: "blur(10px)",
      opacity: 0,
      y: -50,
    });

    tl.to(
      blurTextRef.current.querySelectorAll(".blur-text span"),
      {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.7,
        ease: "power2.out",
      },
      0.5 // Start immediately at timeline position 0
    );

    // Animation for VariableProximity text with delay
    tl.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7 },
      "start+=0.5" // Start after the main section animation
    );

    // Animation for small text under Namaste with the same delay
    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7 },
      "start+=0.8" // Start at the same time as VariableProximity
    );
  }, []);

  return (
    <section
      ref={mainSectionRef}
      className="h-dvh w-screen overflow-x-hidden bg-graph-paper-lg px-8 pt-10 pb-3"
    >
      {/* inner main category div which gonna hold the all content */}
      <div
        ref={sectionRef}
        className=" h-full w-full bg-steel-gray rounded-[30px] p-3 flex flex-col items-center justify-between gap-4 xl:flex-row"
      >
        {/* left part */}
        <div className="h-[95%] w-[98%] overflow-hidden bg-steel-gray p-4 flex flex-col justify-between">
          <div>
            {/* welcome blur text */}
            <div>
              <BlurText
                ref={blurTextRef}
                text="Namaste"
                delay={0.05}
                animateBy="words"
                direction="top"
                className="text-5xl sm:text-6xl font-zentry font-extrabold text-grayish"
                useExternalAnimation={true}
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
