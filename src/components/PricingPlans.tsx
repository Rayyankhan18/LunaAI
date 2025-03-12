
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type PricingPlanProps = {
  title: string;
  price: string;
  billingPeriod?: string;
  features: string[];
  buttonText?: string;
  isPrimary?: boolean;
  icon?: React.ReactNode;
};

export const PricingCard = ({ 
  title, 
  price,
  billingPeriod = "billed monthly",
  features,
  buttonText = "Choose Plan",
  isPrimary = false,
  icon
}: PricingPlanProps) => {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold">₹{price}</span>
        {price !== "Contact Us" && <span className="text-white/60 ml-1">per month</span>}
        {billingPeriod && <p className="text-sm text-white/60 mt-1">{billingPeriod}</p>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check size={18} className="text-blue-500 flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-white/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full py-2.5 ${
          isPrimary 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const PricingPlans: React.FC<{
  showHeading?: boolean;
  className?: string;
}> = ({ showHeading = true, className = "" }) => {
  const pricingPlans: PricingPlanProps[] = [
    {
      title: "Guardian Shield",
      price: "999",
      features: [
        "Phishing attack detection",
        "Real-time threat alerts",
        "Regular security updates",
        "Basic AI threat analysis",
        "Email support"
      ],
      buttonText: "Choose Plan"
    },
    {
      title: "Sentinel Edge",
      price: "19,999",
      features: [
        "DDoS attack mitigation",
        "AI-driven threat analytics",
        "Incident reporting",
        "Role-based access controls",
        "24/7 phone and email support"
      ],
      isPrimary: true,
      buttonText: "Choose Plan"
    },
    {
      title: "Fortress Prime",
      price: "Contact Us",
      billingPeriod: "",
      features: [
        "End-to-End CICD Monitoring",
        "Custom Threat Simulations",
        "Automated Vulnerability Patching",
        "Proactive code integrity checks",
        "Dedicated account manager"
      ],
      buttonText: "Call Us",
      icon: <img src="/lovable-uploads/168f55ed-b6e3-4083-a845-ce7e4ca49b7c.png" alt="Fortress" className="w-16 h-16 opacity-80" />
    }
  ];

  return (
    <div className={className}>
      {showHeading && (
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Plans Built for Every Need</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Flexible pricing to safeguard your business—tailored for startups, enterprises, and innovators alike.
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
