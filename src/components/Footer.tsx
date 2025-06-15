
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-blue-900/70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white">
              John Doe
            </h3>
            <p className="text-white/70 mt-1">Data Engineer & Analytics Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/70">
            © 2024 John Doe. All rights reserved. Made with <span className="text-white">❤️</span> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
