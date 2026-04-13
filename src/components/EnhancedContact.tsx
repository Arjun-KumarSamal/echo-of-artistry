import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, Coffee } from 'lucide-react';

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
    <section id="contact" className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-900 via-gray-900 to-black">
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none transform translate-y-1/2 translate-x-1/3"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-2xl shadow-xl shadow-amber-500/20 mb-8 transform hover:scale-105 transition-transform duration-300">
            <Coffee className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-400 mb-6 font-sans">
            Let's Make Something Great
          </h2>
          <p className="text-xl text-amber-100/70 max-w-2xl mx-auto font-light">
            Got a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                <Sparkles className="text-amber-400 w-8 h-8" />
                Get In Touch
              </h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-colors -ml-4">
                  <div className="w-16 h-16 bg-amber-500/10 border border-amber-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                    <Mail className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-amber-100/60 font-medium text-sm tracking-widest uppercase mb-1">Email</div>
                    <div className="text-white text-xl font-semibold">hello@janedoe.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-colors -ml-4">
                  <div className="w-16 h-16 bg-amber-500/10 border border-amber-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                    <Phone className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-amber-100/60 font-medium text-sm tracking-widest uppercase mb-1">Phone</div>
                    <div className="text-white text-xl font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-colors -ml-4">
                  <div className="w-16 h-16 bg-amber-500/10 border border-amber-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                    <MapPin className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-amber-100/60 font-medium text-sm tracking-widest uppercase mb-1">Location</div>
                    <div className="text-white text-xl font-semibold">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-transparent border border-white/10 rounded-[2.5rem] p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Socials</h3>
              <div className="flex gap-4">
                {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble'].map((social) => (
                  <button key={social} className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors duration-300">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-10 lg:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150"></div>
            
            <h3 className="text-3xl font-bold text-white mb-8 relative z-10">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-amber-100/80 font-bold text-sm tracking-wide uppercase ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-amber-100/80 font-bold text-sm tracking-wide uppercase ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                    placeholder="hi@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-amber-100/80 font-bold text-sm tracking-wide uppercase ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-amber-100/80 font-bold text-sm tracking-wide uppercase ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 resize-none transition-all"
                  placeholder="Tell me about your idea..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-lg shadow-amber-500/25 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 mt-4"
              >
                Launch Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;
