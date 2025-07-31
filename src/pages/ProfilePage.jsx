import React from "react";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";
import { SiKaggle, SiGitlab } from "react-icons/si";

const ProfilePage = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-16 space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold border-b border-gray-700 pb-4 mb-12">
        Profile
      </h1>

      {/* Image + About Me Section */}
      <section className="flex flex-col md:flex-row items-start gap-10">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src="/images/Shivani.jpeg"
            alt="Shivani Rajkumar"
            className="w-full max-w-xs md:max-w-full h-auto object-cover rounded-xl shadow-lg"
            style={{ maxHeight: "400px", objectPosition: "center 65%" }} 
            // Changed from 75% to 65% to move image focus upward a bit
          />
        </div>

        {/* Right: About Me */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-red-500">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am Shivani Rajkumar, an enthusiastic and driven Artificial Intelligence & Machine Learning student with a passion for creating intelligent and impactful solutions. My journey in technology has been fueled by a fascination for how AI and data-driven innovations can revolutionize industries and enhance everyday experiences.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            With hands-on experience in Python, TensorFlow, PyTorch, and Flutter, I have worked on diverse projects ranging from patented sustainability solutions in sericulture to cinematic, interactive applications. I thrive on continuous learning and embrace challenges that push me to innovate and grow as an engineer.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Beyond academics, I enjoy blending creativity and technology—whether it’s presenting research, developing ML-driven applications, or performing as a trained classical dancer and Carnatic vocalist. My vision is to create technology that leaves a meaningful, lasting impact.
          </p>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-red-500">ACADEMIC TIMELINE</h2>
        <ul className="space-y-4 ml-4 list-disc text-gray-300 text-sm md:text-base">
          <li>
            <span className="font-semibold">Ryan International School, Bangalore</span> <br />
            (2019 – 20) Class 10th, ICSE Board, <span className="text-white">83.33%</span>
          </li>
          <li>
            <span className="font-semibold">New Horizon PU College, Bangalore</span> <br />
            (2020 – 22) Class 12th, STATE Board, PCMB – <span className="text-white">76.20%</span>
          </li>
          <li>
            <span className="font-semibold">New Horizon College of Engineering, Bangalore</span> <br />
            B.E. AI & ML (Batch 2022–2026) – <span className="text-white">Expecting Graduation in 2026</span>
          </li>
        </ul>
      </section>

      {/* Resume */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-red-500">Resume</h2>
        <a
          href="/SHIVANI RAJKUMAR-resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition"
        >
          <FaDownload /> Download Resume
        </a>
      </section>

      {/* Contact Info */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-500">Contact</h2>
        <a
          href="mailto:shivanirajkumarsofficial@gmail.com"
          className="text-gray-300 hover:text-red-500 transition flex items-center gap-2 text-lg"
        >
          <FaEnvelope /> shivanirajkumarsofficial@gmail.com
        </a>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-xl">
          <a
            href="https://github.com/Shivs269"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition"
          >
            <FaGithub /> <span className="hidden sm:inline text-sm">GitHub</span>
          </a>

          <a
            href="http://linkedin.com/in/shivani-rajkumar-94ba3a299"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition"
          >
            <FaLinkedin /> <span className="hidden sm:inline text-sm">LinkedIn</span>
          </a>

          <a
            href="https://www.kaggle.com/shivs269"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition"
          >
            <SiKaggle /> <span className="hidden sm:inline text-sm">Kaggle</span>
          </a>

          <a
            href="https://gitlab.com/Shivs269"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition"
          >
            <SiGitlab /> <span className="hidden sm:inline text-sm">GitLab</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
