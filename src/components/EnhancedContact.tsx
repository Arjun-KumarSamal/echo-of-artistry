
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Coffee } from 'lucide-react';

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Neon glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 border-2 border-purple-400 rounded-full mb-6 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <Coffee className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your data challenges into innovative solutions? Let's discuss your next project.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-md bg-slate-900/80 border-2 border-purple-400/50 rounded-2xl p-8 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-[0_0_5px_rgba(168,85,247,0.4)]">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-md bg-purple-500/20 border-2 border-purple-400/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">john.doe@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-md bg-purple-500/20 border-2 border-purple-400/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-md bg-purple-500/20 border-2 border-purple-400/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-300">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-slate-900/80 border-2 border-purple-400/50 rounded-2xl p-8 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-[0_0_3px_rgba(168,85,247,0.4)]">Why Work With Me?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.7)]"></div>
                  <span>5+ years of proven expertise in data engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.7)]"></div>
                  <span>Experience with Fortune 500 companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.7)]"></div>
                  <span>End-to-end project management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.7)]"></div>
                  <span>Scalable and maintainable solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-md bg-slate-900/80 border-2 border-purple-400/50 rounded-2xl p-8 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_5px_rgba(168,85,247,0.4)]">Schedule a Consultation</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 backdrop-blur-md bg-purple-500/20 border-2 border-purple-400/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 backdrop-blur-md bg-purple-500/20 border-2 border-purple-400/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 backdrop-blur-md bg-purple-500/20 border-2 border-purple-400/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                  placeholder="Project consultation"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 backdrop-blur-md bg-purple-500/20 border-2 border-purple-400/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 resize-none shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                  placeholder="Tell me about your data engineering needs..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500/80 to-pink-500/80 border-2 border-purple-400/50 hover:border-purple-400/70 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;
