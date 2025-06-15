
import React from 'react';
import { Database, BarChart3, Cloud, Cpu, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Swiss Alps Data Center",
    subtitle: "Real-time Analytics Platform",
    description: "Built a streaming analytics platform processing 10TB+ daily data using Kafka, Spark, and Redis for real-time insights.",
    tags: ["Apache Kafka", "Spark Streaming", "Redis", "Python"],
    category: "Big Data",
    icon: <BarChart3 className="w-6 h-6" />,
    price: "$750K",
    status: "Active"
  },
  {
    id: 2,
    title: "Iceland ML Hub",
    subtitle: "ML Pipeline Automation", 
    description: "Automated end-to-end machine learning pipeline with model training, validation, and deployment on AWS SageMaker.",
    tags: ["MLOps", "AWS SageMaker", "Docker", "Kubernetes"],
    category: "Machine Learning",
    icon: <Cpu className="w-6 h-6" />,
    price: "$1.2M",
    status: "Completed"
  },
  {
    id: 3,
    title: "Tokyo Cloud Suite",
    subtitle: "Data Lake Architecture",
    description: "Designed and implemented a scalable data lake on AWS S3 with automated ETL pipelines using Apache Airflow.",
    tags: ["AWS S3", "Apache Airflow", "ETL", "Data Modeling"],
    category: "Cloud Infrastructure", 
    icon: <Cloud className="w-6 h-6" />,
    price: "$890K",
    status: "In Progress"
  },
  {
    id: 4,
    title: "Nordic Analytics",
    subtitle: "Customer Analytics Dashboard",
    description: "Built interactive analytics dashboard using React and D3.js, connected to real-time data warehouse for business insights.",
    tags: ["React", "D3.js", "PostgreSQL", "FastAPI"],
    category: "Data Visualization",
    icon: <BarChart3 className="w-6 h-6" />,
    price: "$450K",
    status: "Active"
  },
  {
    id: 5,
    title: "Mountain Processing",
    subtitle: "Distributed Data Processing",
    description: "Optimized data processing workflows using Apache Spark on EMR, reducing processing time by 70% and costs by 40%.",
    tags: ["Apache Spark", "AWS EMR", "Scala", "Performance Optimization"],
    category: "Performance Engineering",
    icon: <Database className="w-6 h-6" />,
    price: "$680K",
    status: "Completed"
  },
  {
    id: 6,
    title: "Desert IoT Station",
    subtitle: "IoT Data Pipeline",
    description: "Developed IoT data ingestion pipeline handling millions of sensor events per second with Apache Pulsar and ClickHouse.",
    tags: ["IoT", "Apache Pulsar", "ClickHouse", "Time Series"],
    category: "IoT & Sensors",
    icon: <Cpu className="w-6 h-6" />,
    price: "$950K",
    status: "In Progress"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 relative overflow-hidden">
      {/* Neon glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-lime-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400 rounded-full mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
            <Database className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
            My Data Engineering Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of scalable data solutions, ML pipelines, and analytics platforms I've built.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-6 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl h-80 transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]"
            >
              {/* Neon border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                {/* Top section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-400/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-emerald-400 text-xs font-medium uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      project.status === 'Active' 
                        ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]'
                        : project.status === 'Completed'
                        ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                        : 'bg-yellow-500/20 border-yellow-400/50 text-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.3)]'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  <h3 className="text-white text-xl font-bold mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom section */}
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-slate-800/80 border border-emerald-500/30 text-emerald-300 px-2 py-1 rounded-lg text-xs font-medium shadow-[0_0_5px_rgba(34,197,94,0.2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and actions */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                      {project.price}
                    </div>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-emerald-500/20 border border-emerald-400/50 rounded-lg flex items-center justify-center hover:bg-emerald-500/30 transition-colors shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                        <Github className="w-4 h-4 text-emerald-400" />
                      </button>
                      <button className="w-10 h-10 bg-emerald-500/20 border border-emerald-400/50 rounded-lg flex items-center justify-center hover:bg-emerald-500/30 transition-colors shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                        <ExternalLink className="w-4 h-4 text-emerald-400" />
                      </button>
                    </div>
                  </div>

                  {/* View Details button */}
                  <button className="w-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/50 text-emerald-400 py-3 rounded-lg font-semibold text-sm hover:from-emerald-500/30 hover:to-cyan-500/30 hover:border-emerald-400/70 transition-all duration-200 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                    View Details
                  </button>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-lime-400 opacity-20 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/50 hover:border-emerald-400/70 text-emerald-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
