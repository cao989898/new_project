export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
              alt="Electrician at work" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">30+ Years Authorized Experience In Electrical Services Industry</h2>
            <p className="text-gray-600 mb-6">
              Our company has become one of the world's leading companies in the industry with the knowledge, experience and expertise it has gained since its establishment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-[#FF7315] mr-2">✓</span>
                <span>Licensed & Insured Electricians</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#FF7315] mr-2">✓</span>
                <span>Emergency Service Available</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#FF7315] mr-2">✓</span>
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
            <button className="mt-8 bg-[#FF7315] text-white px-8 py-3 rounded-full hover:bg-[#E65C00] transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};