import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    demoLink: "https://demo1.example.com",
    codeLink: "https://github.com/example/project1",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Project Two",
    description: "Modern e-commerce platform with seamless user experience",
    demoLink: "https://demo2.example.com",
    codeLink: "https://github.com/example/project2",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Project Three",
    description: "Real-time collaboration tool for remote teams",
    demoLink: "https://demo3.example.com",
    codeLink: "https://github.com/example/project3",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Project Four",
    description: "AI-powered analytics dashboard for businesses",
    demoLink: "https://demo4.example.com",
    codeLink: "https://github.com/example/project4",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Project Four",
    description: "AI-powered analytics dashboard for businesses",
    demoLink: "https://demo4.example.com",
    codeLink: "https://github.com/example/project4",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Project Four",
    description: "AI-powered analytics dashboard for businesses",
    demoLink: "https://demo4.example.com",
    codeLink: "https://github.com/example/project4",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Project Four",
    description: "AI-powered analytics dashboard for businesses",
    demoLink: "https://demo4.example.com",
    codeLink: "https://github.com/example/project4",
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
