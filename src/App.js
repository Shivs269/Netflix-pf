import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProfileSelector from "./components/ProfileSelector";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import FeedbackPage from "./pages/FeedbackPage";
import ProjectDetails from "./pages/ProjectDetails"; // <- NEW IMPORT

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<ProfileSelector />} />

          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <ProfilePage />
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />

          <Route
            path="/feedback"
            element={
              <>
                <Navbar />
                <FeedbackPage />
              </>
            }
          />

          <Route
            path="/project/:id"
            element={
              <>
                <Navbar />
                <ProjectDetails />
              </>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
