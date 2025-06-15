
import React from 'react';
import { Database, BarChart3, Cloud, Cpu, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Real-time Analytics Platform",
    description: "Built a streaming analytics platform processing 10TB+ daily data using Kafka, Spark, and Redis for real-time insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Apache Kafka", "Spark Streaming", "Redis", "Python"],
    category: "Big Data",
    icon: <BarChart3 className="w-6 h-6" />,
    price: "$750K",
    metrics: "10TB+ Daily"
  },
  {
    id: 2,
    title: "ML Pipeline Automation",
    description: "Automated end-to-end machine learning pipeline with model training, validation, and deployment on AWS SageMaker.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    tags: ["MLOps", "AWS SageMaker", "Docker", "Kubernetes"],
    category: "Machine Learning",
    icon: <Cpu className="w-6 h-6" />,
    price: "$1.2M",
    metrics: "50+ Models"
  },
  {
    id: 3,
    title: "Data Lake Architecture",
    description: "Designed and implemented a scalable data lake on AWS S3 with automated ETL pipelines using Apache Airflow.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    tags: ["AWS S3", "Apache Airflow", "ETL", "Data Modeling"],
    category: "Cloud Infrastructure",
    icon: <Cloud className="w-6 h-6" />,
    price: "$890K",
    metrics: "99.9% Uptime"
  },
  {
    id: 4,
    title: "Customer Analytics Dashboard",
    description: "Built interactive analytics dashboard using React and D3.js, connected to real-time data warehouse for business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "PostgreSQL", "FastAPI"],
    category: "Data Visualization",
    icon: <BarChart3 className="w-6 h-6" />,
    price: "$450K",
    metrics: "Real-time Insights"
  },
  {
    id: 5,
    title: "Distributed Data Processing",
    description: "Optimized data processing workflows using Apache Spark on EMR, reducing processing time by 70% and costs by 40%.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    tags: ["Apache Spark", "AWS EMR", "Scala", "Performance Optimization"],
    category: "Performance Engineering",
    icon: <Database className="w-6 h-6" />,
    price: "$680K",
    metrics: "70% Faster"
  },
  {
    id: 6,
    title: "IoT Data Pipeline",
    description: "Developed IoT data ingestion pipeline handling millions of sensor events per second with Apache Pulsar and ClickHouse.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["IoT", "Apache Pulsar", "ClickHouse", "Time Series"],
    category: "IoT & Sensors",
    icon: <Cpu className="w-6 h-6" />,
    price: "$950K",
    metrics: "Million Events/sec"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95"></div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md bg-white/10 border border-white/20 rounded-full mb-6">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Data Engineering Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of scalable data solutions, ML pipelines, and analytics platforms I've built.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 backdrop-blur-sm bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                  {project.icon}
                  {project.category}
                </div>

                {/* Metrics badge */}
                <div className="absolute top-4 right-4 backdrop-blur-sm bg-purple-600/80 border border-purple-400/30 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.metrics}
                </div>

                {/* Action buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 backdrop-blur-sm bg-white/20 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 backdrop-blur-sm bg-white/20 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-purple-300 font-bold text-sm">{project.price}</div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="backdrop-blur-sm bg-white/10 border border-white/20 text-gray-300 px-2 py-1 rounded-lg text-xs font-medium hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-purple-300 text-xs font-medium px-2 py-1">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
