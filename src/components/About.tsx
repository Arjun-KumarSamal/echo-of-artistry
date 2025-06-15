
import React from 'react';
import { Database, Code, BarChart3, Cloud } from 'lucide-react';

const skills = [
  { name: "Python", level: 95, icon: <Code className="w-5 h-5" /> },
  { name: "SQL", level: 90, icon: <Database className="w-5 h-5" /> },
  { name: "Apache Spark", level: 85, icon: <BarChart3 className="w-5 h-5" /> },
  { name: "AWS/GCP", level: 88, icon: <Cloud className="w-5 h-5" /> }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950">
      {/* Neon glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 border-2 border-cyan-400 rounded-full mb-6 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              <Database className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Data Engineer & Analytics Specialist</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate data engineer with 5+ years of experience building scalable data infrastructure 
                and analytics solutions. I specialize in transforming raw data into actionable insights that drive 
                business decisions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across big data technologies, cloud platforms, and machine learning pipelines. 
                I've successfully architected systems that process terabytes of data daily, ensuring reliability, 
                scalability, and optimal performance.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not designing data pipelines, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring data engineers.
              </p>
            </div>
            
            <div className="relative">
              <div className="backdrop-blur-md bg-slate-900/80 border-2 border-cyan-400/50 rounded-2xl p-8 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <h4 className="text-xl font-bold text-white mb-6 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Core Skills</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-cyan-400">{skill.icon}</div>
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden border border-cyan-400/20">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full opacity-20 blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-lime-400 to-yellow-400 rounded-full opacity-30 blur-sm"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center backdrop-blur-md bg-slate-900/80 border-2 border-cyan-400/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">100TB+</div>
              <div className="text-gray-300">Data Processed Daily</div>
            </div>
            <div className="text-center backdrop-blur-md bg-slate-900/80 border-2 border-cyan-400/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">50+</div>
              <div className="text-gray-300">ML Models Deployed</div>
            </div>
            <div className="text-center backdrop-blur-md bg-slate-900/80 border-2 border-cyan-400/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center backdrop-blur-md bg-slate-900/80 border-2 border-cyan-400/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
