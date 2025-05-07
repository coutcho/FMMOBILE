import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // Reset
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-20 -left-20 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 top-1/4 right-0 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 left-1/3 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-indigo-500/20 backdrop-blur-sm rounded-full mb-4">
              <span className="text-indigo-300 font-medium text-sm flex items-center">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Limited Time Offer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Build Your Dream Team. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Rule the League!</span>
            </h1>
            
            <p className="text-lg text-gray-300 md:max-w-md mb-8">
              Take your club from rags to riches in the ultimate mobile football management game.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <CTAButton />
              
              <div className="flex items-center justify-center md:justify-start space-x-1 text-sm text-gray-300">
                <div className="flex flex-col items-center">
                  <span className="bg-indigo-800/80 px-3 py-1 rounded-md font-mono font-bold text-white">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs mt-1">Hours</span>
                </div>
                <span className="font-bold text-xl">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-indigo-800/80 px-3 py-1 rounded-md font-mono font-bold text-white">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs mt-1">Minutes</span>
                </div>
                <span className="font-bold text-xl">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-indigo-800/80 px-3 py-1 rounded-md font-mono font-bold text-white">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs mt-1">Seconds</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="w-8 h-8 rounded-full border-2 border-indigo-900 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${n + 30}.jpg`} 
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-300">4.9/5 from 2,500+ players</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-1000"></div>
              <div className="relative bg-black rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="./two.jpg"
                  alt="Game screenshot" 
                  className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <a
                    href="https://youtu.be/4NnAZtKrr9Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600/90 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-medium">Watch Gameplay</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
