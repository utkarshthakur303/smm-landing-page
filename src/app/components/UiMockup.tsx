import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Eye, ArrowUpRight } from 'lucide-react';

export const UiMockup = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-xl">
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse"></div>
      
      {/* Main Dashboard Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#161B22]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-semibold text-lg">Growth Analytics</h3>
            <p className="text-gray-400 text-xs">Last 30 Days</p>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-4 rounded-xl border border-white/5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
                <Users size={18} />
              </div>
              <span className="text-green-400 text-xs flex items-center font-medium">
                +24% <ArrowUpRight size={12} className="ml-0.5" />
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">12.5k</div>
            <div className="text-gray-400 text-xs">Total Followers</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 p-4 rounded-xl border border-white/5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <Eye size={18} />
              </div>
              <span className="text-green-400 text-xs flex items-center font-medium">
                +42% <ArrowUpRight size={12} className="ml-0.5" />
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">48.2k</div>
            <div className="text-gray-400 text-xs">Total Views</div>
          </motion.div>
        </div>

        {/* Chart Area Mockup */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5 h-32 flex items-end justify-between space-x-2">
           {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
             <motion.div 
               key={i}
               initial={{ height: 0 }}
               animate={{ height: `${h}%` }}
               transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
               className="w-full bg-gradient-to-t from-blue-600 to-purple-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
             ></motion.div>
           ))}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 bg-[#161B22] p-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 z-10"
      >
        <div className="bg-gradient-to-br from-yellow-400 to-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
            <span className="font-bold text-xs">IG</span>
        </div>
        <div>
          <div className="text-white text-sm font-bold">New Order</div>
          <div className="text-gray-400 text-xs">Just now</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 bg-[#161B22] p-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 z-10"
      >
        <div className="bg-green-500/20 p-2 rounded-full text-green-400">
           <TrendingUp size={20} />
        </div>
        <div>
          <div className="text-white text-sm font-bold">Growth Active</div>
          <div className="text-gray-400 text-xs">+150 followers/hr</div>
        </div>
      </motion.div>
    </div>
  );
};
