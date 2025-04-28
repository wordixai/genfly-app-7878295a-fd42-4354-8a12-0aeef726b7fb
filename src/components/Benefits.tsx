import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Reach customers instantly with 98% open rates",
    "Increase customer engagement and loyalty",
    "Reduce marketing costs compared to traditional channels",
    "Automate customer support and save time",
    "Drive sales with personalized offers and promotions",
    "Build stronger customer relationships"
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative h-[400px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=2070&auto=format&fit=crop"
                alt="Business growth with WhatsApp Marketing"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Why Choose WhatsApp for Business Marketing?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              With over 2 billion active users worldwide, WhatsApp offers unparalleled reach and engagement for businesses of all sizes.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}