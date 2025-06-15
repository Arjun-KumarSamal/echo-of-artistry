
import React from 'react';
import { ArrowDown, Database, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90"></div>
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
      </div>
      
      {/* Floating glass cards */}
      <div className="absolute top-20 right-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 animate-float hidden lg:block">
        <Database className="w-8 h-8 text-purple-300 mb-2" />
        <div className="text-white text-sm font-medium">Data Processing</div>
        <div className="text-purple-300 text-xs">10TB+ Daily</div>
      </div>
      
      <div className="absolute bottom-32 left-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 animate-float hidden lg:block" style={{animationDelay: '1s'}}>
        <BarChart3 className="w-8 h-8 text-blue-300 mb-2" />
        <div className="text-white text-sm font-medium">ML Models</div>
        <div className="text-blue-300 text-xs">50+ Deployed</div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 mb-8 inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Hello, I'm John Doe
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-purple-300 font-semibold">
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
              className="backdrop-blur-md bg-purple-600/80 hover:bg-purple-700/80 border border-purple-400/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Data Projects
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="backdrop-blur-md bg-white/10 border-2 border-purple-400/50 text-purple-300 hover:bg-purple-400/20 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              About My Journey
            </button>
          </div>
        </div>
      </div>

      {/* Move down arrow to bottom-right corner */}
      <div className="fixed bottom-8 right-8 z-20 animate-bounce">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all cursor-pointer">
          <ArrowDown className="w-6 h-6 text-purple-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
