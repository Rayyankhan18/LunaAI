
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen luna-bg-gradient">
      <Navbar />
      <div className="pt-32 pb-16 px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
              <p className="text-white/70 mb-6">
                Have questions about Luna or need help? Reach out to our team and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                  <p className="text-luna-blue">support@lunaai.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Office</h3>
                  <p className="text-white/70">
                    123 AI Plaza<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h2>
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
                  <label htmlFor="message" className="text-white/80 mb-1 block">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="How can we help?"
                    className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-luna-blue hover:bg-luna-blue-light text-white transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
