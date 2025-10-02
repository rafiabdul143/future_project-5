import React, { useState } from "react";
import { motion } from "framer-motion";
import DataAnalyticsImg from '../assets/data analytics.png';

// Example badge data
const badges = [
{ img: DataAnalyticsImg, link: "https://example.com/1", name: "Data Analytics", issuer: "Amazon Web Services" },
  { img: "https://via.placeholder.com/80?text=Badge2", link: "https://example.com/2", name: "Sql ", issuer: "Oracle" },
  { img: "https://via.placeholder.com/80?text=Badge3", link: "https://example.com/3", name: "React Expert", issuer: "Meta" },
  { img: "https://via.placeholder.com/80?text=Badge4", link: "https://example.com/4", name: "ML Engineer", issuer: "Google Cloud" },
  { img: "https://via.placeholder.com/80?text=Badge5", link: "https://example.com/5", name: "DevOps Pro", issuer: "Docker" },
  { img: "https://via.placeholder.com/80?text=Badge6", link: "https://example.com/6", name: "Data Analyst", issuer: "IBM" },
  { img: "https://via.placeholder.com/80?text=Badge7", link: "https://example.com/7", name: "Security+", issuer: "CompTIA" },
  { img: "https://via.placeholder.com/80?text=Badge8", link: "https://example.com/8", name: "Kubernetes", issuer: "CNCF" },
];

const BadgeCard: React.FC<{ badge: typeof badges[0]; index: number }> = ({ badge, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative flex-shrink-0"
    >
      <motion.a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="block relative"
      >
        {/* Main card container */}
        <div className="relative bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-red-900/50 transition-all duration-300 shadow-2xl hover:shadow-red-900/25 w-64 h-80">
          {/* Badge image container */}
          <div className="relative mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 shadow-inner border border-gray-700/50 group-hover:border-red-800/50 transition-all duration-300">
              <img 
                src={badge.img} 
                alt={badge.name} 
                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300" 
              />
            </div>
            <div className="absolute inset-0 bg-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          {/* Badge content */}
          <div className="text-center space-y-3">
            <h3 className="text-white font-bold text-lg leading-tight group-hover:text-red-400 transition-colors duration-300">{badge.name}</h3>
            <p className="text-gray-400 text-sm font-medium">{badge.issuer}</p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Verified</span>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

const BadgesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background & Decorations */}
<div className="absolute inset-0">
  {/* Gradient overlay: black at top → dark red at bottom */}
  <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-red-950/30"></div>

  {/* Radial subtle glows to soften the transition */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(100,0,0,0.05),transparent_60%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(100,0,0,0.05),transparent_60%)]"></div>

  {/* Floating tech elements */}
  <div className="absolute top-20 left-10 w-4 h-4 bg-red-800/35 rounded-full animate-float-3d shadow-glow-red/35"></div>
  <div className="absolute top-40 right-20 w-3 h-3 bg-red-700/30 rounded-full animate-float-3d-delayed shadow-glow-red/30" style={{ animationDelay: '1s' }}></div>
  <div className="absolute bottom-32 left-20 w-5 h-5 bg-red-800/30 rounded-full animate-float-3d shadow-glow-red/30" style={{ animationDelay: '2s' }}></div>
  <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-700/25 rounded-full animate-float-3d-delayed shadow-glow-red/25" style={{ animationDelay: '0.5s' }}></div>

  {/* Geometric shapes */}
  <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-red-800/30 rotate-45 animate-spin-slow"></div>
  <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-red-700/35 animate-pulse-3d"></div>
  <div className="absolute top-1/2 left-10 w-10 h-1 bg-gradient-to-r from-transparent via-red-800/25 to-transparent animate-slide-horizontal"></div>
  <div className="absolute top-1/3 right-10 w-1 h-10 bg-gradient-to-b from-transparent via-red-800/25 to-transparent animate-slide-vertical"></div>

  {/* Circuit/grid lines */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(100,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(100,0,0,0.15)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-grid-move"></div>
</div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Badges{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-lg">
              & Certification
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of badges and certifications that reflect my expertise and growth in technology
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Desktop grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {(showAll ? badges : badges.slice(0, 4)).map((badge, index) => (
            <BadgeCard key={index} badge={badge} index={index} />
          ))}
        </div>

        {/* Desktop View More / View Less Button */}
        <div className="hidden md:flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden mt-6">
          <div className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide">
            {badges.map((badge, index) => (
              <BadgeCard key={index} badge={badge} index={index} />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-red-500/40 cursor-pointer">
              <div className="text-3xl font-bold text-red-400 mb-2">12+</div>
              <div className="text-gray-300 font-medium">Technologies Mastered</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-red-500/40 cursor-pointer">
              <div className="text-3xl font-bold text-red-400 mb-2">25+</div>
              <div className="text-gray-300 font-medium">Projects Completed</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-red-500/40 cursor-pointer">
              <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-gray-300 font-medium">Verified</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BadgesSection;
