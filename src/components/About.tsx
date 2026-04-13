
import React from 'react';
import { User, Code2, Database, Layout } from 'lucide-react';

const skills = [
  { name: "Frontend Development", level: 95, icon: <Layout className="w-5 h-5" /> },
  { name: "React / Next.js", level: 90, icon: <Code2 className="w-5 h-5" /> },
  { name: "Backend APIs", level: 85, icon: <Database className="w-5 h-5" /> },
  { name: "UI/UX Architecture", level: 88, icon: <User className="w-5 h-5" /> }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-900 via-gray-900 to-black">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-400 mb-6 font-sans tracking-tight">About Me</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-teal-400 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-white mb-6">Software Engineer & Designer</h3>
              <p className="text-xl text-teal-100/70 leading-relaxed font-light">
                Hello! I'm Arjun, a passionate developer who loves transforming complex problems into simple, beautiful, and intuitive designs. Based in San Francisco, I've spent the last half-decade building digital products.
              </p>
              <p className="text-xl text-teal-100/70 leading-relaxed font-light">
                My journey in web development started back in 2018 when I built a small app for local businesses. Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation.
              </p>
              <p className="text-xl text-teal-100/70 leading-relaxed font-light">
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
            </div>
            
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl shadow-teal-900/20">
                <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Code2 className="text-teal-400" />
                  Technical Proficiency
                </h4>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-teal-500/20 text-teal-300">{skill.icon}</div>
                          <span className="font-semibold text-lg text-white">{skill.name}</span>
                        </div>
                        <span className="text-md font-bold text-teal-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-3 overflow-hidden border border-white/5">
                        <div 
                          className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
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
            <div className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-500 mb-3">5+</div>
              <div className="text-teal-100/60 font-medium uppercase tracking-widest text-sm">Years Exp.</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-500 mb-3">50+</div>
              <div className="text-teal-100/60 font-medium uppercase tracking-widest text-sm">Projects</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-500 mb-3">15</div>
              <div className="text-teal-100/60 font-medium uppercase tracking-widest text-sm">Clients</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-500 mb-3">1M+</div>
              <div className="text-teal-100/60 font-medium uppercase tracking-widest text-sm">Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
