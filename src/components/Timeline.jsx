import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
    {
      year: '2021–2023',
      title: 'MPC · Intermediate',
      description: 'Built my academic foundation and developed an interest in technology.',
    },
    {
      year: '2023',
      title: 'Explored Technology',
      description: 'Started exploring different areas of software development and discovered my interest in building technology.',
    },
    {
      year: '2024',
      title: 'Data Structures & Algorithms',
      description: 'Strengthened problem-solving skills and developed a strong foundation in DSA.',
    },
    {
      year: '2025',
      title: 'Backend Development & AI',
      description: 'Focused on backend development, APIs, databases, and began exploring AI and machine learning.',
    },
    {
      year: '2026',
      title: 'Building Real-World Projects',
      description: 'Built and contributed to practical projects, focusing on scalable, reliable, production-ready solutions.',
    },
  ];

  const detailsVariants = {
    hidden: { opacity: 0, y: -12, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -12, scale: 0.96 },
  };

  return (
    <section id="timeline" className="timeline">
      <div className="timeline-container">
        <div className="timeline-horizontal">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${hoveredIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot"></div>

                {/* Year */}
                <div className="timeline-year">{item.year}</div>

                {/* Title */}
                <div className="timeline-title">{item.title}</div>

                {/* Details Panel - Animated */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="timeline-details-panel"
                      variants={detailsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.25 }}
                    >
                      <div className="timeline-details-header">{item.title.toUpperCase()}</div>
                      <p className="timeline-details-description">{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
