import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 flex flex-col items-center justify-center pt-10 pb-6 gap-2">
      <div className="select-none">
        <img 
          src="https://ezvoice.com.br/wp-content/uploads/2025/11/logo-ezvoice-TV.png" 
          alt="EzVoice TV"
          className="h-8 md:h-12 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Decorative arrow pointing down */}
      <div className="text-white opacity-80 mt-1">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
         </svg>
      </div>
    </header>
  );
};

export default Header;