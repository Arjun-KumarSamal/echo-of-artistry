
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import WorkTimeline from '@/components/WorkTimeline';
import Resume from '@/components/Resume';
import EnhancedContact from '@/components/EnhancedContact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WorkTimeline />
      <Resume />
      <Portfolio />
      <EnhancedContact />
      <Footer />
    </div>
  );
};

export default Index;
