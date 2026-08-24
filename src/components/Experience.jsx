import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "AI Engineer Intern",
      company: "SmartX Technologies",
      period: "March 2026 – Present",
      description: [
        "Working on AI-powered platforms and scalable backend systems",
        "Contributing to Wheels.ai development involving AI integrations, ML pipelines, backend APIs, authentication systems, and deployment workflows",
        "Building intelligent automation solutions using Django REST Framework and machine learning technologies",
        "Working with scalable architectures, Docker environments, and AI model integrations"
      ]
    },
    {
      role: "Python Developer Intern",
      company: "Infosys Springboard",
      period: "Sep 2025 – Nov 2025",
      description: [
        "Contributed to the development of an AI-powered quiz generation system using Django REST Framework",
        "Implemented JWT-based authentication and role-based access control",
        "Built and consumed RESTful APIs for quiz and user management",
        "Worked with AI integration and backend optimization in a real-world project"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="experience-content">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
