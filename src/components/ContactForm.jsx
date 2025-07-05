import React, { useState } from 'react';
import config from '../config';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success' | 'error' | 'loading'

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (config.CONTACT_ENDPOINT) {
        const res = await fetch(config.CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        });
        if (!res.ok) throw new Error('Request failed');
      }
      
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-success">
        <div className="success-icon">✨</div>
        <h3>Thank you for reaching out!</h3>
        <p>I'll get back to you within 24 hours. Looking forward to our conversation!</p>
        <button 
          className="btn secondary"
          onClick={() => setStatus(null)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-intro">
        <h3>Let's Work Together</h3>
        <p>Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.</p>
        
        <div className="contact-methods">
          <a href="mailto:sarah.chen@email.com" className="contact-method">
            <div className="method-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>sarah.chen@email.com</p>
            </div>
          </a>
          
          <a href="https://linkedin.com/in/sarahchen" className="contact-method" target="_blank" rel="noreferrer">
            <div className="method-icon">💼</div>
            <div>
              <h4>LinkedIn</h4>
              <p>Connect with me</p>
            </div>
          </a>
          
          <a href="https://calendly.com/sarahchen" className="contact-method" target="_blank" rel="noreferrer">
            <div className="method-icon">📅</div>
            <div>
              <h4>Schedule a Call</h4>
              <p>Book a 30-min chat</p>
            </div>
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <label>
            Name *
            <input 
              name="name" 
              value={form.name} 
              onChange={onChange} 
              required 
              placeholder="Your full name"
            />
          </label>
          <label>
            Email *
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="your.email@example.com"
            />
          </label>
        </div>
        
        <label>
          Subject *
          <input
            name="subject"
            value={form.subject}
            onChange={onChange}
            required
            placeholder="What's this about?"
          />
        </label>
        
        <label>
          Message *
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={onChange}
            required
            placeholder="Tell me about your project, timeline, and budget..."
          />
        </label>
        
        <button 
          type="submit" 
          className={`sparkle-hover glow-border ${status === 'loading' ? 'loading' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <span className="loading-spinner"></span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
        
        {status === 'error' && (
          <p className="error-message">
            There was a problem sending your message. Please try again or email me directly.
          </p>
        )}
        
        <p className="form-note">
          * Required fields. I typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}