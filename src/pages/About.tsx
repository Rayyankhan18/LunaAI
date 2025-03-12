
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen luna-bg-gradient">
      <Navbar />
      <div className="pt-32 pb-16 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Luna</h1>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-white/80">
              Luna is an advanced AI assistant designed to understand your needs and make your digital life easier.
            </p>
            
            <p className="text-white/70">
              Our team of AI researchers and engineers has spent years perfecting the algorithms and neural networks that power Luna. The result is an AI assistant that feels intuitive, helpful, and almost human-like in its interactions.
            </p>
            
            <div className="my-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
              <p className="text-white/70">
                We believe that AI should be accessible, helpful, and designed with humans at the center. Luna represents our commitment to creating technology that enhances human capabilities rather than replacing them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
