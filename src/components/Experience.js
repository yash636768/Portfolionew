import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    date: '2022 - Present',
    icon: <FaBriefcase />,
    description: 'Developed modern web apps with React and Tailwind CSS.'
  },
  {
    title: 'B.Sc. in Computer Science',
    company: 'University Name',
    date: '2018 - 2022',
    icon: <FaGraduationCap />,
    description: 'Studied core computer science concepts and web development.'
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={exp.date}
            icon={exp.icon}
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            contentStyle={{ background: '#fff', color: '#1f2937' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold text-gray-900">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-700">{exp.company}</h4>
            <p className="text-gray-600">{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Experience; 