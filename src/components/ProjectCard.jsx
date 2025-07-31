import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group w-64 h-80 flex-shrink-0 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 origin-center">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-36 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-9rem)]">
        <div>
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.subtitle}</p>
          <p className="mt-2 text-xs text-gray-400 line-clamp-3">
            {project.description}
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] bg-red-600 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* View Project Button on Hover */}
      <Link
        to={`/project/${project.id}`}
        className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
      >
        <div className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-md transition">
          View Project
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
