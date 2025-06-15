
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4bfefdbc-ea59-4c1b-bde0-1b7badecdcab.png')`
        }}
      >
        {/* Enhanced dark overlay with more color tint */}
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="absolute inset-0 bg-slate-900/50"></div>
        
        {/* Enhanced black blur gradient on sides with more spanning */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90"></div>
        
        {/* Extended top gradient blend for section transition */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/95 via-black/60 to-transparent"></div>
        
        {/* Extended bottom gradient blend for next section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
        
        {/* Additional color tint gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-slate-900/40 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-black/20 to-slate-900/40"></div>
      </div>

      {/* Grid pattern overlay - reduced opacity to blend with background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl mb-6">
            <Coffee className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build the Future</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to transform your ideas into cutting-edge Web3 solutions? Let's discuss your next blockchain project.
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-slate-300">blockchain@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-slate-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-slate-300">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Solutions?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>5+ years of proven blockchain expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>$50M+ in total value locked across protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Zero security incidents in production</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multi-chain expertise and integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Schedule a Consultation</h3>
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
                    className="w-full px-4 py-3 backdrop-blur-sm bg-slate-700/30 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
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
                    className="w-full px-4 py-3 backdrop-blur-sm bg-slate-700/30 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
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
                  className="w-full px-4 py-3 backdrop-blur-sm bg-slate-700/30 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
                  placeholder="Web3 project consultation"
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
                  className="w-full px-4 py-3 backdrop-blur-sm bg-slate-700/30 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 resize-none"
                  placeholder="Tell me about your blockchain project needs..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 hover:bg-blue-500/20 text-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
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
