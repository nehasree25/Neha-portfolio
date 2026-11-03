import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left - Profile Image */}
        <div className="hero-image-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt="Neha Sree Mendu"
            className="hero-profile-image"
          />
        </div>

        {/* Right - Hero Text */}
        <div className="hero-text-wrapper">
          {/* Main Greeting */}
          <h1 className="hero-greeting">I'm Neha.</h1>

          {/* Role Line */}
          <p className="hero-role">Backend Developer | Software Developer | AI Enthusiast</p>

          {/* Professional Description */}
          <p className="hero-description">
            I build scalable, production-ready software that transforms ideas into reliable and practical digital products.
          </p>

          {/* Contact Buttons */}
          <div className="hero-buttons">
            <a
              href="mailto:nehasreemendu@gmail.com"
              className="hero-button hero-button-primary"
              title="Send email"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nehasreemendu"
              className="hero-button hero-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/nehasree25"
              className="hero-button hero-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub profile"
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
