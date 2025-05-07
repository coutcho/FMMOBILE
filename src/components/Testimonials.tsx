import React from 'react';

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Casual Gamer",
    content: "I was skeptical at first, but I've already earned 3 exclusive skins for my favorite games. The challenges are actually fun to complete!"
  },
  {
    name: "Sarah Kim",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Twitch Streamer",
    content: "My viewers love seeing me unlock new skins during streams. This platform has added a whole new dimension to my content."
  },
  {
    name: "Marcus Chen",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    role: "Competitive Player",
    content: "The weekly tournaments are highly competitive and rewarding. I've won some incredibly rare items that would have cost hundreds otherwise."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Gamers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied gamers who are already earning free rewards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-indigo-900/20 to-indigo-950/40 backdrop-blur-sm border border-indigo-800/30 rounded-xl p-6 transform transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-indigo-500">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-indigo-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-indigo-900/30 backdrop-blur-sm border border-indigo-800/40 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to start earning free skins?</h3>
              <p className="text-gray-300">
                Join thousands of gamers already earning exclusive rewards. Sign up takes less than 60 seconds.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;