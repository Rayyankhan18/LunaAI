import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Check, ShieldAlert, Shield, Zap, Lock, Database, Clock, Webhook, Users, FileCode } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import PricingPlans from '@/components/PricingPlans';
import { Button } from '@/components/ui/button';

const ComparisonFeature = ({ 
  feature, 
  basic, 
  standard, 
  premium 
}: { 
  feature: string; 
  basic: boolean | string; 
  standard: boolean | string; 
  premium: boolean | string;
}) => {
  return (
    <div className="grid grid-cols-4 py-4 border-b border-white/10 items-center">
      <div className="text-white/80">{feature}</div>
      <div className="text-center">
        {typeof basic === 'boolean' ? 
          (basic ? <Check size={18} className="text-blue-500 mx-auto" /> : <span className="text-white/40">—</span>) : 
          <span>{basic}</span>}
      </div>
      <div className="text-center">
        {typeof standard === 'boolean' ? 
          (standard ? <Check size={18} className="text-blue-500 mx-auto" /> : <span className="text-white/40">—</span>) : 
          <span>{standard}</span>}
      </div>
      <div className="text-center">
        {typeof premium === 'boolean' ? 
          (premium ? <Check size={18} className="text-blue-500 mx-auto" /> : <span className="text-white/40">—</span>) : 
          <span>{premium}</span>}
      </div>
    </div>
  );
};

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

const SecurityTool = ({ 
  title, 
  description,
  icon
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="flex gap-4">
    <div className="bg-blue-500/10 p-3 rounded-lg h-fit">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </div>
);

const FAQ = ({ 
  question, 
  answer 
}: { 
  question: string; 
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 py-5">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <div className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          <div className="w-6 h-6 relative">
            <span className="absolute inset-0 flex items-center justify-center">+</span>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="mt-3 text-white/70">
          {answer}
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const [loaded, setLoaded] = useState(false);
  const { toast } = useToast();
  
  const securityTools = [
    {
      icon: <ShieldAlert size={24} className="text-blue-500" />,
      title: "Threat Intelligence Platform",
      description: "Real-time monitoring and analysis of emerging threats targeting your industry"
    },
    {
      icon: <Database size={24} className="text-blue-500" />,
      title: "Secure Data Protection",
      description: "End-to-end encryption and secure storage solutions for sensitive information"
    },
    {
      icon: <FileCode size={24} className="text-blue-500" />,
      title: "Code Vulnerability Scanner",
      description: "Automated scanning of your codebase to identify and fix security flaws"
    },
    {
      icon: <Clock size={24} className="text-blue-500" />,
      title: "Continuous Monitoring",
      description: "24/7 surveillance of your systems to detect anomalies and prevent breaches"
    },
    {
      icon: <Webhook size={24} className="text-blue-500" />,
      title: "API Security Gateway",
      description: "Protect your API endpoints from unauthorized access and attacks"
    },
    {
      icon: <Users size={24} className="text-blue-500" />,
      title: "Identity Management",
      description: "Advanced authentication and authorization controls for secure access"
    }
  ];
  
  const faqItems = [
    {
      question: "How does Luna's pricing compare to other cybersecurity solutions?",
      answer: "Luna offers enterprise-grade security at a fraction of the cost of traditional solutions. Our AI-driven approach allows us to provide more efficient protection while keeping costs lower than comparable services."
    },
    {
      question: "Can I switch plans later if my needs change?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, the new features become available immediately, and we'll prorate your billing accordingly."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer a 15% discount when you choose annual billing on any of our plans. This option will be available during checkout."
    },
    {
      question: "Is there a setup fee for new accounts?",
      answer: "No, there are no setup fees or hidden charges. The price you see is the price you pay, and you can get started immediately after subscribing."
    },
    {
      question: "What kind of support can I expect?",
      answer: "All plans include some level of support, ranging from email support for Guardian Shield to a dedicated account manager for Fortress Prime. Our technical team is based in-house and specializes in cybersecurity."
    }
  ];
  
  const featureComparisons = [
    { feature: "Threat Detection", basic: "Basic", standard: "Advanced", premium: "Enterprise" },
    { feature: "Security Updates", basic: "Monthly", standard: "Weekly", premium: "Daily" },
    { feature: "Vulnerability Assessment", basic: false, standard: true, premium: true },
    { feature: "Code Security Scanning", basic: false, standard: "Basic", premium: "Advanced" },
    { feature: "API Endpoint Protection", basic: false, standard: true, premium: true },
    { feature: "Threat Intelligence Feed", basic: false, standard: "Standard", premium: "Premium" },
    { feature: "User Access Controls", basic: "Basic", standard: "Role-based", premium: "Zero-trust" },
    { feature: "Customer Support", basic: "Email", standard: "24/7 Phone & Email", premium: "Dedicated Manager" }
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleTryFreeTrial = () => {
    toast({
      title: "Free trial activated",
      description: "Your 14-day trial has been activated successfully!",
    });
  };

  return (
    <div className="min-h-screen luna-bg-gradient">
      <Navbar />
      <div className="pt-32 pb-16 px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Plans Built for Every Need</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Flexible pricing to safeguard your business—tailored for startups, enterprises, and innovators alike.
            </p>
          </div>
          
          <PricingPlans showHeading={false} />

          {/* Feature Comparison Section */}
          <div className="mt-20 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Compare Features</h2>
            <div className="bg-black/30 rounded-xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-4 py-4 border-b border-white/10 bg-black/40">
                <div className="font-semibold px-4">Feature</div>
                <div className="text-center font-semibold">Guardian Shield</div>
                <div className="text-center font-semibold">Sentinel Edge</div>
                <div className="text-center font-semibold">Fortress Prime</div>
              </div>
              
              <div className="px-4">
                {featureComparisons.map((item, index) => (
                  <ComparisonFeature 
                    key={index}
                    feature={item.feature} 
                    basic={item.basic} 
                    standard={item.standard} 
                    premium={item.premium}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Security Tools Section */}
          <div className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security Tools Included</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Our comprehensive suite of cybersecurity tools is designed to protect your business at every level
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityTools.map((tool, index) => (
                <SecurityTool 
                  key={index}
                  icon={tool.icon}
                  title={tool.title}
                  description={tool.description}
                />
              ))}
            </div>
          </div>

          {/* Free Trial CTA */}
          <div className="my-20 bg-gradient-to-r from-blue-900/30 to-black/50 rounded-2xl p-10 border border-blue-600/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
                <p className="text-lg text-white/70 mb-6">
                  Start with our 14-day free trial and experience enterprise-grade security with no commitment.
                </p>
                <Button 
                  onClick={handleTryFreeTrial}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Start Free Trial
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                  <Shield size={180} className="text-blue-500 relative z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((faq, index) => (
                <FAQ 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              For organizations with specific security requirements, our team can create a tailored solution that addresses your unique challenges.
            </p>
            <Button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
