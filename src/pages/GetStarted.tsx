
import React, { useEffect, useState } from 'react';
import { Anchor, Shield, Lock, Zap, Link2, Building2, Maximize, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import PricingPlans from '@/components/PricingPlans';

const GetStarted = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('identify'); // identify, shield, secure
  const [urlInput, setUrlInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const goToPricing = () => {
    navigate('/pricing');
  };

  const tabs = [
    {
      id: 'identify',
      icon: <Anchor className="mr-2" />,
      title: 'Identify Threats Instantly',
      content: (
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
      )
    },
    {
      id: 'shield',
      icon: <Shield className="mr-2" />,
      title: 'Shield Your Website',
      content: (
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
      )
    },
    {
      id: 'secure',
      icon: <Lock className="mr-2" />,
      title: 'Secure Your Code',
      content: (
        <div className="bg-black/40 rounded-xl p-8 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-6">The AI Code Guardian</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Secure your deployments effortlessly—our tool ensures your code is safe before it reaches the server.
          </p>
          
          <Button 
            onClick={goToPricing}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-6 px-12 rounded-md text-lg shadow-lg shadow-blue-500/20"
          >
            Go Premium
          </Button>
        </div>
      )
    }
  ];

  // Feature card component for the capabilities section
  const FeatureCard = ({ 
    icon, 
    title, 
    description 
  }: { 
    icon: React.ReactNode; 
    title: string; 
    description: string;
  }) => (
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 transition-all hover:bg-black/50">
      <div className="bg-black/60 w-16 h-16 flex items-center justify-center rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );

  // About section component 
  const AboutSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20 mb-20">
      <div>
        <img 
          src="/lovable-uploads/d2632053-68d3-4613-8a85-d7cf7484b52e.png" 
          alt="Luna AI Cyber Assistant" 
          className="w-full max-w-md mx-auto"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white/80">EVERYTHING ABOUT US</h2>
        <h3 className="text-4xl font-bold mb-6">
          Empowers organizations with advanced tools to combat <span className="text-blue-500">cyber threats.</span>
        </h3>
        
        <div className="space-y-4 mt-8">
          <div className="flex items-center gap-3 text-xl">
            <div className="w-1 h-8 bg-blue-500"></div>
            <span>Identify Threats Instantly</span>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <div className="w-1 h-8 bg-white/30"></div>
            <span>Shield Your Website</span>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <div className="w-1 h-8 bg-blue-500"></div>
            <span>Secure Your Code</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h4 className="text-xl font-semibold mb-2">Threat Anticipation:</h4>
            <p className="text-white/70">
              Luna AI leverages proactive threat intelligence to identify and address vulnerabilities before they can be exploited.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">CICD Pipeline Security</h4>
            <p className="text-white/70">
              We secure your development workflows by integrating checks into your continuous integration and delivery pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const features = [
    {
      icon: <Zap size={28} className="text-blue-500" />,
      title: "Unmatched Performance",
      description: "Speed, Reliability, and Power Combined"
    },
    {
      icon: <Link2 size={28} className="text-blue-500" />,
      title: "Seamless Compatibility",
      description: "Integrate seamlessly to save time and enhance capabilities"
    },
    {
      icon: <Anchor size={28} className="text-blue-500" />,
      title: "Future-Ready Technology",
      description: "Stay ahead with our evolving approach, always stay ahead."
    },
    {
      icon: <Shield size={28} className="text-blue-500" />,
      title: "Unrivaled Security",
      description: "Enjoy peace of mind with top-tier security that protects your data."
    },
    {
      icon: <Building2 size={28} className="text-blue-500" />,
      title: "Industry Versatility",
      description: "Our solution fuels growth and innovation for all industries."
    },
    {
      icon: <Maximize size={28} className="text-blue-500" />,
      title: "Scalability Made Simple",
      description: "Our platform grows with you, empowering your ambitions."
    }
  ];

  return (
    <div className="min-h-screen luna-bg-gradient">
      <Navbar />
      <div className="pt-36 pb-16 px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <div className="text-lg font-medium text-white/70 mb-2">DETECT.PROTECT.PREVENT</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover the Versatility of <span className="text-blue-500">Luna</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
              Empowering Your Digital Safety with Smart, AI-Driven Cybersecurity Solutions 
              Tailored for the Modern Threat Landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {tabs.map(tab => (
              <Button 
                key={tab.id}
                variant="outline"
                className={`border border-white/10 rounded-md py-6 hover:bg-black/20 ${activeTab === tab.id ? 'bg-black/40 shadow-md' : 'bg-black/10'}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.icon} {tab.title}
              </Button>
            ))}
          </div>
          
          {tabs.find(tab => tab.id === activeTab)?.content}
          
          {/* Features section */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {features.slice(3).map((feature, index) => (
                <FeatureCard
                  key={index + 3}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          {/* About section */}
          <AboutSection />
          
          {/* Pricing section */}
          <div className="mt-20">
            <PricingPlans />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
