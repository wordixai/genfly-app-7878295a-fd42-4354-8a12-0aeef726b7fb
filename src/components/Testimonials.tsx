import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director, Retail Co.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      quote: "WhatsApp Marketing has transformed how we connect with customers. Our engagement rates have increased by 65% and sales conversions are up 40% since implementing their platform."
    },
    {
      name: "Michael Chen",
      position: "E-commerce Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      quote: "The automated responses and campaign scheduling have saved us countless hours while improving our customer service. It's been a game-changer for our small business."
    },
    {
      name: "Priya Patel",
      position: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      quote: "We've been able to reach customers in ways that email marketing never could. The open rates are incredible, and the platform is so easy to use."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Businesses of all sizes are achieving remarkable results with our WhatsApp Marketing solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-4">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}