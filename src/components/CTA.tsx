import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business with WhatsApp Marketing?
        </h2>
        <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
          Join thousands of businesses that are already growing their customer base and increasing sales with our WhatsApp Marketing solutions.
        </p>
        
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-primary font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </button>
          </form>
          <p className="text-white text-sm mt-4 opacity-80">
            No credit card required. Start your 14-day free trial today.
          </p>
        </div>
      </div>
    </section>
  );
}