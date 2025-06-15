
import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { category: 'Blockchain Technologies', items: ['Ethereum', 'Solidity', 'Web3.js', 'Hardhat', 'Truffle'] },
    { category: 'DeFi Protocols', items: ['Uniswap', 'Compound', 'Aave', 'MakerDAO', 'Curve'] },
    { category: 'Development Tools', items: ['React', 'Node.js', 'TypeScript', 'Python', 'Rust'] },
    { category: 'Infrastructure', items: ['IPFS', 'The Graph', 'Chainlink', 'Polygon', 'Arbitrum'] },
    { category: 'Security & Auditing', items: ['OpenZeppelin', 'Slither', 'MythX', 'Certik', 'Trail of Bits'] }
  ];

  const education = [
    {
      degree: 'Master of Science in Blockchain Technology',
      institution: 'MIT',
      period: '2017 - 2019',
      location: 'Cambridge, MA',
      description: 'Specialized in cryptography, distributed systems, and smart contract development.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      period: '2013 - 2017',
      location: 'Stanford, CA',
      description: 'Focus on algorithms, cybersecurity, and decentralized systems architecture.'
    }
  ];

  const certifications = [
    { name: 'Certified Ethereum Developer', issuer: 'Ethereum Foundation', year: '2023' },
    { name: 'Smart Contract Security Auditor', issuer: 'ConsenSys', year: '2022' },
    { name: 'DeFi Protocol Specialist', issuer: 'DeFi Alliance', year: '2022' },
    { name: 'Blockchain Solutions Architect', issuer: 'Hyperledger', year: '2021' }
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/bb5f08b7-8a76-4728-8d2a-127adb850c93.png')`
        }}
      >
        {/* Stronger dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Black blur gradient on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        
        {/* Top gradient blend for section transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
        
        {/* Bottom gradient blend for next section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl mb-6">
            <GraduationCap className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Background</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional experience, skills, and educational journey in blockchain
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-full p-2">
            {['skills', 'education', 'certifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="bg-blue-500/10 border border-blue-400/20 text-blue-300 px-3 py-2 rounded-lg text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                      <h4 className="text-xl text-blue-300 font-semibold">{edu.institution}</h4>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0">
                      <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                      <p className="text-blue-300 font-medium mb-2">{cert.issuer}</p>
                      <div className="bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-sm w-fit">
                        {cert.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
