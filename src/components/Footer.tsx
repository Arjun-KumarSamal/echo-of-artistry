
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 relative overflow-hidden">
      {/* Smooth transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/80 to-transparent"></div>
      
      {/* Final gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-purple-800 to-orange-600"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white">
              John Doe
            </h3>
            <p className="text-white/80 mt-1">Data Engineer & Analytics Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2024 John Doe. All rights reserved. Made with <span className="text-white">❤️</span> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
