
import React from 'react';
import { Building, Calendar } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Data Engineer",
    period: "2022 - Present",
    description: "Leading data pipeline architecture and implementing real-time analytics solutions using Apache Spark, Kafka, and cloud platforms.",
    achievements: ["Built ETL pipelines processing 10TB+ daily", "Reduced data latency by 70%", "Led team of 5 engineers"]
  },
  {
    id: 2,
    company: "DataFlow Inc",
    position: "Data Engineer",
    period: "2020 - 2022",
    description: "Developed scalable data infrastructure and machine learning pipelines for customer analytics and business intelligence.",
    achievements: ["Implemented ML models with 95% accuracy", "Optimized queries reducing costs by 40%", "Migrated legacy systems to cloud"]
  },
  {
    id: 3,
    company: "Analytics Pro",
    position: "Junior Data Engineer",
    period: "2019 - 2020",
    description: "Started career building data warehouses and creating automated reporting systems for enterprise clients.",
    achievements: ["Automated 20+ manual reports", "Built first production data lake", "Learned cloud technologies"]
  }
];

const WorkTimeline = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-lime-950 to-slate-950 relative overflow-hidden">
      {/* Neon glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(163, 230, 53, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163, 230, 53, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-500/20 border-2 border-lime-400 rounded-full mb-6 shadow-[0_0_30px_rgba(163,230,53,0.5)]">
            <Building className="w-8 h-8 text-lime-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(163,230,53,0.3)]">Work Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey in data engineering and building scalable data solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-400 mx-auto mt-6 shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <div key={job.id} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== workExperience.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-lime-400 to-emerald-400 shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
              )}
              
              <div className="flex items-start gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 backdrop-blur-md bg-lime-500/20 border-2 border-lime-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.4)]">
                  <Calendar className="w-6 h-6 text-lime-400" />
                </div>
                
                {/* Content */}
                <div className="flex-1 backdrop-blur-md bg-slate-900/80 border-2 border-lime-400/50 rounded-2xl p-8 hover:bg-slate-900/90 transition-all duration-300 shadow-[0_0_25px_rgba(163,230,53,0.2)] hover:shadow-[0_0_35px_rgba(163,230,53,0.3)]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_0_5px_rgba(163,230,53,0.3)]">{job.position}</h3>
                      <h4 className="text-xl text-lime-300 font-semibold">{job.company}</h4>
                    </div>
                    <div className="bg-lime-600/20 backdrop-blur-sm border-2 border-lime-400/50 text-lime-300 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0 w-fit shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                      {job.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="text-white font-semibold text-sm uppercase tracking-wide drop-shadow-[0_0_3px_rgba(163,230,53,0.4)]">Key Achievements</h5>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(163,230,53,0.7)]"></div>
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
