import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import aethercore from "../assets/aethercore.png";
import ecom from "../assets/ecom.png";
import iphone from "../assets/iphone.png";
import password from "../assets/password.png";
import spotify from "../assets/spotify.png";
import todo from "../assets/todo.png";
import studysync from "../assets/studysync.png";
import simonsays from "../assets/simonsays.png";

const projects = [
  {
    image: aethercore,
    title: "AetherCore - FrontEnd",
    description:
      "Futuristic gaming AI Web3 site with GSAP, Three.js 3D, & React-Tailwind UI",
    demoLink: "https://vishvjeet-rana.github.io/AetherCore-GamingAI-Site/",
    codeLink: "https://github.com/Vishvjeet-Rana/AetherCore-GamingAI-Site",
  },
  {
    image: iphone,
    title: "3D iPhone showcase - FrontEnd",
    description:
      "Stunning iPhone15 Pro site with GSAP, Three.js 3D model, & React-Tailwind UI",
    demoLink: "https://vishvjeet-rana.github.io/iPhone15-Website-Three.js/",
    codeLink: "https://github.com/Vishvjeet-Rana/iPhone15-Website-Three.js",
  },
  {
    image: password,
    title: "Password Generator",
    description:
      "Secure and customizable password generator built with React and Tailwind CSS.",
    demoLink: "https://vishvjeet-rana.github.io/password-generator-reactjs/",
    codeLink: "https://github.com/Vishvjeet-Rana/password-generator-reactjs",
  },
  {
    image: studysync,
    title: "StudySync - FrontEnd",
    description:
      "Seamless learning platform with an interactive and modern UI.",
    demoLink: "https://vishvjeet-rana.github.io/Study-Sync-Responsive/",
    codeLink: "https://github.com/Vishvjeet-Rana/Study-Sync-Responsive",
  },
  {
    image: spotify,
    title: "Spotify Landing Page",
    description: "Stylish Spotify landing page with an engaging UI.",
    demoLink: "https://vishvjeet-rana.github.io/Spotify-Landing-Page-Static-/",
    codeLink: "https://github.com/Vishvjeet-Rana/Spotify-Landing-Page-Static-",
  },
  {
    image: todo,
    title: "Todo List",
    description: "Minimalist Neumorphic To-Do List with a stylish soft UI.",
    demoLink: "https://vishvjeet-rana.github.io/To-Do-List-JavaScript/",
    codeLink: "https://github.com/Vishvjeet-Rana/To-Do-List-JavaScript",
  },
  {
    image: simonsays,
    title: "Simon Says Game",
    description:
      "Classic Simon Says game with interactive and engaging gameplay.",
    demoLink: "https://vishvjeet-rana.github.io/Simon-Says-Game/",
    codeLink: "https://github.com/Vishvjeet-Rana/Simon-Says-Game",
  },
];

const Carousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-[60vw] mx-auto">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-alpine-frost text-carbon-mist p-2 rounded-full shadow-lg hover:bg-[#7d7d81] transition-colors"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-alpine-frost text-carbon-mist p-2 rounded-full shadow-lg hover:bg-[#7d7d81] transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
