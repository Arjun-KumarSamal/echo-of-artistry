import React from 'react';
import { Building, Calendar, Briefcase } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    company: "TechNova Solutions",
    position: "Senior Frontend Engineer",
    period: "2021 - Present",
    description: "Spearheaded the transition to a modern React & Next.js stack, improving performance and developer experience across the board.",
    achievements: ["Improved core web vitals by 40%", "Mentored 5 junior developers", "Led the frontend architecture for our flagship product"]
  },
  {
    id: 2,
    company: "Creative Studio Agency",
    position: "Full Stack Developer",
    period: "2018 - 2021",
    description: "Developed and maintained dozens of high-traffic client websites and internal tools using React, Node.js, and PostgreSQL.",
    achievements: ["Successfully launched 20+ client projects", "Implemented automated CI/CD pipelines", "Awarded 'Developer of the Year' in 2020"]
  },
  {
    id: 3,
    company: "Startup Hub Ignite",
    position: "Junior Web Developer",
    period: "2016 - 2018",
    description: "Collaborated with designers and product managers to build MVPs and prototype fast-paced product ideas.",
    achievements: ["Created reusable component libraries", "Refactored legacy vanilla JS codebase", "Integrated third-party analytics"]
  }
];

const WorkTimeline = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-fuchsia-950/20 to-black">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl shadow-xl shadow-fuchsia-500/20 mb-8 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Experience</h2>
          <p className="text-xl text-fuchsia-200/70 max-w-2xl mx-auto font-light">
            My professional journey and career milestones.
          </p>
        </div>


        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <div key={job.id} className="relative mb-16 last:mb-0 group">
              {/* Timeline line */}
              {index !== workExperience.length - 1 && (
                <div className="absolute left-10 top-24 bottom-[-4rem] w-[2px] bg-gradient-to-b from-fuchsia-500 to-purple-900 group-hover:from-fuchsia-400 group-hover:to-fuchsia-600 transition-colors duration-500 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-20 h-20 bg-black border-4 border-fuchsia-500 rounded-full items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-fuchsia-500/20">
                  <span className="text-fuchsia-500 font-bold text-lg">0{index + 1}</span>
                </div>

                {/* Content */}
                <div className="flex-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 hover:-translate-y-2 transition-all duration-300 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-purple-400 mb-2">{job.position}</h3>
                      <h4 className="text-xl text-white font-medium flex items-center gap-2">
                        <Building className="w-5 h-5 text-fuchsia-400" />
                        {job.company}
                      </h4>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 px-5 py-2 rounded-full text-sm font-bold mt-6 md:mt-0 shadow-inner">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                  </div>

                  <p className="text-purple-100/70 mb-8 leading-relaxed text-lg font-light">
                    {job.description}
                  </p>

                  <div className="space-y-4 bg-black/30 rounded-2xl p-6 border border-white/5">
                    <h5 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-fuchsia-500"></div> Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-purple-200/80">
                          <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full mt-2.5 flex-shrink-0 opacity-60"></div>
                          <span className="text-md">{achievement}</span>
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
