import React from 'react';
import { motion } from 'motion/react';
import { Zap, Tag, Lock, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We process orders instantly with quick start times so you can see results immediately.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10'
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    description: 'Best value SMM services in the market. Get premium quality without breaking the bank.',
    color: 'text-green-400',
    bg: 'bg-green-500/10'
  },
  {
    icon: Lock,
    title: 'Safe & Secure',
    description: 'No password required. Our services are 100% safe and compliant with platform policies.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    icon: LifeBuoy,
    title: '24/7 Support',
    description: 'Our dedicated support team is always available to help you with any questions or issues.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  }
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-[#0E1117] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide the highest quality social media growth services to help you reach your goals faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-[#161B22] border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
