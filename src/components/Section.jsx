import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};
