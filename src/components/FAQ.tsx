"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is WhatsApp Marketing?",
      answer: "WhatsApp Marketing is a strategy that uses the WhatsApp platform to promote products or services, engage with customers, and provide support. It leverages WhatsApp's high engagement rates and wide user base to help businesses connect with their audience more effectively."
    },
    {
      question: "Do I need a WhatsApp Business account to use your platform?",
      answer: "Yes, you'll need a WhatsApp Business account to use our platform. We can help you set up and verify your WhatsApp Business account as part of our onboarding process."
    },
    {
      question: "Is WhatsApp Marketing compliant with privacy regulations?",
      answer: "Yes, our platform is designed to be compliant with privacy regulations like GDPR and CCPA. We only allow messaging to customers who have opted in to receive communications, and we provide easy opt-out options."
    },
    {
      question: "How many messages can I send per month?",
      answer: "The number of messages you can send depends on your plan. Our Starter plan includes up to 1,000 messages per month, Professional includes 5,000, and Enterprise offers unlimited messaging."
    },
    {
      question: "Can I integrate WhatsApp Marketing with my existing CRM?",
      answer: "Yes, our platform offers integrations with popular CRM systems like Salesforce, HubSpot, and more. Custom integrations are also available for Enterprise customers."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our WhatsApp Marketing solutions
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-dark">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}