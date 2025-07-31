import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate("/home");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Left Logo + Navigation */}
      <div className="flex items-center gap-6">
        <div
          onClick={handleLogoClick}
          className="text-red-600 font-extrabold text-3xl cursor-pointer select-none tracking-wide"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "2px",
          }}
        >
          Shivani<span className="text-white">.</span>
        </div>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#projects" className="hover:underline hover:text-red-500 transition">
            Projects
          </a>
          <a href="#skills" className="hover:underline hover:text-red-500 transition">
            Skills
          </a>
          <a
            href="/profile"
            className="hover:underline hover:text-red-500 transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Right Avatar */}
      <div
        className="flex items-center gap-2 cursor-pointer relative group"
        onClick={() => navigate("/profile")}
      >
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
          S
        </div>
        <div className="text-sm hidden sm:block">Shivani</div>

        {/* Hover Popup */}
        <div className="absolute right-0 top-10 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-80 p-4 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200">
          <h3 className="text-xl font-bold mb-2">Shivani Rajkumar</h3>
          <p className="text-sm text-gray-300 mb-4">
            AI & ML student building intelligent, cinematic software experiences.
          </p>
          <a
            href="/SHIVANI RAJKUMAR-resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
