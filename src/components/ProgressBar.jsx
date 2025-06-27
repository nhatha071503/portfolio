import React from 'react';

export default function ProgressBar({ progress }) {
  return (
    <div className="top-progress">
      <div className="top-progress-line" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
