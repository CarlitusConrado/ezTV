import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 flex justify-center py-8">
      <div className="flex items-center gap-2 select-none">
        <h1 className="text-6xl font-bold tracking-tighter text-white lowercase" style={{ fontFamily: 'Inter, sans-serif' }}>
          ezvoice
        </h1>
        <div className="bg-white text-brand-red rounded-xl px-2 py-0.5 ml-1 shadow-lg transform -rotate-2">
          <span className="text-2xl font-black tracking-widest">TV</span>
        </div>
      </div>
      {/* Decorative arrow pointing down similar to image */}
      <div className="absolute top-24 text-white opacity-80">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
         </svg>
      </div>
    </header>
  );
};

export default Header;