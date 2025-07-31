import React from "react";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    id: "shivani",
    name: "Shivani",
    subtitle: "Owner",
    target: "/home", // changed to cinematic dashboard
    gradient: "from-blue-500 to-blue-400",
  },
  {
    id: "guest",
    name: "Guest",
    subtitle: "Leave Feedback",
    target: "/feedback",
    gradient: "from-yellow-500 to-yellow-400",
  },
];

const Smiley = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    className="w-16 h-16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="8" fill="white" fillOpacity="0.05" />
    <circle cx="21" cy="24" r="4" fill="white" />
    <circle cx="43" cy="24" r="4" fill="white" />
    <path
      d="M20 34 C24 38 40 38 44 34"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const ProfileCard = ({ profile, onSelect }) => (
  <div
    onClick={() => onSelect(profile)}
    className="flex flex-col items-center cursor-pointer mx-4 group"
  >
    <div
      className={`
        w-32 h-32 rounded-lg relative flex items-center justify-center
        bg-gradient-to-br ${profile.gradient} 
        hover:scale-105 transition-transform duration-300
        shadow-xl
      `}
    >
      <Smiley />
      <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white transition" />
    </div>
    <div className="mt-2 text-center">
      <div className="text-lg font-semibold">{profile.name}</div>
      <div className="text-sm text-gray-300">{profile.subtitle}</div>
    </div>
  </div>
);

const ProfileSelector = () => {
  const navigate = useNavigate();

  const handleSelect = (profile) => {
    navigate(profile.target);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">Who's watching?</h1>
      <div className="flex flex-wrap justify-center">
        {profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} onSelect={handleSelect} />
        ))}
        {/* Add profile tile */}
        <div className="flex flex-col items-center cursor-pointer mx-4">
          <div className="w-32 h-32 rounded-lg bg-gray-700 flex items-center justify-center text-white text-5xl font-bold relative hover:scale-105 transition duration-300 shadow-xl">
            +
          </div>
          <div className="mt-2 text-center">
            <div className="text-lg font-semibold">Add Profile</div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button className="px-5 py-2 border border-gray-500 rounded hover:bg-gray-800 transition">
          Manage Profiles
        </button>
      </div>
    </div>
  );
};

export default ProfileSelector;
