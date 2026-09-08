import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Education.css';

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      year: '2021–2023',
      period: '2021 – 2023',
      institution: 'Star Junior College',
      course: 'Secondary Schooling',
      location: 'Machilipatnam, Andhra Pradesh',
      stream: 'Stream: MPC',
    },
    {
      year: '2023–2027',
      period: '2023 – 2027',
      institution: 'Shri Vishnu Engineering College for Women',
      course: 'B.Tech',
      location: 'Bhimavaram, Andhra Pradesh',
      stream: 'Branch: Information Technology',
    },
  ];

  const detailsVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.98 },
  };

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-heading">Education</h2>

        <div className="timeline-horizontal">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {educationData.map((edu, index) => (
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
                <div className="timeline-year">{edu.year}</div>

                {/* Institution Name */}
                <div className="timeline-institution">{edu.institution.split(' ').slice(-2).join(' ')}</div>

                {/* Details Card - Animated */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="timeline-details"
                      variants={detailsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.25 }}
                    >
                      <div className="timeline-details-content">
                        <div>
                          <div className="timeline-details-label">Institution</div>
                          <div className="timeline-details-value">{edu.institution}</div>
                        </div>
                        <div>
                          <div className="timeline-details-label">Course</div>
                          <div className="timeline-details-value">{edu.course}</div>
                        </div>
                        <div>
                          <div className="timeline-details-label">Duration</div>
                          <div className="timeline-details-value">{edu.period}</div>
                        </div>
                        <div>
                          <div className="timeline-details-label">Location</div>
                          <div className="timeline-details-value">{edu.location}</div>
                        </div>
                        <div>
                          <div className="timeline-details-label">Details</div>
                          <div className="timeline-details-value">{edu.stream}</div>
                        </div>
                      </div>
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

export default Education;
