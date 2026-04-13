import React from 'react';
import { Layers, Smartphone, LayoutDashboard, MonitorPlay, ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EcoTrack Dashboard",
    subtitle: "Data Visualization Platform",
    description: "A comprehensive dashboard for tracking corporate carbon footprints in real-time, featuring complex data visualizations and predictive modeling.",
    tags: ["React", "D3.js", "Tailwind CSS", "Node.js"],
    category: "Web App",
    icon: <LayoutDashboard className="w-6 h-6" />,
    status: "Completed"
  },
  {
    id: 2,
    title: "FinanceFlow Mobile",
    subtitle: "Personal Finance Companion", 
    description: "A cross-platform mobile app that helps users manage budgets, categorize spending automatically, and plan for future goals.",
    tags: ["React Native", "TypeScript", "Redux", "Firebase"],
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    status: "In App Store"
  },
  {
    id: 3,
    title: "Lumina Streaming",
    subtitle: "High-Performance Video Platform",
    description: "A scalable video streaming platform with custom player controls, adaptive bitrate streaming, and live chat functionality.",
    tags: ["Next.js", "WebRTC", "Socket.io", "AWS"],
    category: "Streaming", 
    icon: <MonitorPlay className="w-6 h-6" />,
    status: "Live"
  },
  {
    id: 4,
    title: "Nexus Design System",
    subtitle: "Enterprise Component Library",
    description: "A robust, fully accessible component library built for a Fortune 500 company to unify their digital product ecosystem.",
    tags: ["React", "Storybook", "Framer Motion", "Radix UI"],
    category: "Design System",
    icon: <Layers className="w-6 h-6" />,
    status: "V2.0 Released"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-gradient-to-t from-black via-blue-950/20 to-black">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-blue-600/10 blur-[150px] mix-blend-screen pointer-events-none transform -translate-y-1/2"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl shadow-blue-500/20 mb-8 transform hover:rotate-12 transition-transform duration-300">
            <Layers className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-400 mb-6 font-sans">
            Featured Projects
          </h2>
          <p className="text-xl text-blue-100/70 max-w-2xl mx-auto font-light">
            A selection of my favorite works, from experimental concepts to full-scale production applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-[2rem] transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-900/40 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Highlight line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between">
                {/* Top section */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/20 rounded-2xl text-blue-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-blue-200/50 text-sm font-bold uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="px-4 py-1.5 rounded-full text-xs font-bold border bg-blue-500/10 border-blue-400/30 text-blue-300">
                      {project.status}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-100/70 text-lg mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Bottom section */}
                <div className="space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-black/30 border border-white/5 text-blue-200/80 px-3 py-1.5 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                     <button className="flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors group/btn">
                        View Case Study
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                    <div className="flex gap-3">
                      <button className="w-12 h-12 bg-black/40 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-white transition-all text-slate-300">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-black/40 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-white transition-all text-slate-300">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3">
            <Github className="w-6 h-6" />
            See More on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
