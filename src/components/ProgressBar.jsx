import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ progress }) {
  return (
    <div className="top-progress">
      <div className="top-progress-line" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number
};

ProgressBar.defaultProps = {
  progress: 0
};
