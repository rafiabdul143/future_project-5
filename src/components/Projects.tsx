import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Stats from './Stats';

import {
  ExternalLink,
  Github,
  Eye,
  Camera,
  Droplets,
  ShoppingCart,
  Shield,
  Cpu,
} from "lucide-react";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [initialCount, setInitialCount] = useState(4); // default desktop

  const projects = [
    {
      title: "Face Recognition Attendance System",
      description:
        "Real-time attendance tracking system using facial recognition technology with automated email notifications and user-friendly interface.",
      tech: ["Python", "OpenCV", "Tkinter", "SMTP"],
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Camera className="w-8 h-8" />,
      github: "#",
      live: "#",
    },
    {
      title: "Smart Irrigation System (IoT)",
      description:
        "Automated irrigation system with moisture sensors and servo control for efficient water management in agriculture.",
      tech: ["Arduino", "Moisture Sensors", "Servo", "C++"],
      image:
        "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Droplets className="w-8 h-8" />,
      github: "#",
      live: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "Full-stack e-commerce platform with responsive design, user authentication, and complete shopping functionality.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <ShoppingCart className="w-8 h-8" />,
      github: "#",
      live: "#",
    },
    {
      title: "COVID Info System",
      description:
        "Desktop application for real-time COVID-19 data visualization with API integration and intuitive user interface.",
      tech: ["Python", "Tkinter", "APIs"],
      image:
        "https://images.pexels.com/photos/3952244/pexels-photo-3952244.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Shield className="w-8 h-8" />,
      github: "#",
      live: "#",
    },
    {
      title: "CPU Performance Monitor",
      description:
        "Real-time CPU monitoring application with graphs and alerts for high usage events.",
      tech: ["Python", "Psutil", "Matplotlib"],
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Cpu className="w-8 h-8" />,
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and achievements with interactive UI and smooth animations.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Eye className="w-8 h-8" />,
      github: "#",
      live: "#",
    },
  ];

  // ✅ Set initial project count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setInitialCount(3); // Mobile/tablet
      } else {
        setInitialCount(4); // Desktop
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = showMore ? projects.length : initialCount;

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
         {/* 🔴 Background & Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>

        {/* Floating tech elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-float-3d shadow-glow-red"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-float-3d-delayed shadow-glow-red" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-red-500 rounded-full animate-float-3d shadow-glow-red" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-400 rounded-full animate-float-3d-delayed shadow-glow-red" style={{ animationDelay: '0.5s' }}></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-red-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-red-400/40 animate-pulse-3d"></div>
        <div className="absolute top-1/2 left-10 w-10 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-slide-horizontal"></div>
        <div className="absolute top-1/3 right-10 w-1 h-10 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-slide-vertical"></div>

        {/* Circuit & hologram */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-grid-move"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-red-500/10 rounded-full animate-hologram"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-500/15 rounded-full animate-hologram-reverse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-red-500 glow-red">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across
            various domains
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* View More / View Less */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            {showMore ? "View Less Projects" : "View More Projects"}
          </button>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white">
          {project.icon}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" /> View Code
          </a>
          <a
            href={project.live}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" /> Live Demo
          </a>
        </div>
      </div>
      
    </div>
  </motion.div>
);

export default Projects;
