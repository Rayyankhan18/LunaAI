
import React, { useEffect, useState } from 'react';
import { Anchor, Shield, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const GetStarted = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('identify'); // identify, shield, secure
  const [urlInput, setUrlInput] = useState('');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'identify':
        return (
          <div className="bg-black/40 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Our Phishing Detection tool is your trusted shield against malicious threats, using advanced AI to analyze links, messages, and attachments for your digital safety.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <Textarea 
                  placeholder="Paste your fishy website link" 
                  className="h-36 bg-black/30 border-white/10 text-white placeholder:text-white/40 resize-none"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                />
                <Button 
                  className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md text-base"
                >
                  Scan Now
                </Button>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">How It Works:</h3>
                <ol className="space-y-3 list-decimal list-inside text-white/80">
                  <li className="pl-2">Phishing Score: Assesses inputs and assigns a risk score.</li>
                  <li className="pl-2">Threat Check: Verifies domains and flags blacklisted sources.</li>
                  <li className="pl-2">Deep Scan: Detects malicious scripts and phishing patterns.</li>
                </ol>
              </div>
            </div>
          </div>
        );
      
      case 'shield':
        return (
          <div className="bg-black/40 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-center">Protect Your Website from Attacks</h2>
            <p className="text-xl text-center text-white/80 mb-10">
              Safeguard your site against DDoS threats and ensure uninterrupted operations
            </p>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <Input 
                placeholder="Paste your website URL or IP Address here" 
                className="bg-black/30 border-white/10 text-white placeholder:text-white/40 py-6 text-base"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
              />
              
              <div className="flex items-center justify-between gap-4">
                <Button
                  variant="outline" 
                  className="border-white/20 hover:bg-white/10 hover:border-white/40 text-white py-2"
                >
                  Auto Fill
                </Button>
                
                <Button 
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-12 rounded-md text-base"
                >
                  Scan
                </Button>
              </div>
            </div>
          </div>
        );
      
      case 'secure':
        return (
          <div className="bg-black/40 rounded-xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold mb-6">The AI Code Guardian</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Secure your deployments effortlessly—our tool ensures your code is safe before it reaches the server.
            </p>
            
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-6 px-12 rounded-md text-lg shadow-lg shadow-blue-500/20"
            >
              Go Premium
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen luna-bg-gradient">
      <Navbar />
      <div className="pt-36 pb-16 px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-500">DETECT</span>.<span className="text-white">PROTECT</span>.<span className={activeTab === 'secure' ? 'text-blue-500' : 'text-white'}>PREVENT</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
              Empowering Your Digital Safety with Smart, AI-Driven Cybersecurity Solutions 
              Tailored for the Modern Threat Landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Button 
              variant="outline"
              className={`border border-white/10 rounded-md py-6 hover:bg-black/20 ${activeTab === 'identify' ? 'bg-black/40 shadow-md' : 'bg-black/10'}`}
              onClick={() => handleTabChange('identify')}
            >
              <Anchor className="mr-2" /> Identify Threats Instantly
            </Button>
            
            <Button 
              variant="outline"
              className={`border border-white/10 rounded-md py-6 hover:bg-black/20 ${activeTab === 'shield' ? 'bg-black/40 shadow-md' : 'bg-black/10'}`}
              onClick={() => handleTabChange('shield')}
            >
              <Shield className="mr-2" /> Shield Your Website
            </Button>
            
            <Button 
              variant="outline"
              className={`border border-white/10 rounded-md py-6 hover:bg-black/20 ${activeTab === 'secure' ? 'bg-black/40 shadow-md' : 'bg-black/10'}`}
              onClick={() => handleTabChange('secure')}
            >
              <Lock className="mr-2" /> Secure Your Code
            </Button>
          </div>
          
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
