
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Preload the other pages for smoother navigation
    const preloadPages = async () => {
      const { default: About } = await import('./About');
      const { default: Features } = await import('./Features');
      const { default: Pricing } = await import('./Pricing');
      const { default: Contact } = await import('./Contact');
      const { default: GetStarted } = await import('./GetStarted');
    };
    
    preloadPages();
  }, []);

  return (
    <div className={`min-h-screen w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Index;
