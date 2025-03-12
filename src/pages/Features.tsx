
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

const Features = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen luna-bg-gradient">
      <Navbar />
      <div className="pt-32 pb-16 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Features</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Natural Language Understanding",
                description: "Luna can understand complex queries and instructions in everyday language."
              },
              {
                title: "Context Awareness",
                description: "Luna remembers your previous interactions to provide more relevant responses."
              },
              {
                title: "Multi-Modal Capabilities",
                description: "Interact with Luna using text, voice, or images - whatever works best for you."
              },
              {
                title: "Developer API",
                description: "Integrate Luna's capabilities into your own applications and services."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-luna-blue/30 hover:bg-black/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
