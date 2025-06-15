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
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Top blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent"></div>
      
      {/* Orange to purple gradient overlay with better blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 via-red-700/70 to-purple-900/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Data Engineering Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of scalable data solutions, ML pipelines, and analytics platforms I've built.
          </p>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl h-80 transform hover:-translate-y-2 transition-all duration-500 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20"
            >
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                {/* Top section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-white/60 text-xs font-medium uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      project.status === 'Active' 
                        ? 'bg-green-500/20 border-green-400/50 text-green-400'
                        : project.status === 'Completed'
                        ? 'bg-blue-500/20 border-blue-400/50 text-blue-400'
                        : 'bg-yellow-500/20 border-yellow-400/50 text-yellow-400'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
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
                        className="bg-white/10 border border-white/20 text-white/80 px-2 py-1 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and actions */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {project.price}
                    </div>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Github className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* View Details button */}
                  <button className="w-full bg-white/10 border border-white/20 text-white py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects on GitHub
          </button>
        </div>
      </div>

      {/* Bottom blend for next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </section>
  );
};

export default Portfolio;
