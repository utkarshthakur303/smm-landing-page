import React from 'react';
import { UiMockup } from './UiMockup';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#0E1117]">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] mix-blend-screen opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            #1 Rated SMM Service
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Boost Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">Social Media</span> Presence Instantly
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Premium Instagram, YouTube & Facebook growth services with fast delivery and affordable pricing. Join thousands of creators growing today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="https://wa.me/1234567890" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/25 flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="group-hover:scale-110 transition-transform" />
              Connect on WhatsApp
            </a>
            
            <Link 
              to="services" 
              smooth={true} 
              offset={-80} 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              View Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
             <div className="flex items-center gap-2">
               <div className="bg-green-500/20 p-1 rounded-full">
                 <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
               </div>
               Instant Start
             </div>
             <div className="flex items-center gap-2">
               <div className="bg-green-500/20 p-1 rounded-full">
                 <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
               </div>
               No Password
             </div>
             <div className="flex items-center gap-2">
               <div className="bg-green-500/20 p-1 rounded-full">
                 <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
               </div>
               24/7 Support
             </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <UiMockup />
        </div>
      </div>
    </section>
  );
};
