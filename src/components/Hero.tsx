
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import LunaAvatar from './LunaAvatar';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden luna-bg-gradient">
      <div className="absolute inset-0 bg-luna-black bg-opacity-70"></div>
      
      {/* Giant Luna text overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-10 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <h1 className="text-[30rem] font-bold text-white transform -translate-y-16">
          luna
        </h1>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left column with text */}
          <div className={`space-y-8 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                <span className="block">Meet</span>
                <span className="text-luna-blue text-shadow">luna</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-lg">
                The AI assistant that understands your needs and simplifies your life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center bg-luna-blue hover:bg-luna-blue-light text-white font-medium px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-luna-blue/30"
              >
                Get Started
              </a>
              
              <button
                onClick={() => document.getElementById('api-link')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white transition-all duration-200"
              >
                For Developers
              </button>
            </div>
          </div>
          
          {/* Right column with Luna Avatar */}
          <div className={`flex justify-center items-center transition-all duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0 scale-95'}`}>
            <LunaAvatar />
          </div>
        </div>
      </div>
      
      {/* API section at bottom */}
      <div 
        id="api-link"
        className={`relative z-10 w-full flex justify-center pb-12 transition-all duration-700 delay-500 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <a 
          href="/developers"
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white transition-all duration-200 transform hover:scale-105"
        >
          <span>Luna API: Get Luna for Developers</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
