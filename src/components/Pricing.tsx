import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses just getting started with WhatsApp Marketing",
      features: [
        "Up to 1,000 messages per month",
        "Basic templates",
        "Auto-replies",
        "Standard support",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses looking to scale their WhatsApp marketing",
      features: [
        "Up to 5,000 messages per month",
        "Advanced templates",
        "Automated campaigns",
        "Priority support",
        "Detailed analytics",
        "Audience segmentation"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large businesses with advanced WhatsApp marketing needs",
      features: [
        "Unlimited messages",
        "Custom templates",
        "Advanced automation",
        "Dedicated account manager",
        "Advanced analytics & reporting",
        "API access",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden border ${
                plan.popular 
                  ? 'border-primary shadow-lg relative' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-dark">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#contact" 
                  className={`block w-full py-3 text-center rounded-md font-medium ${
                    plan.popular 
                      ? 'bg-primary text-white hover:bg-secondary' 
                      : 'bg-white text-primary border border-primary hover:bg-light'
                  } transition-colors`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}