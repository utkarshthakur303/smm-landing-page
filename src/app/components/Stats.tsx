import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Eye, ShoppingCart, Headset, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

const StatCard = ({ icon: Icon, value, label, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/,/g, ''));
      const duration = 2000;
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6 bg-[#161B22]/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-white/10 transition-colors"
    >
      <div className="mb-4 p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-500/5">
        <Icon className="text-blue-400" size={32} />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

export const Stats = () => {
  return (
    <section className="py-20 bg-[#0E1117] border-y border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-pink-900/5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Eye} value="10000000" suffix="+" label="Views Delivered" />
          <StatCard icon={ShoppingCart} value="50000" suffix="+" label="Orders Completed" />
          <StatCard icon={Headset} value="24" suffix="/7" label="Customer Support" />
          <StatCard icon={ShieldCheck} value="100" suffix="%" label="Secure Service" />
        </div>
      </div>
    </section>
  );
};
