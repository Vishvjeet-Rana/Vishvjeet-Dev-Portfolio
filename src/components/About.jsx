import React from "react";
import about1 from "../assets/about1.svg";
import about2 from "../assets/about2.svg";
import about3 from "../assets/about3.svg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPressure from "./TextPressure";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const leftTextRef = useRef([]);
  const mainSectionRef = useRef(null);

  leftTextRef.current = [];
  imgRef.current = [];

  const addToImgRefs = (el) => {
    if (el && !imgRef.current.includes(el)) {
      imgRef.current.push(el);
    }
  };

  const addToTextRefs = (el) => {
    if (el && !leftTextRef.current.includes(el)) {
      leftTextRef.current.push(el);
    }
  };

  // animations for left part of about section Img and Text and when the about section comes into viewport
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSectionRef.current,
        start: "top center", // Triggers when the section is fully visible
        end: "bottom center",
        toggleActions: "play none none reverse", // Plays animation when entering, reverses when leaving
        once: true, // Ensures animation only plays once
      },
    });

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8, x: -150 },
      { opacity: 1, scale: 1, x: 0, duration: 2 },
      0.2
    );

    tl.fromTo(
      leftTextRef.current,
      { opacity: 0, scale: 0.8, x: 150 },
      { opacity: 1, scale: 1, x: 0, duration: 2 },
      0.3
    );
  }, []);

  // this section for scrolling effect of whole main section
  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.5,
      scrollTrigger: {
        trigger: mainSectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Breaking glass effect
    tl.fromTo(
      mainSectionRef.current,
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, // Full rectangle
      {
        clipPath:
          "polygon(10% 10%, 90% 0%, 100% 50%, 90% 100%, 10% 90%, 0% 50%)", // Broken glass effect
        filter: "blur(5px)",
        opacity: 0.6,
        ease: "power2.inOut",
      }
    );

    tl.to(mainSectionRef.current, {
      scale: 0.9,
      filter: "blur(8px)",
      opacity: 0.3,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section
      ref={mainSectionRef}
      className="h-dvh w-screen overflow-x-hidden bg-graph-paper-lg-about p-5 selection:bg-smoky"
    >
      <div className="h-full w-full bg-dark-blue rounded-[30px] p-3 flex flex-col items-center justify-around gap-4 xl:flex-row">
        {/* left part - holding images and texts */}
        <div className=" h-[95%] w-[95%] flex flex-col items-center justify-around">
          {/* there are three vertical divs and every devs contains pic and image & text */}
          {/* div 1 */}
          <div className="w-full h-[33%] gap-1 flex items-center justify-between">
            <div
              ref={addToTextRefs}
              className="leftText overflow-hidden h-[100%] w-[35%]  flex items-center justify-center"
            >
              <p className="font-zentry text-muted-teal text-3xl sm:text-7xl">
                Learning
              </p>
            </div>
            <div
              ref={addToImgRefs}
              className="overflow-hidden h-[100%] w-[35%] "
            >
              <img src={about1} alt="about 1 image" />
            </div>
          </div>
          {/* div 2 */}
          <div className="w-full h-[33%] gap-1 flex items-center justify-between">
            <div
              ref={addToTextRefs}
              className="overflow-hidden h-[100%] w-[35%] "
            >
              <img src={about2} alt="about 1 image" />
            </div>
            <div
              ref={addToImgRefs}
              className="leftText overflow-hidden h-[100%] w-[35%]  flex items-center justify-center"
            >
              <p className="font-zentry text-muted-teal text-3xl sm:text-7xl">
                Building
              </p>
            </div>
          </div>
          {/* div 3 */}
          <div className="w-full h-[33%] gap-1 flex items-center justify-between">
            <div
              ref={addToTextRefs}
              className="leftText overflow-hidden h-[100%] w-[35%]  flex items-center justify-center"
            >
              <p className="font-zentry text-muted-teal text-3xl sm:text-7xl">
                Shipping
              </p>
            </div>
            <div
              ref={addToImgRefs}
              className="overflow-hidden h-[100%] w-[35%] "
            >
              <img src={about3} alt="about 1 image" />
            </div>
          </div>
        </div>

        {/* right part - where about me's all text goes */}
        <div className=" h-[95%] w-[95%] flex items-center justify-center flex-col  overflow-hidden">
          {/* for the main heading hello text */}
          <div className="h-[25%] w-[85%] font-extrabold flex items-center justify-center overflow-hidden ">
            <TextPressure
              text="About Me"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#57b8ab"
              strokeColor="#ff0000"
              minFontSize={40}
            />
          </div>

          {/* second div holding all data about "about me" */}
          <div ref={addToTextRefs} className="h-[75%] w-[85%] sm:p-2 ">
            <p className="font-bold font-robert-medium text-desert-sand text-sm sm:text-xl sm:mt-4 sm:mb-4">
              Hey there! I'm{" "}
              <span className="font-extrabold text-muted-teal">
                Vishvjeet Rana,{" "}
              </span>
              a passionate Full Stack Web Developer who loves crafting dynamic
              web experiences that blend creativity with functionality. With a
              knack for turning ideas into interactive realities, I specialize
              in the MERN stack — building everything from sleek frontends to
              powerful backends.
            </p>
            <p className="hidden sm:block font-bold font-robert-medium text-desert-sand text-sm sm:text-xl sm:mb-4">
              But that's not all — I'm also diving into the exciting world of AI
              and exploring how technology can push boundaries. Whether it's
              designing pixel-perfect UIs, writing clean APIs, or experimenting
              with AI integration, I'm always up for the challenge.
            </p>
            <p className="font-bold text-smoky font-robert-medium text-sm">
              What keeps me going? Curiosity, innovation, and the constant urge
              to <span className="text-muted-teal">learn</span>,{" "}
              <span className="text-muted-teal">build</span>, and{" "}
              <span className="text-muted-teal">ship</span> cool stuff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
