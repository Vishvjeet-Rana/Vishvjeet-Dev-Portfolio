import React from "react";
import { ArrowUpRightFromSquare } from "lucide-react";

const ProjectCard = ({ image, title, description, demoLink, codeLink }) => {
  return (
    <div className="min-w-[280px] max-w-[320px] bg-[#121212] rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
      <div
        className="h-[160px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-5">
        <h3 className="text-[#f5f5f7] text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#7d7d81] text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex gap-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#f5f5f7] text-sm hover:text-[#7d7d81] transition-colors"
          >
            Demo <ArrowUpRightFromSquare size={14} />
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#f5f5f7] text-sm hover:text-[#7d7d81] transition-colors"
          >
            Code <ArrowUpRightFromSquare size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
