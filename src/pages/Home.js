import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative px-6 md:px-16 pt-12">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left: Fading Image from left to right */}
          <div className="md:w-1/2 relative h-[60vh] mt-24 md:mt-24 -ml-[calc((100vw-100%)/2)]">
            <div className="absolute inset-0 top-0">
              <img
                src="/images/Shivani.jpeg"
                alt="Shivani Rajkumar"
                loading="lazy"
                className="object-cover w-full h-full rounded-xl"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, black 60%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, black 60%, transparent 100%)",
                  objectPosition: "center 75%",
                  objectFit: "cover",
                  transform: "scale(0.9)", // Zoomed out more
                }}
              />
              <div className="absolute inset-0 ring-2 ring-red-600 opacity-20 blur-xl animate-pulse" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-8">
            <div className="max-w-lg">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                Shivani Rajkumar
              </h1>
              <p className="text-lg md:text-2xl leading-relaxed mb-6">
                AI & ML student building intelligent, cinematic software
                experiences. From patented sustainability systems to immersive
                portfolio interfaces, I design with purpose and polish.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-lg transition"
                >
                  View Projects
                </a>
                <a
                  href="/SHIVANI RAJKUMAR-resume.pdf"
                  download
                  className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Recommended Projects</h2>
        <div className="overflow-x-auto -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-700">
          <div className="flex gap-6 pb-4">
            {projects.map((p) => (
              <div key={p.id} className="will-change-transform">
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Python",
            "Java",
            "C",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "NumPy",
            "Pandas",
            "SQL",
            "Docker",
            "AWS",
            "Flutter",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-lg flex items-center justify-center text-sm font-medium hover:bg-red-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Sericulture Automation Model",
              subtitle: "Patent",
              description:
                "Patent holder for an AI-driven system that detects threats and ensures sustainable sericulture through real-time monitoring and prediction.",
            },
            {
              title: "Department Newsletter Committee (2023)",
              subtitle: "Editorial",
              description:
                "Served as a core member of the editorial team at NHCE, contributing to the department’s newsletter and fostering knowledge sharing.",
            },
            {
              title: "Ideathons & Paper Presentations (2024)",
              subtitle: "Competitions",
              description:
                "Participated in multiple ideathons on and off campus, winning prizes for sustainable ideas. Presented papers at ISTE State-Level Convention, PESCE Mandya.",
            },
            {
              title: "Evolve.ai Club",
              subtitle: "Co-Curricular",
              description:
                "Active member of the co-curricular club organizing technical events, seminars, and innovation workshops.",
            },
            {
              title: "IEEE Publications",
              subtitle: "Research",
              description:
                "Published IEEE papers focused on AI and sustainability, contributing meaningful research to the ML community.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-red-600 transition h-72 overflow-hidden"
            >
              <div className="text-sm uppercase text-red-500 font-semibold mb-2">
                {item.subtitle}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-300 text-sm line-clamp-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: "🎼",
              title: "Carnatic Vocalist",
              text: "Professionally trained Carnatic vocalist, blending classical music discipline with emotional expression.",
            },
            {
              icon: "💃",
              title: "Classical Dance",
              text: "Professionally trained classical dancer with 12 years of rigorous practice and performance experience.",
            },
            {
              icon: "📚",
              title: "Reading",
              text:
                "Diving into ML papers, legal knowledge, and self-improvement content.",
            },
            {
              icon: "💻",
              title: "Building Apps",
              text:
                "Crafting Flutter/Firebase experiences with polished UI and UX.",
            },
          ].map((hobby, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-800 rounded-xl p-5 shadow-md"
            >
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-2xl">
                {hobby.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{hobby.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{hobby.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="max-w-4xl text-left text-white space-y-2 text-lg leading-relaxed">
          <p>Hello!</p>
          <p>
            I'm Shivani Rajkumar, an AI & ML enthusiast with a passion for
            building intelligent and cinematic tech experiences.
          </p>
          <p>
            Whether it's crafting sustainable solutions like the patented
            sericulture model or designing visually immersive applications, I
            bring creativity and precision to every project.
          </p>
          <p>
            With a background in both engineering and the performing arts, I
            thrive at the intersection of logic and expression.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
