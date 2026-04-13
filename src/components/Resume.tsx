import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, Zap } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { category: 'Frontend Magic', items: ['React', 'Vue.js', 'Next.js', 'Tailwind', 'Framer Motion'] },
    { category: 'Backend Power', items: ['Node.js', 'Express', 'Python', 'Go', 'GraphQL'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'] },
    { category: 'DevOps & Tools', items: ['Docker', 'AWS', 'Vercel', 'Git', 'GitHub Actions'] },
    { category: 'Design Systems', items: ['Figma', 'Storybook', 'Radix UI', 'Shadcn UI', 'Adobe CC'] }
  ];

  const education = [
    {
      degree: 'Master of Human-Computer Interaction',
      institution: 'Carnegie Mellon University',
      period: '2015 - 2017',
      location: 'Pittsburgh, PA',
      description: 'Specialized in user experience design, cognitive psychology, and interactive systems.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Washington',
      period: '2011 - 2015',
      location: 'Seattle, WA',
      description: 'Focus on web technologies, software engineering principles, and human-centered design.'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google UX Design Professional Certificate', issuer: 'Google', year: '2022' },
    { name: 'React Advanced Certification', issuer: 'Frontend Masters', year: '2021' },
    { name: 'Certified Scrum Developer', issuer: 'Scrum Alliance', year: '2020' }
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-gradient-to-br from-black via-rose-950/30 to-black">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-rose-500 to-orange-500 rounded-3xl shadow-2xl mb-8 transform rotate-3 hover:rotate-12 transition-transform duration-300">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-orange-400 mb-6 font-sans">
            Skills & Education
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-2 flex flex-wrap gap-2 justify-center shadow-xl">
            {['skills', 'education', 'certifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full text-md font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-rose-500 to-orange-600 text-white shadow-lg'
                    : 'text-rose-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto min-h-[400px]">
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {skills.map((skillGroup, index) => (
                <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 shadow-2xl group">
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-rose-400 transition-colors">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="bg-black/40 border border-white/10 text-rose-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-rose-500/20 hover:border-rose-500/50 transition-colors cursor-default">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8 animate-fade-in">
              {education.map((edu, index) => (
                <div key={index} className="backdrop-blur-xl bg-white/5 border border-rose-500/20 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-rose-500 to-orange-500 group-hover:w-3 transition-all"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                      <h4 className="text-xl text-rose-400 font-medium">{edu.institution}</h4>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3 mt-6 md:mt-0">
                      <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-200 px-4 py-2 rounded-full text-sm font-bold shadow-inner">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 text-rose-100/60 text-sm font-medium">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-rose-100/80 leading-relaxed text-lg font-light">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {certifications.map((cert, index) => (
                <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{cert.name}</h3>
                      <p className="text-rose-300 font-medium mb-4">{cert.issuer}</p>
                      <div className="bg-black/30 border border-white/5 text-rose-200 px-4 py-1.5 rounded-full text-sm font-bold w-fit">
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
