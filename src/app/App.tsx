import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0E1117] min-h-screen text-white font-inter selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <WhyUs />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}
