import React from "react";
import BlurText from "./BlurText";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";

const Hero = () => {
  const containerRef = useRef(null);
  return (
    <section className="h-dvh w-screen overflow-x-hidden bg-graph-paper-lg p-8">
      {/* inner main category div which gonna hold the all content */}
      <div className=" h-full w-full bg-steel-gray rounded-[30px] p-3 flex flex-col items-center justify-between gap-4 xl:flex-row">
        {/* left part */}
        <div className="h-[95%] w-[98%] overflow-hidden bg-steel-gray p-4">
          {/* welcome text */}
          <div className="">
            <BlurText
              text="Namaste"
              delay={500}
              animateBy="words"
              direction="top"
              className="text-5xl sm:text-6xl font-zentry font-extrabold text-grayish "
            />
          </div>

          <div
            ref={containerRef}
            style={{ position: "relative" }}
            className="mt-10"
          >
            <VariableProximity
              label={"You are exactly where you need to be."}
              className={
                "variable-proximity-demo font-extrabold selection:bg-grayish text-taupe text-4xl sm:text-6xl font-circular-web"
              }
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={300}
              falloff="linear"
            />
          </div>
        </div>

        {/* right part */}
        <div className="h-[95%] w-[98%] bg-grayish overflow-hidden">
          hello this is right part
        </div>
      </div>
    </section>
  );
};

export default Hero;
