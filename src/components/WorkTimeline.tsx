import React from 'react';
import { Building, Calendar } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    company: "DeFi Protocol Labs",
    position: "Lead Blockchain Engineer",
    period: "2022 - Present",
    description: "Leading development of next-generation DeFi protocols and cross-chain bridges with focus on security and scalability.",
    achievements: ["Built multi-chain DEX handling $10M+ daily volume", "Reduced gas costs by 60%", "Led team of 8 engineers"]
  },
  {
    id: 2,
    company: "CryptoVault Solutions",
    position: "Senior Smart Contract Developer",
    period: "2020 - 2022",
    description: "Developed secure wallet infrastructure and automated market-making protocols for institutional clients.",
    achievements: ["Deployed 50+ audited smart contracts", "Zero security incidents in production", "Integrated 15+ blockchain networks"]
  },
  {
    id: 3,
    company: "Web3 Innovations",
    position: "Blockchain Developer",
    period: "2019 - 2020",
    description: "Built foundational Web3 applications and contributed to open-source blockchain ecosystem development.",
    achievements: ["Created popular wallet SDK", "Built first cross-chain DEX", "Contributed to major DeFi protocols"]
  }
];

const WorkTimeline = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4bfefdbc-ea59-4c1b-bde0-1b7badecdcab.png')`
        }}
      >
        {/* Stronger dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Black blur gradient on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        
        {/* Top gradient blend for section transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent"></div>
        
        {/* Bottom gradient blend for next section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
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
            <Building className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My journey in blockchain development and building decentralized solutions
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <div key={job.id} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== workExperience.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-blue-400/20"></div>
              )}
              
              <div className="flex items-start gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                
                {/* Content */}
                <div className="flex-1 backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{job.position}</h3>
                      <h4 className="text-xl text-blue-300 font-semibold">{job.company}</h4>
                    </div>
                    <div className="backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0 w-fit">
                      {job.period}
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="text-white font-semibold text-sm uppercase tracking-wide">Key Achievements</h5>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
