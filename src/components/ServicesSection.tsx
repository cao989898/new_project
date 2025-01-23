import { FaBolt, FaLightbulb, FaCog, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaBolt className="text-4xl text-[#FF7315]" />,
    title: 'Electrical Installation',
    description: 'We carry out the maintenance, repair and maintenance of electrical installations safely and professionally.'
  },
  {
    icon: <FaLightbulb className="text-4xl text-[#FF7315]" />,
    title: 'Indoor Lighting',
    description: 'We build electricity interior lighting systems in the most modern way for home, offices and gardens.'
  },
  {
    icon: <FaCog className="text-4xl text-[#FF7315]" />,
    title: 'Electric Panels',
    description: 'We install panel electrical systems in your home, workplace, industry and all places in a correct and planned way.'
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#FF7315]" />,
    title: 'Electrical Repairs',
    description: 'We provide professional electrical repair and repair services with our highly trained and expert electrician masters.'
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Browse Our Popular Electrical Services</h2>
          <p className="text-gray-600">Get your electrical installation and repair work done in the most effective way.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-[#FF7315] hover:text-[#E65C00] transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};