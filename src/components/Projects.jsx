import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'MentorCircle',
      description: 'AI-powered STEM mentorship platform connecting students with mentors and peer-learning communities.',
      image: `${process.env.PUBLIC_URL}/projects/mentor-circle.png`,
      tech: ['React', 'Django', 'REST APIs', 'Replicate', 'STEM'],
      links: {
        project: '#',
        github: 'https://github.com/nehasree25/Mentor-Circle'
      }
    },
    {
      id: 2,
      title: 'MarketLens',
      description: 'Financial analytics platform providing market data exploration and actionable insights through intelligent analysis.',
      image: `${process.env.PUBLIC_URL}/projects/marketlens.png`,
      tech: ['yfinance', 'FastAPI', 'React', 'PostgreSQL'],
      links: {
        project: '#',
        github: 'https://github.com/nehasree25/MarketLens'
      }
    },
    {
      id: 3,
      title: 'CrossApp Agent',
      description: 'AI-powered agent designed to interact with and automate tasks across multiple applications seamlessly.',
      image: `${process.env.PUBLIC_URL}/projects/cross-app-agent.png`,
      tech: ['FastAPI', 'Langchain', 'Agents', 'React', 'Razorpay API'],
      links: {
        project: '#',
        github: 'https://github.com/nehasree25/CrossApp-Agent'
      }
    },
    {
      id: 4,
      title: 'Research-Agent',
      description: 'AI research assistant that gathers, analyzes, and summarizes information to accelerate research workflows.',
      image: `${process.env.PUBLIC_URL}/projects/research-agent.png`,
      tech: ['Context API', 'React', 'Django REST Framework'],
      links: {
        project: '#',
        github: 'https://github.com/nehasree25/Research-Studio'
      }
    }
  ];

  const cardVariants = {
    rest: { y: 0 },
    hover: { y: -6 }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03 }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <motion.div
                className="project-image-wrapper"
                variants={imageVariants}
                initial="rest"
                whileHover="hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {hoveredProject === project.id && (
                  <div className="project-overlay">
                    <span className="view-indicator">View Project ↗</span>
                  </div>
                )}
              </motion.div>

              {/* Project Info */}
              <div className="project-info">
                <div className="project-header">
                  <span className="project-number">{String(project.id).padStart(2, '0')}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Technology Tags */}
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.links.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
