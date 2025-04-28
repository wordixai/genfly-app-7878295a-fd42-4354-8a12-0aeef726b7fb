import { MessageSquare, Users, BarChart3, Bot } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Bulk Messaging",
      description: "Send personalized messages to thousands of customers at once with our powerful bulk messaging system."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Automated Responses",
      description: "Set up intelligent auto-replies to handle common questions and provide instant customer support."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Audience Segmentation",
      description: "Target specific customer groups based on behavior, preferences, and demographics."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Track message delivery, open rates, and customer engagement with detailed reporting."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Powerful Features to Grow Your Business</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our WhatsApp Marketing platform provides everything you need to connect with customers and drive sales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}