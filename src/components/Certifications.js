import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaTimes } from 'react-icons/fa';
import skyscanner from '../images/skyscanner.webp';

const certifications = [
  {
    name: 'Front-End Software Engineering Job Simulation',
    issuer: 'Skyscanner',
    year: '2025',
    link: 'https://drive.google.com/file/d/1DYJQ6ruPHiRgD10QnZmpH6F6iPJ-VvIQ/view?usp=sharing',
    image: skyscanner,
    description: 'Completed practical tasks in Skyscanner & created a Backpack React Web App.'
  },
  // {
  //   name: ' NASA SPACE HACKATHON',
  //   issuer: 'KTS',
  //   year: '2025',
  //   link: 'https://drive.google.com/file/d/1yxi2SDJUOsVrWwWEPoFdXph3epgXCaqf/view?usp=sharing',
  //   image: 'https://download.logo.wine/logo/British_Airways/British_Airways-Logo.wine.png',
  //   description: 'Modeling lounge eligibility at Heathrow Terminal Predicting customer buying behaviour.'
  // },
  {
    name: 'Data Analytics ',
    issuer: 'Deloitte',
    year: '2025',
    link: 'https://drive.google.com/file/d/1HHgPsZsxRidGzKjy8lmqUPccckKhAZww/view?usp=sharing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/DeloitteNewSmall.png',
    description: 'Completed comprehensive coursework in Data Analytics'
  },
  {
    name: 'Data Science Basics',
    issuer: 'British Airways',
    year: '2025',
    link: 'https://drive.google.com/file/d/1yxi2SDJUOsVrWwWEPoFdXph3epgXCaqf/view?usp=sharing',
    image: 'https://download.logo.wine/logo/British_Airways/British_Airways-Logo.wine.png',
    description: 'Modeling lounge eligibility at Heathrow Terminal Predicting customer buying behaviour.'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: 'spring', stiffness: 80 }
  })
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div id="certifications" className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10 flex items-center justify-center gap-3">
        <FaCertificate className="text-blue-500 text-4xl" /> Certifications
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer group border border-gray-200 dark:border-gray-700 transition-all duration-300"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="flex flex-col items-center p-6">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-20 h-20 object-contain mb-4 rounded-full border-4 border-blue-100 group-hover:border-blue-400 transition"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 text-center">
                {cert.name}
              </h3>
              <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-xs px-3 py-1 rounded-full mb-2">
                {cert.issuer}
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{cert.year}</p>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-3 line-clamp-2">
                {cert.description}
              </p>
              <button
                className="mt-2 px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded shadow text-sm transition"
                onClick={e => { e.stopPropagation(); setSelectedCert(cert); }}
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for certificate preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-28 h-28 object-contain mx-auto mb-4 rounded-full border-4 border-blue-200"
              />
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                {selectedCert.name}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                  {selectedCert.issuer}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-300">{selectedCert.year}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                {selectedCert.description}
              </p>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow font-medium transition"
              >
                Open Certificate
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications; 