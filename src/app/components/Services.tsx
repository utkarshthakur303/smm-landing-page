import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ExternalLink, Zap } from 'lucide-react';

const services = [
  { id: 944, name: 'Instagram comments - [ Random] - Instant', price: 29, min: 100, max: 1000, hot: true },
  { id: 940, name: 'Instagram likes - Superfast', price: 29, min: 500, max: 100000, hot: false },
  { id: 927, name: 'Instagram Views Cheapest [ All Videos ] - Trending 🔥', price: 29, min: 10000, max: 10000000, hot: true },
  { id: 928, name: 'Instagram comments - [Custom] - Instant', price: 499, min: 100, max: 1000, hot: false },
  { id: 930, name: 'Instagram Reposts Cheapest [ All Videos ] - Trending 🔥', price: 149, min: 1000, max: 10000, hot: true },
  { id: 951, name: 'Instagram Shares Cheapest - Instant', price: 149, min: 1000, max: 5000, hot: false },
  { id: 952, name: 'Canva Premium 1 Year', price: 199, min: 1, max: 10, hot: false },
  { id: 953, name: 'Amazon Prime Premium', price: 249, min: 1, max: 10, hot: false },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0E1117] relative">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-500/20">
            <Zap size={14} /> Premium Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Best Selling Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our range of high-quality services to boost your social media presence instantly.
          </p>
        </div>

        <div className="bg-[#161B22] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
          {/* Highlight Header */}
          <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 py-3 px-6 text-center">
            <h3 className="text-white font-bold text-lg flex items-center justify-center gap-2">
              🔥 Hot Selling Services 🔥
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">ID</th>
                  <th className="px-6 py-4 font-semibold">Service Name</th>
                  <th className="px-6 py-4 font-semibold text-right">Price / 1k</th>
                  <th className="px-6 py-4 font-semibold text-center">Min / Max</th>
                  <th className="px-6 py-4 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {services.map((service) => (
                  <motion.tr 
                    key={service.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-6 py-4 text-gray-500 font-mono text-sm">{service.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-200 font-medium text-sm md:text-base group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </span>
                        {service.hot && (
                          <span className="bg-red-500/20 text-red-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase border border-red-500/20">
                            Hot
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="font-bold text-white">{service.price.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex gap-2 text-xs font-mono">
                        <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20 min-w-[50px]">
                          {service.min}
                        </span>
                        <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20 min-w-[60px]">
                          {service.max >= 1000000 ? '1M+' : service.max.toLocaleString()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a 
                        href={`https://wa.me/+916359244514?text=I want to order service ID ${service.id}: ${service.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-green-600/20 hover:text-green-400 hover:border-green-500/50 text-gray-300 px-4 py-2 rounded-lg text-xs font-semibold border border-white/10 transition-all duration-300"
                      >
                        <MessageCircle size={14} />
                        Order
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      
      </div>
    </section>
  );
};
