import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "AI Engineer Intern",
      company: "SmartX Technologies",
      period: "March 2026 – Present",
      bullets: [
        "AI-powered platforms and backend systems",
        "Wheels.ai: ML pipelines, APIs, authentication",
        "Django REST Framework automation",
        "Docker, scalable architectures"
      ]
    },
    {
      role: "Python Developer Intern",
      company: "Infosys Springboard",
      period: "Sep 2025 – Nov 2025",
      bullets: [
        "AI-powered quiz generation system",
        "JWT authentication and role-based access",
        "RESTful APIs for quiz management",
        "Backend optimization and AI integration"
      ]
    }
  ];

  const cardVariants = {
    hover: {
      y: -4,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-heading">Professional Experience</h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              variants={cardVariants}
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <div className="experience-card-header">
                <div>
                  <h3 className="experience-title">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
