
import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { category: 'Programming Languages', items: ['Python', 'SQL', 'Scala', 'Java', 'R'] },
    { category: 'Big Data Technologies', items: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow'] },
    { category: 'Cloud Platforms', items: ['AWS', 'Google Cloud', 'Azure', 'Snowflake'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Cassandra'] },
    { category: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow'] }
  ];

  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Stanford University',
      period: '2017 - 2019',
      location: 'Stanford, CA',
      description: 'Specialized in machine learning, statistical modeling, and big data analytics.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'UC Berkeley',
      period: '2013 - 2017',
      location: 'Berkeley, CA',
      description: 'Focus on algorithms, data structures, and software engineering principles.'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google Cloud Professional Data Engineer', issuer: 'Google Cloud', year: '2022' },
    { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2022' },
    { name: 'Apache Spark Developer Certification', issuer: 'Databricks', year: '2021' }
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95"></div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md bg-white/10 border border-white/20 rounded-full mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Resume</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional background, skills, and educational journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-6"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2">
            {['skills', 'education', 'certifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="bg-white/10 border border-white/10 text-gray-300 px-3 py-2 rounded-lg text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                      <h4 className="text-xl text-purple-300 font-semibold">{edu.institution}</h4>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0">
                      <div className="flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                      <p className="text-purple-300 font-medium mb-2">{cert.issuer}</p>
                      <div className="bg-purple-600/20 backdrop-blur-sm border border-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm w-fit">
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
