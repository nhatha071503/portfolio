import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // For demonstration we just set submitted to true
    setSubmitted(true);
  };

  if (submitted) {
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
    </form>
  );
}
