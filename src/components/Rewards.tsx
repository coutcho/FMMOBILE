import React from 'react';

const rewards = [
  {
    name: "Dragon Lore AWP",
    game: "CS:GO",
    rarity: "Legendary",
    image: "https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg"
  },
  {
    name: "Frostbite Knife",
    game: "Valorant",
    rarity: "Epic",
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
  },
  {
    name: "Galaxy Wings",
    game: "Fortnite",
    rarity: "Rare",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
  },
  {
    name: "Void Walker",
    game: "Apex Legends",
    rarity: "Epic",
    image: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg"
  }
];

const RarityBadge: React.FC<{ rarity: string }> = ({ rarity }) => {
  let colors = "bg-gray-600 text-gray-200";
  
  if (rarity === "Legendary") {
    colors = "bg-gradient-to-r from-orange-500 to-amber-500 text-white";
  } else if (rarity === "Epic") {
    colors = "bg-gradient-to-r from-purple-500 to-violet-500 text-white";
  } else if (rarity === "Rare") {
    colors = "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
  }
  
  return (
    <span className={`${colors} text-xs font-bold px-2 py-1 rounded-full`}>
      {rarity}
    </span>
  );
};

const Rewards: React.FC = () => {
  return (
    <section id="rewards" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Rewards</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of the exclusive skins and items you can earn on our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-b from-indigo-950 to-black border border-indigo-900/50 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={reward.image} 
                  alt={reward.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 m-3">
                  <RarityBadge rarity={reward.rarity} />
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-xs text-indigo-400 mb-1">{reward.game}</div>
                <h3 className="text-lg font-bold text-white mb-2">{reward.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-gray-400 text-sm">350 points</span>
                  </div>
                  
                  <button className="text-xs px-3 py-1 bg-indigo-600/40 hover:bg-indigo-600/60 text-indigo-300 hover:text-white rounded-full transition-colors">
                    Claim Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-indigo-900/40 hover:bg-indigo-900/60 text-indigo-300 font-medium py-2 px-6 rounded-lg transition-colors">
            View All Rewards
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rewards;