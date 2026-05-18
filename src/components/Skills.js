import React, { useState } from 'react';
import { 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiScikitlearn, 
  SiMongodb, 
  SiMysql, 
  SiPostman 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Django REST', icon: <SiDjango /> },
    { name: 'Machine Learning', icon: <SiScikitlearn /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'DSA', icon: <FaDatabase /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="skills-content">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
