
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 border-t-2 border-emerald-400/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">
              John Doe
            </h3>
            <p className="text-gray-400 mt-1">Data Engineer & Analytics Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">About</a>
            <a href="#portfolio" className="text-gray-400 hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">Work</a>
            <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-emerald-400/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 John Doe. All rights reserved. Made with <span className="text-emerald-400 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">❤️</span> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
