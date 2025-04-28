import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-light to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Supercharge Your Business with WhatsApp Marketing
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Connect with your customers where they already are. Our WhatsApp Marketing solutions help you engage, convert, and grow your business through personalized messaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-primary text-white px-6 py-3 rounded-md text-center font-medium hover:bg-secondary transition-colors">
                Get Started Free
              </Link>
              <Link href="#how-it-works" className="border border-primary text-primary px-6 py-3 rounded-md text-center font-medium hover:bg-light transition-colors">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
                alt="WhatsApp Marketing Dashboard"
                fill
                className="object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}