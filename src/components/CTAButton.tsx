import React, { useState, useEffect } from 'react';

const CTAButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button when scrolled past a certain point
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main CTA button */}
      <a 
        href="https://installchecker.com/cl/i/e6qpdx"
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden group bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
        aria-label="Start playing to earn free skins"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Start Playing Now
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </span>
        
        {/* Animated background effect */}
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-400 to-violet-500 opacity-0 group-hover:opacity-50 group-hover:blur-xl transition-all duration-300"></span>
      </a>

      {/* Sticky mobile CTA */}
      <div 
        className={`fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <a 
          href="https://installchecker.com/cl/i/e6qpdx"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-indigo-500/50 flex items-center justify-center gap-2"
          aria-label="Start playing to earn free skins"
        >
          Start Playing Now
          <svg 
            className="w-5 h-5"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default CTAButton;
