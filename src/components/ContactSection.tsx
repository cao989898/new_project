import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactSection = () => {
  return (
    <footer id="contact" className="bg-[#FF7315] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Elektra</h3>
            <p className="mb-6">
              We unite with our expert staff and help make your world safer.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="mr-3" />
                <span>+123 456 78 90 01</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3" />
                <span>example@example.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                <span>New Jersey, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-gray-200 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-gray-200 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>Electrical Installation</li>
              <li>Indoor Lighting</li>
              <li>Electric Panels</li>
              <li>Electrical Repairs</li>
              <li>Security Systems</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} Elektra - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};