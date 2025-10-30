const projects = [
    {
      id: 1,
      title: "Sericulture Sustainability (Patented AI Model)",
      subtitle: "AI-powered business model for sustainable sericulture",
      description:
        "Team project integrating machine learning and deep learning to enhance sericulture with threat detection and prediction.",
      tags: ["AI", "ML", "Sustainability", "Patent"],
      image: process.env.PUBLIC_URL + "/images/silk.jpg",
      link: "/project/1",
    },
    {
      id: 2,
      title: "Melody Match",
      subtitle: "Personalized music recommendation",
      description:
        "Recommends music based on preferences, seasonality, and popularity.",
      tags: ["Recommendation", "Python", "ML"],
      image: process.env.PUBLIC_URL + "/images/music.jpg",
      link: "/project/2",
    },
    {
      id: 3,
      title: "Line Following Robot",
      subtitle: "Embedded automation",
      description:
        "Built using Arduino Uno and IR sensors to follow lines autonomously.",
      tags: ["Embedded", "Arduino", "Automation"],
      image: process.env.PUBLIC_URL + "/images/lfr.jpg",
      link: "/project/3",
    },
    {
      id: 4,
      title: "Automated Plant Watering",
      subtitle: "IoT + Sensor System",
      description:
        "Waters plants based on soil moisture, with telemetry.",
      tags: ["IoT", "Sensors", "Automation"],
      image: process.env.PUBLIC_URL + "/images/plant.jpg",
      link: "/project/4",
    },
    {
      id: 5,
      title: "College Connect",
      subtitle: "Flutter event management app",
      description:
        "App for students to join streams, view and register for events, built with Firebase integration.",
      tags: ["Flutter", "Firebase", "UI"],
      image: process.env.PUBLIC_URL + "/images/college-connect.jpg",
      link: "/project/5",
    },
    {
      id: 6,
      title: "Dum-Dum",
      subtitle: "LLM Object Recognition",
      description:
        "Uses a large language model to describe visible objects from a webcam feed.",
      tags: ["LLM", "Computer Vision"],
      image: process.env.PUBLIC_URL + "/images/llm.jpg",
      link: "/project/6",
    },
    {
      id: 7,
      title: "Classroom Optimization",
      subtitle: "Lecture intelligence system",
      description:
        "Timestamped audio/video, notes, and practice question generation for better learning.",
      tags: ["AI", "Education", "Research"],
      image: process.env.PUBLIC_URL + "/images/classroom.jpg",
      link: "/project/7",
    },
  ];
  
  export default projects;
  