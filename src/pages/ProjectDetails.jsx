import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="text-white text-center py-20">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Banner with Background Image */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-end px-6 md:px-16 py-12"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-gray-300 italic drop-shadow">{project.subtitle}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-16 py-12 max-w-4xl mx-auto space-y-10">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-red-600 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium transition"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
