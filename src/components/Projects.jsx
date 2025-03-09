import React from "react";
import Carousel from "./Carousel";
import TrueFocus from "./TrueFocus";
import "./Styles/stack.css";

const Projects = () => {
  return (
    <section className="h-dvh w-screen overflow-x-hidden stack">
      <div className="h-[100%] w-[100%] bg-carbon-mist flex items-center justify-center">
        <div className="w-full h-full  flex items-center justify-center flex-col">
          {/* part 1 - text */}
          <div className="h-[20%] w-[80%] flex items-center justify-start">
            {/* <p className="text-6xl sm:text-[5rem] text-metallic-gray font-robert-medium font-extrabold">
              Featured projects
            </p> */}

            <div>
              <TrueFocus
                sentence="Featured projects"
                manualMode={false}
                blurAmount={5}
                borderColor="#7d7d81"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>
          </div>

          {/* part 2 - glassmorphic div */}
          <div className="w-[80%] h-[70%] rounded-3xl">
            <div className="h-full w-full flex items-center rounded-3xl justify-center">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
