
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Check, ShieldAlert, Shield, Zap, Lock, Database, Clock, Webhook, Users, FileCode } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const PricingCard = ({ 
  title, 
  price,
  billingPeriod = "billed monthly",
  features,
  buttonText = "Choose Plan",
  isPrimary = false,
  icon
}: { 
  title: string; 
  price: string;
  billingPeriod?: string;
  features: string[];
  buttonText?: string;
  isPrimary?: boolean;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold">₹{price}</span>
        <span className="text-white/60 ml-1">per month</span>
        <p className="text-sm text-white/60 mt-1">{billingPeriod}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check size={18} className="text-blue-500 flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-white/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-2.5 rounded-md ${
          isPrimary 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Guardian Shield" 
              price="999" 
              features={[
                "Phishing attack detection",
                "Real-time threat alerts",
                "Regular security updates",
                "Basic AI threat analysis",
                "Email support"
              ]}
              buttonText="Choose Plan"
            />
            
            <PricingCard 
              title="Sentinel Edge" 
              price="19,999" 
              features={[
                "DDoS attack mitigation",
                "AI-driven threat analytics",
                "Incident reporting",
                "Role-based access controls",
                "24/7 phone and email support"
              ]}
              isPrimary
              buttonText="Choose Plan"
            />
            
            <PricingCard 
              title="Fortress Prime" 
              price="Contact Us" 
              billingPeriod=""
              features={[
                "End-to-End CICD Monitoring",
                "Custom Threat Simulations",
                "Automated Vulnerability Patching",
                "Proactive code integrity checks",
                "Dedicated account manager"
              ]}
              buttonText="Call Us"
              icon={<img src="/lovable-uploads/168f55ed-b6e3-4083-a845-ce7e4ca49b7c.png" alt="Fortress" className="w-16 h-16 opacity-80" />}
            />
          </div>

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
                <ComparisonFeature 
                  feature="Threat Detection" 
                  basic="Basic" 
                  standard="Advanced" 
                  premium="Enterprise"
                />
                <ComparisonFeature 
                  feature="Security Updates" 
                  basic="Monthly" 
                  standard="Weekly" 
                  premium="Daily"
                />
                <ComparisonFeature 
                  feature="Vulnerability Assessment" 
                  basic={false} 
                  standard={true} 
                  premium={true}
                />
                <ComparisonFeature 
                  feature="Code Security Scanning" 
                  basic={false} 
                  standard="Basic" 
                  premium="Advanced"
                />
                <ComparisonFeature 
                  feature="API Endpoint Protection" 
                  basic={false} 
                  standard={true} 
                  premium={true}
                />
                <ComparisonFeature 
                  feature="Threat Intelligence Feed" 
                  basic={false} 
                  standard="Standard" 
                  premium="Premium"
                />
                <ComparisonFeature 
                  feature="User Access Controls" 
                  basic="Basic" 
                  standard="Role-based" 
                  premium="Zero-trust"
                />
                <ComparisonFeature 
                  feature="Customer Support" 
                  basic="Email" 
                  standard="24/7 Phone & Email" 
                  premium="Dedicated Manager"
                />
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
              <SecurityTool 
                icon={<ShieldAlert size={24} className="text-blue-500" />}
                title="Threat Intelligence Platform"
                description="Real-time monitoring and analysis of emerging threats targeting your industry"
              />
              <SecurityTool 
                icon={<Database size={24} className="text-blue-500" />}
                title="Secure Data Protection"
                description="End-to-end encryption and secure storage solutions for sensitive information"
              />
              <SecurityTool 
                icon={<FileCode size={24} className="text-blue-500" />}
                title="Code Vulnerability Scanner"
                description="Automated scanning of your codebase to identify and fix security flaws"
              />
              <SecurityTool 
                icon={<Clock size={24} className="text-blue-500" />}
                title="Continuous Monitoring"
                description="24/7 surveillance of your systems to detect anomalies and prevent breaches"
              />
              <SecurityTool 
                icon={<Webhook size={24} className="text-blue-500" />}
                title="API Security Gateway"
                description="Protect your API endpoints from unauthorized access and attacks"
              />
              <SecurityTool 
                icon={<Users size={24} className="text-blue-500" />}
                title="Identity Management"
                description="Advanced authentication and authorization controls for secure access"
              />
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
                <button 
                  onClick={handleTryFreeTrial}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Start Free Trial
                </button>
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
              <FAQ 
                question="How does Luna's pricing compare to other cybersecurity solutions?"
                answer="Luna offers enterprise-grade security at a fraction of the cost of traditional solutions. Our AI-driven approach allows us to provide more efficient protection while keeping costs lower than comparable services."
              />
              <FAQ 
                question="Can I switch plans later if my needs change?"
                answer="Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, the new features become available immediately, and we'll prorate your billing accordingly."
              />
              <FAQ 
                question="Do you offer discounts for annual billing?"
                answer="Yes, we offer a 15% discount when you choose annual billing on any of our plans. This option will be available during checkout."
              />
              <FAQ 
                question="Is there a setup fee for new accounts?"
                answer="No, there are no setup fees or hidden charges. The price you see is the price you pay, and you can get started immediately after subscribing."
              />
              <FAQ 
                question="What kind of support can I expect?"
                answer="All plans include some level of support, ranging from email support for Guardian Shield to a dedicated account manager for Fortress Prime. Our technical team is based in-house and specializes in cybersecurity."
              />
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              For organizations with specific security requirements, our team can create a tailored solution that addresses your unique challenges.
            </p>
            <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
