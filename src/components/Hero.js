import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import profileImg from '../images/profile.jpg';

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

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = useMemo(() => [
    'Full Stack Developer',
    'UI/UX Designer', 
    'React Enthusiast',
    'Problem Solver'
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeWriter = () => {
      const currentWord = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/yash636768", color: "hover:text-gray-800" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/yash-pratap-singh-9012362a8/", color: "hover:text-blue-600" },
    { icon: <LeetCodeIcon />, href: "https://leetcode.com/yash70077", color: "hover:text-yellow-500" }
  ];

  return (
    <section className="pt-20 min-h-screen flex items-start justify-center relative overflow-hidden bg-[#11182a]">
      {/* Animated Background Elements */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] animated-blob z-0" aria-hidden="true"></div>
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
        animate={floatingAnimation}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20"
        animate={floatingAnimation}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="text-center max-w-6xl mx-auto px-6 relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.img
              src={profileImg}      
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Yash Pratap Singh
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-12 flex items-center justify-center">
            I'm a{' '}
            <span className="text-blue-600 dark:text-blue-400 ml-2 min-w-[300px] text-left">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative digital experiences that combine cutting-edge technology 
          with intuitive design. I transform ideas into reality through clean code and creative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 btn-primary shadow font-semibold text-lg"
          >
            Let's Work Together
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 btn-secondary shadow font-semibold text-lg"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`text-2xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 