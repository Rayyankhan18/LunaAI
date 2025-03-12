
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  features,
  isPopular = false
}: { 
  title: string; 
  price: string; 
  features: string[];
  isPopular?: boolean;
}) => {
  return (
    <div className={`rounded-2xl p-px ${isPopular ? 'bg-gradient-to-b from-luna-blue to-luna-blue/30' : 'bg-white/10'}`}>
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col">
        {isPopular && (
          <div className="bg-luna-blue text-white text-xs font-semibold uppercase tracking-wide py-1 px-3 rounded-full self-start mb-4">
            Most Popular
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <div className="mb-5">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== 'Free' && <span className="text-white/60 ml-1">/month</span>}
        </div>
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check size={18} className="text-luna-blue flex-shrink-0 mr-2 mt-0.5" />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          className={`mt-auto w-full py-2.5 rounded-lg font-medium transition-all duration-200 ${
            isPopular 
              ? 'bg-luna-blue hover:bg-luna-blue-light text-white' 
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          {isPopular ? 'Get Started' : 'Choose Plan'}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen luna-bg-gradient">
      <Navbar />
      <div className="pt-32 pb-16 px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Simple, Transparent Pricing</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose the plan that works for you, all with no hidden fees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Basic" 
              price="Free" 
              features={[
                "Access to core Luna features",
                "Limited queries per day",
                "Basic personalization",
                "Text interactions only",
              ]}
            />
            
            <PricingCard 
              title="Pro" 
              price="$9.99" 
              features={[
                "Unlimited queries",
                "Advanced personalization",
                "Voice and text interactions",
                "Priority response times",
                "No ads or tracking"
              ]}
              isPopular
            />
            
            <PricingCard 
              title="Enterprise" 
              price="$29.99" 
              features={[
                "Everything in Pro",
                "Multiple user accounts",
                "Dedicated support",
                "Custom integrations",
                "Advanced analytics",
                "API access"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
