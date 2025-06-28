import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaReact className="text-blue-400" />, name: 'React' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind' },
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS3' },
  { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
  { icon: <FaGitAlt className="text-orange-600" />, name: 'Git' },
];

const Skills = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.15, rotate: 6 }}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 