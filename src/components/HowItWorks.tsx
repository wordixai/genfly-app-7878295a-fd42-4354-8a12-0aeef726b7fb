export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Connect",
      description: "Create your account and connect your WhatsApp Business API in minutes with our guided setup process."
    },
    {
      number: "02",
      title: "Build Your Audience",
      description: "Import your existing contacts or grow your subscriber list with our built-in tools and integrations."
    },
    {
      number: "03",
      title: "Create Campaigns",
      description: "Design engaging message templates, set up automated flows, and schedule your campaigns."
    },
    {
      number: "04",
      title: "Analyze & Optimize",
      description: "Track performance metrics and refine your strategy based on detailed analytics and insights."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get started with WhatsApp Marketing in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-light p-6 rounded-lg h-full">
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-dark">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-1 bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}