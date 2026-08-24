import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-intro">
          <p>
            I'm <strong>Neha Sree Mendu</strong>, and I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <a 
            href="mailto:nehasreemendu@gmail.com" 
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="contact-icon" />
            <p className="contact-label">Email</p>
            <p className="contact-value">nehasreemendu@gmail.com</p>
          </a>

          <a 
            href="https://www.linkedin.com/in/nehasreemendu" 
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
            <p className="contact-label">LinkedIn</p>
            <p className="contact-value">nehasreemendu</p>
          </a>

          <a 
            href="https://github.com/nehasree25" 
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
            <p className="contact-label">GitHub</p>
            <p className="contact-value">nehasree25</p>
          </a>
        </div>

        <div className="footer">
          <p>
            Designed & Built by <span className="footer-name">Neha Sree Mendu</span>
          </p>
          <p>&copy; 2026 All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
