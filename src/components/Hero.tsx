
import React from 'react';
import { ArrowDown, Wallet, Shield, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/2557aa55-438b-42d0-96ee-bca970aef5e5.png')`
        }}
      >
        {/* Stronger dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Black blur gradient on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        
        {/* Bottom gradient blend for section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Grid pattern overlay - reduced opacity to blend with background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 border-2 border-blue-400/30 rounded-lg backdrop-blur-sm bg-blue-500/10 hidden lg:block animate-float">
        <div className="w-full h-full flex items-center justify-center">
          <Wallet className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      
      <div className="absolute top-40 right-40 w-16 h-16 border border-blue-300/20 rounded-xl backdrop-blur-sm bg-blue-400/5 hidden lg:block animate-float" style={{animationDelay: '1s'}}>
        <div className="w-full h-full flex items-center justify-center">
          <Shield className="w-6 h-6 text-blue-300" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-blue-500/20 rounded-2xl backdrop-blur-sm bg-blue-600/10 hidden lg:block animate-float" style={{animationDelay: '2s'}}>
        <div className="w-full h-full flex items-center justify-center">
          <Globe className="w-10 h-10 text-blue-500" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="text-sm text-blue-300 uppercase tracking-wider mb-4">WEB3 WALLET SOLUTIONS</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              In Web 3, Several Types<br />
              Of Wallets Exist<br />
              <span className="text-3xl md:text-4xl font-normal text-blue-200">Within The Space.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Web3 Wallets Have Set A New Industry Standard In Creating New 
              Ways To Own And Manage Our Content, Identity, And Assets As We 
              Move On Towards The Next Generation Of The Internet.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Open Wallet
            </button>
            <button className="border border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Join the Community
            </button>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-left hover:bg-slate-800/40 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Standard Crypto Exchanges</h3>
              <p className="text-slate-300 text-sm">Create and manage trading pairs and automated liquidity provision with advanced DeFi protocols.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-left hover:bg-slate-800/40 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Decentralized Exchanges</h3>
              <p className="text-slate-300 text-sm">Access peer-to-peer trading with enhanced security and full control over your digital assets.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-left hover:bg-slate-800/40 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Hot Wallets & Cold Wallets</h3>
              <p className="text-slate-300 text-sm">Choose between convenient hot storage for daily use or secure cold storage for long-term holdings.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
