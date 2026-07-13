import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Wheels.ai",
      description: "AI-powered platform focused on intelligent automation and AI integrations. Built scalable backend APIs, AI model integration systems, authentication systems, usage tracking, and subscription-based architecture. Worked with backend optimization, Docker-based services, AI model integrations, and scalable system design.",
      tech: ["Django REST Framework", "React.js", "Docker", "PostgreSQL", "JWT Authentication", "AI Integrations"]
    },
    {
      title: "QuizGen",
      description: "AI-powered quiz generation platform capable of generating quizzes dynamically using AI. Includes JWT authentication, resume quiz functionality, quiz history, role-based access control, and backend API development.",
      tech: ["Django REST Framework", "React.js", "JWT", "PostgreSQL", "AI APIs"]
    },
    {
      title: "MentorCircle",
      description: "MentorCircle is an AI-powered STEM mentorship and peer-learning platform that connects students with mentors and communities based on interests, skills, and goals. It supports secure authentication, mentor matching, community circles, role management, and collaborative discussions.",
      tech: ["React", "Tailwind CSS", "Django", "Django REST Framework", "SQLite", "JWT Authentication"]
    },
    {
      title: "Liver Cancer Prediction",
      description: "Machine learning project focused on predicting liver cancer using medical datasets and classification models. Worked on preprocessing, model training, evaluation, and prediction systems.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
