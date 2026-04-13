import React from 'react';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/20 via-transparent to-transparent"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Floating abstract elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-fuchsia-200 uppercase tracking-wider mb-6">
              CREATIVE TECHNOLOGIST
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-200 to-blue-200 leading-tight">
              Crafting Digital <br />
              Experiences
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              I build interactive, accessible, and inclusive digital products. 
              Bridging the gap between design and engineering to create impactful user experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 flex justify-center items-center gap-2">
              View My Work <ArrowRight className="w-5 h-5" />
            </button>
            <button className="backdrop-blur-md bg-white/5 border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Me
            </button>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Frontend Dev</h3>
              <p className="text-purple-200/70">Building responsive and highly interactive web applications using modern frameworks.</p>
            </div>
            
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Palette className="w-6 h-6 text-fuchsia-300" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-purple-200/70">Creating intuitive, accessible, and beautiful user interfaces that delight users.</p>
            </div>
            
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Optimization</h3>
              <p className="text-purple-200/70">Ensuring lightning-fast load times and smooth performance across all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

