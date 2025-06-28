import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaHeart, FaLightbulb, FaLaptopCode } from 'react-icons/fa';
import profileImg from '../images/profile.jpg';

const About = () => {
  const skills = [
    { name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-green-600' },
    { name: 'SQL', level: 80, color: 'from-blue-600 to-blue-700' },
    { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-700' },
    { name: 'C++', level: 75, color: 'from-orange-500 to-orange-600' }
  ];

  const stats = [
    { icon: <FaCode />, number: '3', label: 'Projects Completed', color: 'text-blue-600' },
   
    { icon: <FaRocket />, number: '15+', label: 'Technologies', color: 'text-green-600' },
    
  ];

  const coreValues = [
    { icon: <FaHeart className="text-pink-500 text-2xl" />, label: 'Passion' },
    { icon: <FaLightbulb className="text-yellow-400 text-2xl" />, label: 'Creativity' },
    { icon: <FaLaptopCode className="text-blue-500 text-2xl" />, label: 'Problem Solving' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-section-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute -top-32 right-0 w-[350px] h-[350px] animated-blob z-0" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10 bg-glass py-12 rounded-3xl shadow-xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center h-full bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-md"
          >
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative mb-8"
            >
              <div className="relative">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-gray-900"
                />
                <motion.div
                  className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg opacity-70"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ pointerEvents: 'none' }}
                >
                  <FaCode className="text-lg" />
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 w-full"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className={`mb-2 ${stat.color}`}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Values Row */}
            <div className="flex justify-center gap-8 mt-8">
              {coreValues.map((val, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {val.icon}
                  <span className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-200">{val.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content and Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Turning Ideas Into <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reality</span>
              </h3>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a love for crafting innovative, user-focused digital experiences. 
                  I've helped turn ideas into scalable, functional, and responsive applications across platforms.
                </p>
                <p>
                  My skills cover the full stack—from creating sleek front-end interfaces to building powerful back-end systems. 
                  I believe in writing clean, maintainable code and staying updated with modern tools and best practices.
                </p>
                <p>
                  When I'm not coding, I explore new technologies, contribute to open-source, or share knowledge with the developer community. 
                  I'm always eager to face new challenges and keep learning every day.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 btn-primary font-semibold shadow"
              >
                Let's Discuss Your Project
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 