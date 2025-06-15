
import React from 'react';
import { ArrowDown, Database, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Purple to orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-600/60 to-orange-500/80"></div>
      
      {/* Floating glass cards */}
      <div className="absolute top-20 right-20 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 animate-float hidden lg:block">
        <Database className="w-8 h-8 text-white mb-2" />
        <div className="text-white text-sm font-medium">Data Processing</div>
        <div className="text-white/70 text-xs">10TB+ Daily</div>
      </div>
      
      <div className="absolute bottom-32 left-20 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 animate-float hidden lg:block" style={{animationDelay: '1s'}}>
        <BarChart3 className="w-8 h-8 text-white mb-2" />
        <div className="text-white text-sm font-medium">ML Models</div>
        <div className="text-white/70 text-xs">50+ Deployed</div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="text-sm text-white/60 uppercase tracking-wider mb-4">DEV & DESIGN ENGINEERING</div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              John Doe<br />
              <span className="text-4xl md:text-5xl font-normal text-white/80">Academy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/70 max-w-3xl mx-auto leading-relaxed">
              Transforming raw data into actionable insights through scalable pipelines, 
              machine learning solutions, and cloud-native architectures.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              View My Data Projects
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              About My Journey
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Location</div>
              <div className="text-white font-medium">San Francisco</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Duration</div>
              <div className="text-white font-medium">5 years</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Mentors</div>
              <div className="text-white font-medium">50+</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Courses</div>
              <div className="text-white font-medium">25</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
