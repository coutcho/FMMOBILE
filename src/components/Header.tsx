import React, { useState, useEffect } from 'react';
import { TowerControl as GameController } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-indigo-900/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GameController size={28} className="text-indigo-400" />
          <span className="font-bold text-xl text-white">GameRewards</span>
        </div>
        
        <a 
          href="https://installchecker.com/cl/i/e6qpdx"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-medium px-3 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
        >
          Start Playing Now
        </a>
      </div>
    </header>
  );
};

export default Header;
