
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import WorkTimeline from '@/components/WorkTimeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WeatherWidget from '@/components/WeatherWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeatherWidget />
      <Hero />
      <About />
      <WorkTimeline />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
