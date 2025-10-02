import React from 'react';
import { motion } from 'framer-motion';
import BadgesSection from './BadgesSection';
import { Code, Database, Cpu, Globe, Award, BookOpen } from 'lucide-react';
import rafiPhoto from '../assets/rafiPhoto.jpg'; // Make sure extension matches

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Data Science Internship',
      description: 'NIT Trichy'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Cybersecurity Experience',
      description: 'Cisco Packet Tracer'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Open Source Contributor',
      description: 'Multiple Projects'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'CSE with IoT Specialization',
      description: 'KITS Warangal'
    }
  ];

  const floatingIcons = [
    { icon: <Code className="w-8 h-8" />, delay: 0 },
    { icon: <Database className="w-8 h-8" />, delay: 0.5 },
    { icon: <Cpu className="w-8 h-8" />, delay: 1 },
    { icon: <Globe className="w-8 h-8" />, delay: 1.5 }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
        {/* Background & Decorations */}
     <div className="absolute inset-0">
  {/* Gradient overlay: black at top → dark red at bottom */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/30"></div>

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
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-red-500 glow-red">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and floating icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Actual Image */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <img
                    src={rafiPhoto}
                    alt="Abdul Rafi"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating tech icons */}
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    viewport={{ once: true }}
                    className={`absolute text-red-400 ${
                      index === 0 ? '-top-4 -right-4' :
                      index === 1 ? '-bottom-4 -right-4' :
                      index === 2 ? '-bottom-4 -left-4' :
                      '-top-4 -left-4'
                    }`}
                  >
                    <div className="w-16 h-16 bg-gray-900 border border-red-500/30 rounded-lg flex items-center justify-center animate-pulse">
                      {item.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="text-red-400 font-semibold">Abdul Rafi</span>, a passionate and hardworking Computer Science and Engineering student with a specialization in <span className="text-red-400">Internet of Things (IoT)</span> at KITS Warangal.
              </p>
              
              <p>
                I love solving real-world problems using technology. From desktop apps to full-stack web development and IoT systems, I aim to build <span className="text-red-400">smart, scalable, and impactful solutions</span>.
              </p>
              
              <p>
                I've completed a <span className="text-red-400">Data Science internship at NIT Trichy</span>, worked on cybersecurity with Cisco Packet Tracer, and contributed to several open-source and personal tech projects.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-red-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-400">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <BadgesSection/>
    </section>
  );
};

export default About;
