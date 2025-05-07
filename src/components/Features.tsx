import React from 'react';
import { Gift, Zap, Shield, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Zap size={24} className="text-indigo-400" />,
    title: "Quick Challenges",
    description: "Complete fun 15-minute challenges that fit into your gaming schedule."
  },
  {
    icon: <Gift size={24} className="text-indigo-400" />,
    title: "Earn Free Skins",
    description: "Unlock exclusive weapon skins and rare items for popular games."
  },
  {
    icon: <Shield size={24} className="text-indigo-400" />,
    title: "Secure Platform",
    description: "Our platform is fully secure with no downloads required."
  },
  {
    icon: <Trophy size={24} className="text-indigo-400" />,
    title: "Weekly Tournaments",
    description: "Compete in tournaments for bigger prizes and special rewards."
  }
];

const Features: React.FC = () => {
  return (
    <section 
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-indigo-950 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How GameRewards Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform makes it easy to earn free gaming rewards. Just play, complete challenges, and claim your prizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-800/50 rounded-xl p-6 hover:bg-indigo-800/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-900/50 flex items-center justify-center mb-4 group-hover:bg-indigo-700/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-8 relative max-w-4xl">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-indigo-800/50 relative group">
              <img 
                src="https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg" 
                alt="Gaming rewards platform" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-indigo-600/80 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-4">
            <div className="inline-flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">No downloads required</span>
            </div>
            <div className="inline-flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">Works with all major games</span>
            </div>
            <div className="inline-flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300">Instant rewards delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;