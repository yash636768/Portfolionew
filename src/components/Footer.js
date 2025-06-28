import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

// Simple LeetCode SVG icon
const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <g>
      <path d="M36.5 13.5L13.5 36.5" stroke="#FFA116" strokeWidth="4" strokeLinecap="round"/>
      <path d="M20 43C28.2843 43 35 36.2843 35 28C35 19.7157 28.2843 13 20 13C15.0294 13 10.7294 15.6863 8.5 20" stroke="#070707" strokeWidth="4" strokeLinecap="round"/>
      <path d="M13.5 36.5L8.5 31.5" stroke="#070707" strokeWidth="4" strokeLinecap="round"/>
    </g>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-800' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: <LeetCodeIcon />, href: 'https://leetcode.com/yash70077', label: 'LeetCode', color: 'hover:text-yellow-500' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-section-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute -top-32 left-0 w-[350px] h-[350px] animated-blob z-0" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10 bg-glass py-12 rounded-3xl shadow-xl">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <motion.div 
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                MyPortfolio
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                A passionate full-stack developer dedicated to creating innovative digital experiences 
                that combine cutting-edge technology with intuitive design.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300 p-3 bg-gray-800 rounded-full hover:bg-gray-700`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-3 text-gray-400">
                <p>yashsinghpratap6768@gmail.com</p>
                <p>+91 9794636768</p>
                <p>Ghaziabad, Uttar Pradesh, India</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-center md:text-left"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Yash Pratap Singh. All rights reserved. Made with{' '}
              <FaHeart className="inline text-red-500 animate-pulse" />{' '}
              and lots of ☕
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 glow-btn px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <FaArrowUp className="text-sm" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full opacity-30"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-30"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-30"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </footer>
  );
};

export default Footer; 