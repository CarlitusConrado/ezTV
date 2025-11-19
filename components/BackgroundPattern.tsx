import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-geometric opacity-100"></div>
      <svg
        className="absolute w-full h-full opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 L50 50 L100 100" fill="none" stroke="white" strokeWidth="0.2" />
        <path d="M0 0 L50 50 L100 0" fill="none" stroke="white" strokeWidth="0.2" />
        <path d="M20 100 L50 70 L80 100" fill="none" stroke="white" strokeWidth="0.1" />
        <path d="M20 0 L50 30 L80 0" fill="none" stroke="white" strokeWidth="0.1" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.1" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.05" />
        {/* Geometric rays */}
        <path d="M50 50 L0 20" stroke="white" strokeWidth="0.1" />
        <path d="M50 50 L100 20" stroke="white" strokeWidth="0.1" />
        <path d="M50 50 L0 80" stroke="white" strokeWidth="0.1" />
        <path d="M50 50 L100 80" stroke="white" strokeWidth="0.1" />
      </svg>
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
    </div>
  );
};

export default BackgroundPattern;