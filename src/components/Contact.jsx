import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'default_key');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (!formData.purpose) {
      setSubmitStatus({ type: 'error', message: 'Please select a purpose.' });
      return;
    }
    if (!formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your message.' });
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_email: 'nehasreemendu@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        purpose: formData.purpose,
        message: formData.message
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_default',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_default',
        templateParams
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thanks! Your message has been sent successfully.'
      });

      setFormData({ name: '', email: '', purpose: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 4000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const purposeOptions = [
    'Project Collaboration',
    'Job Opportunity',
    'Freelance Work',
    'Internship',
    'General Inquiry',
    'Other'
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Left Column */}
          <div className="contact-left">
            <h2 className="contact-heading">Get In Touch</h2>
            
            <p className="contact-description">
              Have a project, collaboration, or opportunity in mind? I'm always open to meaningful conversations and building practical solutions.
            </p>

            <div className="contact-links">
              <a 
                href="mailto:nehasreemendu@gmail.com"
                className="contact-link"
                title="Email"
              >
                <FaEnvelope className="contact-link-icon" />
                <span>Email</span>
              </a>
              
              <span className="contact-link-divider">·</span>
              
              <a 
                href="https://www.linkedin.com/in/nehasreemendu"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin className="contact-link-icon" />
                <span>LinkedIn</span>
              </a>
              
              <span className="contact-link-divider">·</span>
              
              <a 
                href="https://github.com/nehasree25"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub className="contact-link-icon" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="purpose">Purpose</label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Select purpose</option>
                  {purposeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  disabled={loading}
                />
              </div>

              {submitStatus && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Email ↗'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
