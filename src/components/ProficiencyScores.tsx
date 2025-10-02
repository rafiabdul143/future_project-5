import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface Score {
  name: string;
  score: number;
}

const proficiencyScores: Score[] = [
  { name: "Deep Learning", score: 50 },
  { name: "Machine Learning", score: 45 },
  { name: ".NET", score: 70 },
  { name: "Cloud Computing", score: 25 },
  { name: "Data Analytics", score: 60 },
];

interface ScoreBarProps {
  name: string;
  score: number;
  index: number;
}

const ScoreBar: React.FC<ScoreBarProps> = ({ name, score, index }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, score, {
      duration: 2,
      delay: index * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return controls.stop;
  }, [count, score, index]);

  const getSkillLevel = (score: number) => {
    if (score >= 80) return { level: "Expert", color: "text-red-400" };
    if (score >= 60) return { level: "Advanced", color: "text-red-500" };
    if (score >= 40) return { level: "Intermediate", color: "text-orange-400" };
    return { level: "Beginner", color: "text-yellow-400" };
  };

  const skillLevel = getSkillLevel(score);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative w-full"
    >
      <div className="relative bg-gradient-to-r from-gray-900/80 to-black/60 backdrop-blur-sm rounded-xl p-3 border border-gray-800/50 hover:border-red-900/50 transition-all duration-300 shadow-md hover:shadow-red-900/20">
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col">
            <span className="text-white text-lg md:text-xl font-semibold tracking-wide">{name}</span>
            <span className={`text-sm md:text-base font-medium ${skillLevel.color} mt-0.5`}>{skillLevel.level}</span>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <motion.span
              className="text-2xl md:text-3xl font-bold text-red-400 tabular-nums"
              key={display}
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {display}
            </motion.span>
            <span className="text-gray-400 text-sm md:text-lg font-medium">/ 100</span>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-3 md:h-4 bg-gray-800/50 rounded-full overflow-hidden relative shadow-inner border border-gray-700/50">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: `${score}%` }}
              transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15 }}
              viewport={{ once: true }}
              className="h-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500" />
            </motion.div>
          </div>
          <div className="flex justify-between mt-0.5 px-1 text-xs text-gray-500">
            {[0, 25, 50, 75, 100].map((mark) => (
              <span key={mark}>{mark}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProficiencyScores: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-20 bg-black">

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

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full px-4 md:px-0"
      >
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            Proficiency <span className="text-red-500">Scores</span>
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1.2, delay: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {proficiencyScores.map((item, index) => (
            <ScoreBar key={item.name} name={item.name} score={item.score} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProficiencyScores;
