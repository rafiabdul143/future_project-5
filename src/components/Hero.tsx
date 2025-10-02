import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const titles = ["Full-Stack Developer", ".NET Developer", "Desktop Developer","IoT Enthusiast","UI/UX Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through titles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
     <section
      id="home"
    
    >
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background & Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-red-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>
        {/* Floating tech elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-float-3d shadow-glow-red"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-float-3d-delayed shadow-glow-red" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-red-500 rounded-full animate-float-3d shadow-glow-red" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-400 rounded-full animate-float-3d-delayed shadow-glow-red" style={{animationDelay: '0.5s'}}></div>
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

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-red-500 glow-red">Abdul Rafi</span>
        </motion.h1>

        {/* Desktop: all titles */}
     {/* Desktop: all titles */}
{/* Desktop: animated titles */}
<div className="hidden md:flex text-2xl mb-8 text-gray-300 min-h-[2rem] justify-center items-center overflow-hidden relative w-full max-w-2xl mx-auto">
  <AnimatePresence mode="wait">
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="absolute text-red-400 px-2 whitespace-nowrap"
    >
      {titles[currentIndex]}
    </motion.span>
  </AnimatePresence>
</div>



        {/* Mobile: animated slideshow */}
        
<div className="md:hidden text-xl mb-8 text-gray-300 min-h-[2rem] flex justify-center items-center overflow-hidden relative w-full max-w-xs mx-auto">
  <AnimatePresence mode="wait">
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
      className="absolute text-red-400 px-2 whitespace-nowrap"
    >
      {titles[currentIndex]}
    </motion.span>
  </AnimatePresence>
</div>


        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
        >
          Crafting robust software and intelligent systems with clean code and scalable architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full"
        >
          <a
            href="#"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 font-semibold transform hover:scale-105 shadow-md hover:shadow-red-700/50"
          >
            <Download className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            Download Resume
          </a>

          <button
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 font-semibold transform hover:scale-105 shadow-md hover:shadow-red-700/50"
          >
            View Projects
            <ChevronDown className="w-5 h-5 rotate-0 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.6 }}
          className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          onClick={() => scrollToSection('skills')}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </section></section>
  );
};

export default Hero;
