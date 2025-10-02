import React, { useState } from "react";
import { motion } from "framer-motion";
import ProficiencyScores from './ProficiencyScores';
import {
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaDocker, FaAws, FaLinux, FaGitAlt, FaFigma
} from "react-icons/fa";
import {
  SiExpress, SiDjango, SiSpring, SiBootstrap, SiTailwindcss,
  SiDotnet, SiKubernetes, SiGooglecloud, SiFirebase, SiMysql, SiMongodb,
  SiPostman, SiArduino
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";
import { SiOracle } from "react-icons/si";

// Define the Skill type
type Skill = {
  name: string;
  icon: React.ReactNode;
  desc: string;
};

// Define the SkillsByCategory type
type SkillsByCategory = {
  [category: string]: Skill[];
};

// ✅ Organized skills by category
const skillsByCategory: SkillsByCategory = {
  Languages: [
    { name: "Java", icon: <FaJava className="text-orange-400" />, desc: "Backend systems & enterprise apps." },
    { name: "Python", icon: <FaPython className="text-yellow-400" />, desc: "Scripting, data, web dev." },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, desc: "Frontend + backend ES6+ dev." },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, desc: "Semantic web structure." },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, desc: "Responsive, modern styling." },
     { name: "C#", icon: <SiDotnet className="text-indigo-500" />, desc: "Microsoft programming language for apps." }, // Added C#
  ],
  Frameworks: [
    { name: "React.js", icon: <FaReact className="text-blue-400" />, desc: "SPAs & reusable UI." },
    
    { name: ".NET", icon: <SiDotnet className="text-indigo-400" />, desc: "Microsoft web & desktop apps." },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "Scalable backend APIs." },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" />, desc: "Fast backend web servers." },
    { name: "Django", icon: <SiDjango className="text-green-400" />, desc: "Python web framework." },
    { name: "Spring", icon: <SiSpring className="text-green-500" />, desc: "Java enterprise apps." },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" />, desc: "UI components & grid." },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" />, desc: "Utility-first CSS." },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql className="text-blue-500" />, desc: "Relational DB management." },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, desc: "NoSQL document DB." },
    { name: "SQL Server", icon: <FaDatabase className="text-red-500" />, desc: "Microsoft relational DB." },
    { 
  name: "Oracle DB", 
  icon: <SiOracle className="text-red-700" />, 
  desc: "Enterprise relational database from Oracle." 
}
  ],
  DevOps: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, desc: "Version control & CI/CD." },
    { name: "Docker", icon: <FaDocker className="text-blue-500" />, desc: "Containerized apps." },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" />, desc: "Container orchestration." },
    { name: "AWS", icon: <FaAws className="text-yellow-500" />, desc: "Cloud infrastructure." },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-sky-400" />, desc: "Cloud services." },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" />, desc: "Realtime apps." }
  ],
  Tools: [
    { name: "Linux", icon: <FaLinux className="text-gray-300" />, desc: "OS & server management." },
    { name: "Postman", icon: <SiPostman className="text-orange-500" />, desc: "API testing & docs." },
    { name: "VS Code", icon: <VscVscode className="text-blue-400" />, desc: "Code editor." },
    { name: "Visual Studio", icon: <VscVscode className="text-purple-500" />, desc: "IDE for C# & .NET." },
    { name: "Figma", icon: <FaFigma className="text-pink-500" />, desc: "UI/UX design." },
    { name: "Arduino", icon: <SiArduino className="text-green-400" />, desc: "IoT & hardware." }
  ]
};

// Motion variants
const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 120 } },
  hover: { y: -10, scale: 1.08, boxShadow: "0 0 25px rgba(239, 68, 68, 0.6)" }
};
const SkillsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");

  return (
    <div
      id="skills"
      className="relative pt-24 pb-32 mb-5 bg-black text-white overflow-visible"
    >
      {/* 🔴 Background & Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black-800/30 via-red-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(100,0,0,0.05),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(100,0,0,0.05),transparent_60%)]"></div>

        {/* Floating red orbs */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-800/35 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-700/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-red-800/30 animate-bounce delay-200 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-700/25 animate-pulse rounded-full"></div>

        {/* Geometric accents */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-red-800/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-red-700/35 animate-pulse"></div>

        {/* Circuit/grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(100,0,0,0.15)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-grid-move"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Technical <span className="text-red-500">Skills</span>
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillsByCategory).map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{
                  scale: 1.1,
                  ...(isActive
                    ? { boxShadow: "0 0 15px rgba(239,68,68,0.7)" }
                    : { boxShadow: "0 0 10px rgba(255,255,255,0.2)" }),
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 overflow-visible"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {skillsByCategory[activeCategory].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer 
                         bg-white/5 backdrop-blur-md border border-white/10 
                         hover:border-red-500/50 transition-colors aspect-square max-w-[250px]"
              variants={cardVariants}
              whileHover="hover"
              whileTap="hover"
            >
              <div className="text-6xl mb-3">{skill.icon}</div>
              <span className="text-lg font-semibold mb-1">{skill.name}</span>
              <p className="text-sm text-gray-400 text-center">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProficiencyScores />
    </div>
  );
};

export default SkillsGrid;