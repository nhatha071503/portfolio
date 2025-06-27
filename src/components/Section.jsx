import React from 'react';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <h1 className="wave-underline">{title}</h1>
        {children}
      </div>
    </section>
  );
}
