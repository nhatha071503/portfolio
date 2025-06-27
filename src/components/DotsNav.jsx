import React from 'react';
import PropTypes from 'prop-types';

export default function DotsNav({ count, progress, onDotClick }) {
  const active = Math.round(progress * (count - 1));
  return (
    <div className="dots-nav">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`dot ${i === active ? 'active' : ''}`}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  );
}

DotsNav.propTypes = {
  count: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired
};
