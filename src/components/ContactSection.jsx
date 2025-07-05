import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-background">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">
            Let's Create Something
            <span className="gradient-text"> Amazing</span>
          </h2>
          <p className="contact-description">
            Ready to bring your vision to life? Let's collaborate and build 
            extraordinary digital experiences together.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
              </div>
              <div className="method-content">
                <h4>Email</h4>
                <p>hello@portfolio.dev</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </div>
              <div className="method-content">
                <h4>LinkedIn</h4>
                <p>Connect with me</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                </svg>
              </div>
              <div className="method-content">
                <h4>Schedule Call</h4>
                <p>Book a meeting</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form glass-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
              <div className="input-glow"></div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
              <div className="input-glow"></div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
              <div className="input-glow"></div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              ></textarea>
              <div className="input-glow"></div>
            </div>
            
            <button 
              type="submit" 
              className={`submit-btn magnetic-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {isSubmitting && <div className="loading-spinner"></div>}
              <div className="btn-shine"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}