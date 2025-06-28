import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaSun, FaMoon } from 'react-icons/fa';
import logo from './images/logo.png';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

console.log('App loaded');

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple resume download
  const handleResumeDownload = () => {
    try {
      // Method 1: Direct link approach
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Yash_Pratap_Singh_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Method 2: Fallback - open in new tab
      console.log('Direct download failed, opening in new tab');
      window.open('/resume.pdf', '_blank');
    }
  };

  // Initialize AOS
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    };
    initAOS();
  }, []);

  // Sync dark mode with <html> tag
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#11182a] backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
        <div className="w-full flex items-center px-4 py-3">
          {/* Left: Logo (absolute left) */}
          <div className="flex-shrink-0 mr-4">
            <a href="#hero" className="flex items-center">
              <img src={logo} alt="Yash Portfolio Logo" className="h-10 w-auto hover:scale-105 transition-transform duration-300" />
            </a>
          </div>
          {/* Center: Nav Links (flex-1 for centering) */}
          <ul className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Right: Resume + Theme + Mobile Menu (absolute right) */}
          <div className="flex items-center space-x-4 flex-shrink-0 ml-4">
            {/* Download Resume Button - Desktop */}
            <button
              type="button"
              onClick={handleResumeDownload}
              className="hidden md:flex items-center px-5 py-2 btn-primary shadow text-base"
            >
              <FaDownload className="mr-2 text-sm" />
              Download Resume
            </button>
            {/* Theme Toggle Button - Desktop */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow focus:outline-none border border-gray-300 dark:border-gray-600"
              aria-label="Toggle Dark Mode"
              style={{ minWidth: 40, minHeight: 40 }}
            >
              {darkMode ? <FaMoon /> : <FaSun />}
            </button>
            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/30 text-white"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div id="scroll-progress"></div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white dark:bg-gray-800 shadow-lg overflow-hidden"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.a>
          ))}
          {/* Download Resume Button - Mobile */}
          <motion.button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              setTimeout(handleResumeDownload, 200); // Wait for menu to close
            }}
            whileHover={{ x: 10 }}
            className="flex items-center w-full text-left btn-primary"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 pt-0">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Enhanced Footer */}
      <Footer />
    </div>
  );
}

export default App;
