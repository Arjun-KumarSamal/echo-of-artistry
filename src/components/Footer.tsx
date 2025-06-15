
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 border-t border-slate-700/50">
      {/* Grid pattern background */}
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
