import React from "react";
import SplitText from "./SplitText";

const Skills = () => {
  return (
    <section className="h-dvh w-screen overflow-x-hidden">
      <div className="h-full w-full bg-vanilla-latte flex items-center justify-center">
        {/* main container */}
        <div className="flex items-center justify-center h-[100%] w-[100%] p-5">
          {/* left part - have skills  */}
          <div className="w-[50%] h-[100%]"></div>

          {/* right part - text */}
          <div className="w-[50%] h-[100%] ">
            {/* holding text container */}
            <div className="h-[60%] w-[100%] flex flex-col pl-5 items-start justify-start">
              <p className="text-9xl  font-zentry font-extrabold text-expresso-brown">
                Have
              </p>

              <p className="text-9xl  font-zentry font-extrabold text-expresso-brown">
                A
              </p>

              <p className="text-9xl  font-zentry font-extrabold text-expresso-brown">
                Look.
              </p>

              {/* some text */}
              <div className="mt-5">
                {/* <p className="text-2xl italic font-light font-robert-medium text-dark-vanilla">
                  These skills aren’t just things I’ve picked up—they're how I
                  create, solve problems, and bring ideas to life. Whether it's
                  structuring something from the ground up or refining the
                  smallest details, I enjoy making things work seamlessly and
                  feel just right.
                </p> */}

                <div>
                  <SplitText
                    text="These skills aren’t just things I’ve picked up—they're how I create, solve problems, and bring ideas to life. Whether it's structuring something from the ground up or refining the smallest details, I enjoy making things work seamlessly and feel just right."
                    className="text-2xl italic font-light font-robert-medium text-dark-vanilla"
                    delay={10}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
