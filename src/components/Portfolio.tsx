import React from 'react';
import { Database, BarChart3, Cloud, Cpu, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Swiss Alps Data Center",
    subtitle: "Real-time Analytics Platform",
    description: "Built a streaming analytics platform processing 10TB+ daily data using Kafka, Spark, and Redis for real-time insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Apache Kafka", "Spark Streaming", "Redis", "Python"],
    category: "Big Data",
    icon: <BarChart3 className="w-6 h-6" />,
    price: "$750K",
    duration: "Luxury Stay",
    period: "2 Day stay"
  },
  {
    id: 2,
    title: "Iceland ML Hub",
    subtitle: "ML Pipeline Automation", 
    description: "Automated end-to-end machine learning pipeline with model training, validation, and deployment on AWS SageMaker.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    tags: ["MLOps", "AWS SageMaker", "Docker", "Kubernetes"],
    category: "Machine Learning",
    icon: <Cpu className="w-6 h-6" />,
    price: "$1.2M",
    duration: "Top Rated",
    period: "6 Day stay"
  },
  {
    id: 3,
    title: "Tokyo Cloud Suite",
    subtitle: "Data Lake Architecture",
    description: "Designed and implemented a scalable data lake on AWS S3 with automated ETL pipelines using Apache Airflow.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    tags: ["AWS S3", "Apache Airflow", "ETL", "Data Modeling"],
    category: "Cloud Infrastructure", 
    icon: <Cloud className="w-6 h-6" />,
    price: "$890K",
    duration: "Cityscape View",
    period: "Weekend Stay"
  },
  {
    id: 4,
    title: "Nordic Analytics",
    subtitle: "Customer Analytics Dashboard",
    description: "Built interactive analytics dashboard using React and D3.js, connected to real-time data warehouse for business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "PostgreSQL", "FastAPI"],
    category: "Data Visualization",
    icon: <BarChart3 className="w-6 h-6" />,
    price: "$450K",
    duration: "Real-time",
    period: "Live Data"
  },
  {
    id: 5,
    title: "Mountain Processing",
    subtitle: "Distributed Data Processing",
    description: "Optimized data processing workflows using Apache Spark on EMR, reducing processing time by 70% and costs by 40%.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    tags: ["Apache Spark", "AWS EMR", "Scala", "Performance Optimization"],
    category: "Performance Engineering",
    icon: <Database className="w-6 h-6" />,
    price: "$680K",
    duration: "High Performance",
    period: "70% Faster"
  },
  {
    id: 6,
    title: "Desert IoT Station",
    subtitle: "IoT Data Pipeline",
    description: "Developed IoT data ingestion pipeline handling millions of sensor events per second with Apache Pulsar and ClickHouse.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["IoT", "Apache Pulsar", "ClickHouse", "Time Series"],
    category: "IoT & Sensors",
    icon: <Cpu className="w-6 h-6" />,
    price: "$950K",
    duration: "Ultra Scale",
    period: "Million Events/sec"
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
        {/* Header section */}
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
              className="group relative overflow-hidden rounded-3xl h-80 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Background image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient overlay that fades from bottom to transparent at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 via-30% to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top section with badges */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 text-white text-xs font-medium">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-white text-lg font-bold backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
                    {project.price}
                  </div>
                </div>

                {/* Bottom section with content */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md">
                      {project.description.split('.')[0]}.
                    </p>
                  </div>

                  {/* Duration and period tags */}
                  <div className="flex justify-between items-center text-white text-xs">
                    <span className="font-medium drop-shadow-md">{project.duration}</span>
                    <span className="opacity-90 drop-shadow-md">{project.period}</span>
                  </div>

                  {/* Reserve button */}
                  <button className="w-full bg-white text-black py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                    Reserve
                  </button>
                </div>
              </div>

              {/* Hover overlay with additional info */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 px-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
