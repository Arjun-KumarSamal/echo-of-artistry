
import React from 'react';
import { Wallet, Code, BarChart3, Shield } from 'lucide-react';

const skills = [
  { name: "Blockchain Development", level: 95, icon: <Code className="w-5 h-5" /> },
  { name: "Smart Contracts", level: 90, icon: <Wallet className="w-5 h-5" /> },
  { name: "DeFi Protocols", level: 85, icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Web3 Security", level: 88, icon: <Shield className="w-5 h-5" /> }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/3023344f-0f63-42e5-9b90-465bb85ef2c8.png')`
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Black blur gradient on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      {/* Grid pattern overlay - reduced opacity to blend with background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl mb-6">
              <Wallet className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Platform</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Web3 & Blockchain Specialist</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                We're pioneering the future of decentralized finance with 5+ years of experience building 
                secure blockchain solutions and innovative DeFi protocols that empower users worldwide.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our expertise spans across smart contract development, wallet integrations, and 
                cross-chain protocols. We've successfully deployed solutions that handle millions 
                in transaction volume with enterprise-grade security.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When we're not building the next generation of Web3 infrastructure, we're contributing to 
                open-source protocols and educating the community about blockchain technology.
              </p>
            </div>
            
            <div className="relative">
              <div className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">Core Expertise</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-blue-400">{skill.icon}</div>
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">$50M+</div>
              <div className="text-slate-400">Total Value Locked</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-slate-400">Smart Contracts</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
