
import React from 'react';
import { ArrowDown, Database, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950">
      {/* Neon glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-lime-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating glass cards */}
      <div className="absolute top-20 right-20 backdrop-blur-md bg-emerald-500/10 border-2 border-emerald-400/50 rounded-2xl p-4 animate-float hidden lg:block shadow-[0_0_30px_rgba(34,197,94,0.5)]">
        <Database className="w-8 h-8 text-emerald-400 mb-2" />
        <div className="text-white text-sm font-medium drop-shadow-[0_0_5px_rgba(34,197,94,0.7)]">Data Processing</div>
        <div className="text-emerald-300 text-xs">10TB+ Daily</div>
      </div>
      
      <div className="absolute bottom-32 left-20 backdrop-blur-md bg-cyan-500/10 border-2 border-cyan-400/50 rounded-2xl p-4 animate-float hidden lg:block shadow-[0_0_30px_rgba(34,211,238,0.5)]" style={{animationDelay: '1s'}}>
        <BarChart3 className="w-8 h-8 text-cyan-400 mb-2" />
        <div className="text-white text-sm font-medium drop-shadow-[0_0_5px_rgba(34,211,238,0.7)]">ML Models</div>
        <div className="text-cyan-300 text-xs">50+ Deployed</div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="backdrop-blur-md bg-slate-900/80 border-2 border-emerald-400/50 rounded-3xl p-8 mb-8 inline-block shadow-[0_0_50px_rgba(34,197,94,0.3)]">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">
              Hello, I'm John Doe
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-emerald-300 font-semibold drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              Data Engineer & Analytics Specialist
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming raw data into actionable insights through scalable pipelines, 
              machine learning solutions, and cloud-native architectures.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-500/80 to-cyan-500/80 border-2 border-emerald-400/50 hover:border-emerald-400/70 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
            >
              View My Data Projects
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="backdrop-blur-md bg-slate-900/50 border-2 border-emerald-400/50 text-emerald-300 hover:bg-emerald-500/20 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
            >
              About My Journey
            </button>
          </div>
        </div>
      </div>

      {/* Move down arrow to bottom-right corner */}
      <div className="fixed bottom-8 right-8 z-20 animate-bounce">
        <div className="backdrop-blur-sm bg-emerald-500/20 border-2 border-emerald-400/50 rounded-full p-3 hover:bg-emerald-500/30 transition-all cursor-pointer shadow-[0_0_20px_rgba(34,197,94,0.4)]">
          <ArrowDown className="w-6 h-6 text-emerald-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
