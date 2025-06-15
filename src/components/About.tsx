
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-slate-900/90 to-gray-900/95"></div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md bg-white/10 border border-white/20 rounded-full mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Data Engineer & Analytics Specialist</h3>
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
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
                <h4 className="text-xl font-bold text-white mb-6">Core Skills</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-purple-400">{skill.icon}</div>
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">100TB+</div>
              <div className="text-gray-300">Data Processed Daily</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-300">ML Models Deployed</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
