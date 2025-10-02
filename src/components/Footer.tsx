import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/rafiabdul143', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/rafiabdul143', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/your_twitter_handle', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/your_instagram_handle', label: 'Instagram' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:rafiabdul143@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-white"
            >
              <span className="text-red-500">Abdul</span>Rafi
            </motion.div>
            <div className="text-gray-400 text-sm">
              ©  All rights reserved.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Abdul Rafi
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
