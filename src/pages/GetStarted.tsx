
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const GetStarted = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen luna-bg-gradient">
      <Navbar />
      <div className="pt-32 pb-16 px-6">
        <div className={`max-w-md mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get Started with Luna</h1>
            <p className="text-white/70">
              Create your account to begin your journey with Luna AI
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="text-white/80 mb-1 block">
                  Name
                </label>
                <Input 
                  id="name"
                  placeholder="Your name" 
                  className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-white/80 mb-1 block">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="youremail@example.com"
                  className="bg-black/30 border-white/10 text-white placeholder:text-white/40" 
                />
              </div>
              <div>
                <label htmlFor="password" className="text-white/80 mb-1 block">
                  Password
                </label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Create a secure password"
                  className="bg-black/30 border-white/10 text-white placeholder:text-white/40" 
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-luna-blue hover:bg-luna-blue-light text-white transition-all duration-200"
              >
                Create Account
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm">
                Already have an account? <a href="#" className="text-luna-blue hover:underline">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
