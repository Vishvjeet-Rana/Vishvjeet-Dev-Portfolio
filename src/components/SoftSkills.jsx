import React from "react";
import FuzzyText from "./FuzzyText";
import FlowingMenu from "./FlowingMenu";
import "./Styles/stack.css";

const demoItems = [
  {
    text: "Coding",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    text: "Problem Solving",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    text: "Time Travelling",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    text: "Designing Sites",
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    text: "Watching Movies & Series",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const SoftSkills = () => {
  return (
    <section id="interests" className="h-dvh w-screen overflow-x-hidden stack">
      <div className="h-full w-full bg-deep-olive flex items-center justify-center">
        {/* main container */}
        <div className="h-[100%] w-[100%] flex flex-col items-center justify-center">
          {/* contains heading */}
          <div className="h-[20%] w-[90%] flex items-center justify-end overflow-hidden">
            <div className="ml-96">
              <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
              >
                I Love Doing
              </FuzzyText>
            </div>
          </div>

          {/* hobbies container */}
          <div className="h-[75%] w-[100%]">
            <div className="h-full w-full relative">
              <FlowingMenu items={demoItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
