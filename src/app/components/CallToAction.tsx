import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-90"></div>
      
      {/* Texture/Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Ready to Grow Your Social Media?
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Join thousands of satisfied customers and start boosting your online presence today. Instant delivery, secure, and affordable.
          </p>
          
          <a
            href="https://wa.me/+916359244514" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-5 rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl hover:shadow-white/20"
          >
            <MessageCircle className="text-green-600 w-6 h-6" />
            Start Chat Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};
