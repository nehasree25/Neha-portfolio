import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-visual">
          <div className="hero-circle">
            <div className="circle-inner">
              <img src={`${process.env.PUBLIC_URL}/p1.jpeg`} alt="Neha Sree Mendu" className="hero-image" />
            </div>
          </div>
        </div>

        <div className="hero-text">
          <h1 className="hero-greeting">Hi, I'm <span className="hero-name">Neha Sree Mendu</span></h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-subtitle">
            Specializing in Django, scalable backend systems, and Machine Learning pipelines
          </p>
          <p className="hero-description">
            Building AI-powered applications, robust backend systems, and intelligent solutions 
            that transform ideas into scalable, production-ready software.
          </p>
          
          <div className="hero-buttons">
            <a 
              href="mailto:nehasreemendu@gmail.com" 
              className="hero-btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/nehasreemendu" 
              className="hero-btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/nehasree25" 
              className="hero-btn btn-tertiary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
