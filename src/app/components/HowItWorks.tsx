import React from 'react';
import { motion } from 'motion/react';
import { MousePointerClick, Send, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Choose Your Service',
    description: 'Browse our wide range of social media services and pick the one that fits your needs.',
    step: '01'
  },
  {
    icon: Send,
    title: 'Send Details',
    description: 'Click the WhatsApp button to send your order details directly to our support team.',
    step: '02'
  },
  {
    icon: TrendingUp,
    title: 'Watch Growth',
    description: 'Sit back and relax while we process your order and boost your social media presence.',
    step: '03'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#0E1117] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started in 3 simple steps. No complicated sign-ups or dashboards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-[#161B22] border-4 border-[#0E1117] rounded-full flex items-center justify-center mb-6 relative z-10 shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <Icon className="text-blue-400 w-10 h-10 relative z-20 group-hover:scale-110 transition-transform duration-300" />
                
                <div className="absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#0E1117]">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm px-4">
                {step.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
