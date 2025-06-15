
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/bb5f08b7-8a76-4728-8d2a-127adb850c93.png')`
        }}
      >
        {/* Stronger dark overlay with more color tint */}
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-blue-900/30"></div>
        
        {/* Enhanced black blur gradient on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        
        {/* Top gradient blend for section transition with more tint */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-transparent"></div>
        
        {/* Additional color tint gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-900/30 to-black/40"></div>
      </div>

      {/* Grid pattern overlay - reduced opacity to blend with background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white">
              Web3 Solutions
            </h3>
            <p className="text-slate-300 mt-1">Blockchain Engineer & DeFi Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#portfolio" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Web3 Solutions. All rights reserved. Built with <span className="text-blue-400">⚡</span> and blockchain technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
