import React from 'react';
import './About.css';

const About = () => {
  const education = [
    {
      title: "Secondary Schooling",
      period: "2021 – 2023",
      institution: "STAR JUNIOR COLLEGE",
      location: "Machilipatnam, Andhra Pradesh, India",
      details: "Stream: MPC"
    },
    {
      title: "Engineering",
      period: "2023 – 2027",
      institution: "SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN",
      location: "Bhimavaram, Andhra Pradesh, India",
      details: "Branch: Information Technology"
    }
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Neha Sree Mendu</h2>
      
      <div className="about-content">
        <div className="about-intro">
          <p>
            I'm <strong>Neha Sree Mendu</strong>, a passionate Full Stack Developer specializing in Django, 
            scalable backend systems, and Machine Learning pipelines. During my B.Tech journey, I've developed 
            strong communication skills, teamwork, and collaboration abilities. I've gained expertise in backend 
            development systems, machine learning concepts, and problem-solving through hands-on projects and 
            practical learning experiences. My focus is on building scalable, intelligent solutions that solve 
            real-world problems using cutting-edge technologies.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div>
                  <h3 className="education-title">{edu.title}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-location">{edu.location}</p>
                </div>
                <span className="education-period">{edu.period}</span>
              </div>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
