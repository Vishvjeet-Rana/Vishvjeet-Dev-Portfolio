import React, { useEffect } from "react";
import BlurText from "./BlurText";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitText from "./SplitText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const paraRef = useRef(null);
  const firstItemRef = useRef(null);
  const secondItemRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ ease: "power4.out" });

    // para ref
    tl.fromTo(
      paraRef.current,
      { opacity: 0, scale: 0.8, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1 }
    );

    // first item ref
    tl.fromTo(
      firstItemRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1 },
      "-=0.7" // Overlapping animation for smoother effect
    );

    // Animate Second Item
    tl.fromTo(
      secondItemRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1 },
      "-=0.7"
    );
  }, []);

  return (
    <section className="h-dvh w-screen overflow-x-hidden">
      {/* inner main category div which gonna hold the all content */}
      <div
        ref={sectionRef}
        className="h-full w-full bg-teal-forest flex items-center justify-center"
      >
        {/* main work starts here */}
        <div className=" h-[90%] w-[95%] flex flex-col items-start justify-center">
          {/* first part */}
          <div className="mb-5 ">
            <div>
              <a href="https://x.com/RVishvjeet_/" target="_blank">
                <SplitText
                  text="@RVishvjeet_"
                  className="text-3xl font-robert-medium text-carbon-mist"
                  delay={150}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </a>
            </div>
          </div>

          {/* middle part */}
          <div className="mt-5 h-[50%] w-[100%] sm:w-[70%] flex items-start flex-col justify-center ">
            <div>
              <SplitText
                text="You are exactly"
                className="text-6xl sm:text-8xl font-robert-medium font-extrabold text-carbon-mist"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>

            <div>
              <SplitText
                text="Where you needs to be."
                className="text-6xl sm:text-8xl font-robert-medium font-extrabold text-carbon-mist"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>
          </div>

          {/* end part */}
          <div className="mt-10 h-[30%] w-[90%] flex flex-col  justify-start sm:flex-row sm:items-center sm:justify-between ">
            {/* para */}
            <p ref={paraRef} className="text-5xl font-zentry text-carbon-mist">
              PortFolio:VR01
            </p>
            <div className="w-[100%] sm:w-[50%] flex flex-col  justify-start sm:flex-row sm:items-center sm:justify-between  ">
              {/* fist item */}
              <div
                ref={firstItemRef}
                className="mt-10 flex flex-col  justify-center"
              >
                <p className="text-lg sm:text-xl font-robert-medium font-semibold text-carbon-mist">
                  Contact:
                </p>
                <p className="text-lg sm:text-xl font-robert-medium text-carbon-mist">
                  <a href="mailto:vishvjeet.rana7@gmail.com" target="_blank">
                    vishvjeet.rana7@gmail.com
                  </a>
                </p>
              </div>

              {/* second item */}
              <div
                ref={secondItemRef}
                className="mt-10 flex flex-col justify-center"
              >
                <p className="text-lg sm:text-xl font-robert-medium font-semibold text-carbon-mist">
                  My Location:
                </p>
                <p className="text-lg sm:text-xl font-robert-medium text-carbon-mist">
                  <a
                    href="https://www.google.com/maps?q=29.68727901062938,76.9901177257675"
                    target="_blank"
                    className="text-lg sm:text-xl font-robert-medium text-carbon-mist"
                  >
                    Location: 29.6873° N, 76.9901° E
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
