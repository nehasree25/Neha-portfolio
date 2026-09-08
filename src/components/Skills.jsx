import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaGitAlt, 
  FaGithub, 
  FaRobot, 
  FaReact 
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiScikitlearn, 
  SiMongodb, 
  SiMysql, 
  SiPostman, 
  SiFastapi 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [hoveredJourney, setHoveredJourney] = useState(null);

  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'Django REST', icon: <SiDjango /> },
    { name: 'Machine Learning', icon: <SiScikitlearn /> },
    { name: 'MediaPipe', icon: <FaRobot /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'DSA', icon: <FaDatabase /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> }
  ];

  const journey = [
    {
      year: '2021–2023',
      title: 'MPC · Intermediate',
      description: 'Built my academic foundation through MPC and developed an interest in technology.',
    },
    {
      year: '2023',
      title: 'Explored Technology',
      description: 'Started exploring different areas of technology and software development.',
    },
    {
      year: '2024',
      title: 'Data Structures & Algorithms',
      description: 'Strengthened my problem-solving foundation through Data Structures and Algorithms.',
    },
    {
      year: '2025',
      title: 'Backend Development & AI',
      description: 'Focused on backend development, APIs, databases, and began exploring AI and machine learning.',
    },
    {
      year: '2026',
      title: 'Building Real-World Projects',
      description: 'Building practical projects with a focus on scalable, reliable, production-ready software.',
    },
  ];

  const descriptionVariants = {
    hidden: { opacity: 0, y: 6, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 6, scale: 0.98 },
  };

  return (
    <section id="skills" className="skills-journey">
      <div className="skills-journey-container">
        {/* LEFT - SKILLS */}
        <div className="skills-column">
          <h2 className="column-heading">Skills</h2>
          <div className="skills-pills">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-pill"
              >
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* ACHIEVEMENTS */}
          <div className="achievements-section">
            <h3 className="achievements-heading">Achievements</h3>
            <div className="achievements-list">
              <div className="achievement-item">
                <span className="achievement-number">01</span>
                <div className="achievement-content">
                  <div className="achievement-title">DSH Hacks V1</div>
                  <div className="achievement-subtitle">Top 25% · Recognized for innovation and problem-solving.</div>
                </div>
              </div>

              <div className="achievement-item">
                <span className="achievement-number">02</span>
                <div className="achievement-content">
                  <div className="achievement-title">French A1</div>
                  <div className="achievement-subtitle">Language Certification · Distinction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER DIVIDER */}
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
        </div>

        {/* RIGHT - JOURNEY */}
        <div className="journey-column">
          <h2 className="column-heading">My Journey</h2>
          <div className="journey-timeline">
            {journey.map((item, index) => (
              <div
                key={index}
                className="journey-item"
                onMouseEnter={() => setHoveredJourney(index)}
                onMouseLeave={() => setHoveredJourney(null)}
              >
                {/* Timeline Line & Dot */}
                <div className="journey-marker">
                  <div className="journey-dot"></div>
                  <div className="journey-line"></div>
                </div>

                {/* Year & Title */}
                <div className="journey-content">
                  <div className="journey-year">{item.year}</div>
                  <div className="journey-title">{item.title}</div>

                  {/* Description - Animated */}
                  <AnimatePresence>
                    {hoveredJourney === index && (
                      <motion.div
                        className="journey-description"
                        variants={descriptionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.25 }}
                      >
                        {item.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
