import { useState } from 'react';
import { FaBolt } from 'react-icons/fa';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaBolt className="text-[#FF7315] text-3xl mr-2" />
          <span className="text-2xl font-bold">Elektra</span>
        </div>

        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-8">
            <li><a href="#" className="hover:text-[#FF7315]">Home</a></li>
            <li><a href="#about" className="hover:text-[#FF7315]">About</a></li>
            <li><a href="#services" className="hover:text-[#FF7315]">Services</a></li>
            <li><a href="#projects" className="hover:text-[#FF7315]">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#FF7315]">Contact</a></li>
          </ul>
        </nav>

        <button className="bg-[#FF7315] text-white px-6 py-2 rounded-full hover:bg-[#E65C00] transition-colors">
          Appointment →
        </button>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>
    </header>
  );
};