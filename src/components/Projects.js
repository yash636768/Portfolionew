import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaEye } from 'react-icons/fa';



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Pitch',
      description: 'An intelligent assistant that helps founders create customized investor decks, simplifying pitch preparation and boosting presentation effectiveness.',
      shortDescription: 'SmartPitch – AI tool that auto-generates tailored investor decks, streamlining pitch prep and improving impact',
      image: 'https://pbs.twimg.com/media/Gtgq2zja4AAHsE6.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Python', 'Tailwind'],
      live: 'https://github.com/Yash1889/SmartPitch',
      github: 'https://github.com/Yash1889/SmartPitch',
       category: 'Frontend'
    },
    {
      id: 2,
      title: ' Jivanamrta',
      description: 'Developed an AI-powered platform blending Ayurveda with geolocation and real-time tools to empower farmers through fair crop pricing, smart decision-making, and sustainable agritourism.',
      shortDescription: 'AI-powered agri-tech platform blending Ayurveda with real-time tools for crop pricing, farmer networking, and sustainable tourism.',
      image: 'https://cdn.prod.website-files.com/6077b42e4e8d6b13a8ea682a/640eb1bd2e494865ac01beb0_AI%20in%20Ag.jpg',
      tech: [ 'HTML','CSS','Javascript','ReactJs','Nodejs','Express','Bootstrap','Sql'],
      live: 'https://example.com',
      github: 'https://github.com',
        category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, contact form, and SEO optimization.',
      shortDescription: 'Modern portfolio with dark mode and animations',
      image: 'https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'AOS'],
      live: 'http://github.com/yash636768/Portfolionew',
      github: 'http://github.com/yash636768/Portfolionew',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'BGMI Arena',
      description: 'BGMI Arena is your all-in-one hub for BGMI tournaments, tips, and news.Join ongoing competitions, track teams, and stay updated with expert tricks.Everything a BGMI fan needs — from match schedules to gameplay guides.',
      shortDescription: 'Your ultimate BGMI destination for tournaments, team updates, and pro tips.Play, learn, and stay ahead with the latest news and strategies.',
      image: 'https://s3b.cashify.in/gpro/uploads/2021/07/15125850/BGMI-Tournament-Poster.jpg',
      tech: ['React', 'Tailwind', 'Typescript', 'Node.js'],
      live: 'https://github.com/yash636768/BGMI',
      github: 'https://github.com/yash636768/BGMI',
      category: 'Frontend'
    },
    // {
    //   id: 5,
    //   title: 'Weather Dashboard',
    //   description: 'A beautiful weather dashboard with real-time weather data, 7-day forecasts, and interactive maps. Features location-based weather and customizable themes.',
    //   shortDescription: 'Real-time weather dashboard with interactive maps',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop',
    //   tech: ['React', 'Weather API', 'Chart.js', 'Leaflet'],
    //   live: 'https://example.com',
    //   github: 'https://github.com',
    //   category: 'API Integration'
    // },
    // {
    //   id: 6,
    //   title: 'Social Media Dashboard',
    //   description: 'A comprehensive social media management dashboard for businesses. Features include post scheduling, analytics, and multi-platform integration.',
    //   shortDescription: 'Social media management with analytics and scheduling',
    //   image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop',
    //   tech: ['React', 'Node.js', 'PostgreSQL', 'Social APIs'],
    //   live: 'https://example.com',
    //   github: 'https://github.com',
    //   category: 'Full Stack'
    // }
  ];

  const categories = ['All', 'Full Stack', 'Frontend',];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-section-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute -top-32 left-0 w-[350px] h-[350px] animated-blob z-0" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'btn-primary shadow'
                  : 'btn-secondary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-glass rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300"
                    >
                      <FaEye className="text-xl" />
                    </motion.button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaGithub className="text-lg" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm font-medium">Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/yash636768"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 btn-primary font-semibold shadow"
          >
            View More on GitHub
            <FaGithub className="ml-2 text-xl" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full shadow-lg"
                >
                  <FaTimes className="text-xl" />
                </motion.button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <FaGithub className="text-lg" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 