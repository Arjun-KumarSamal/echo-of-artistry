
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-blue-900/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Building className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My journey in data engineering and building scalable data solutions
          </p>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <div key={job.id} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== workExperience.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-white/20"></div>
              )}
              
              <div className="flex items-start gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{job.position}</h3>
                      <h4 className="text-xl text-white/80 font-semibold">{job.company}</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0 w-fit">
                      {job.period}
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="text-white font-semibold text-sm uppercase tracking-wide">Key Achievements</h5>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/70">
                          <div className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
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
