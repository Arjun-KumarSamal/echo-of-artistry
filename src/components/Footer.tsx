import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-400 mb-2">
              Arjun Kumar Samal
            </h3>
            <p className="text-amber-100/60 font-light">Creative Technologist & Developer</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-sm font-bold text-amber-100/60 hover:text-white transition-colors uppercase tracking-widest">About</a>
            <a href="#portfolio" className="text-sm font-bold text-amber-100/60 hover:text-white transition-colors uppercase tracking-widest">Projects</a>
            <a href="#resume" className="text-sm font-bold text-amber-100/60 hover:text-white transition-colors uppercase tracking-widest">Resume</a>
            <a href="#contact" className="text-sm font-bold text-amber-100/60 hover:text-white transition-colors uppercase tracking-widest">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-amber-100/40 text-sm">
            © {new Date().getFullYear()} Arjun Kumar Samal. All rights reserved.
          </p>
          <p className="text-amber-100/40 text-sm flex items-center justify-center gap-1.5">
            Designed & Built with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
