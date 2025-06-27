import React, { useState } from 'react';
import config from '../config';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(config.CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="thank-you">Thank you for reaching out!</p>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={onChange} required />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={onChange}
          required
        />
      </label>
      <button type="submit">Send</button>
      {status === 'error' && (
        <p className="error-message">There was a problem sending your message.</p>
      )}
    </form>
  );
}
