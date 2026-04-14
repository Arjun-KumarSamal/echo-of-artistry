
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
    <div className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-black">
      <div className="snap-start"><Hero /></div>
      <div className="snap-start"><About /></div>
      <div className="snap-start"><WorkTimeline /></div>
      <div className="snap-start"><Resume /></div>
      <div className="snap-start"><Portfolio /></div>
      <div className="snap-start"><EnhancedContact /></div>
      <div className="snap-start"><Footer /></div>
    </div>
  );
};

export default Index;
