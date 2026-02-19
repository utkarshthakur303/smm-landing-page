import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CountdownTimerProps {
  variant: 'compact' | 'full';
  targetDate?: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  variant, 
  targetDate 
}) => {
  // Default to 2 hours from now if no target date provided
  const getDefaultTargetDate = () => {
    const date = new Date();
    date.setHours(date.getHours() + 2);
    return date;
  };

  const [target, setTarget] = useState<Date>(targetDate || getDefaultTargetDate());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLessThan24Hours, setIsLessThan24Hours] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetTime = target.getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        // Countdown ended, restart with new 2-hour target
        const newTarget = new Date();
        newTarget.setHours(newTarget.getHours() + 2);
        setTarget(newTarget);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const totalHours = days * 24 + hours;
      setIsLessThan24Hours(totalHours < 24);

      return { days, hours, minutes, seconds };
    };

    // Calculate immediately
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.3)]">
        <div className="flex items-center gap-1 md:gap-1.5">
          {/* Desktop (lg+): Show DD:HH:MM:SS */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-sm leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-white/60 text-[8px] uppercase tracking-wider leading-none mt-0.5">D</span>
            </div>
            <span className="text-white/40 text-xs mx-0.5">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-sm leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-white/60 text-[8px] uppercase tracking-wider leading-none mt-0.5">H</span>
            </div>
            <span className="text-white/40 text-xs mx-0.5">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-sm leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-white/60 text-[8px] uppercase tracking-wider leading-none mt-0.5">M</span>
            </div>
            <span className="text-white/40 text-xs mx-0.5">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-sm leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-white/60 text-[8px] uppercase tracking-wider leading-none mt-0.5">S</span>
            </div>
          </div>
          {/* Mobile/Tablet: Show HH:MM:SS */}
          <div className="flex lg:hidden items-center gap-0.5 md:gap-1">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-xs md:text-sm leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-white/60 text-[7px] md:text-[8px] uppercase tracking-wider leading-none mt-0.5">H</span>
            </div>
            <span className="text-white/40 text-[10px] md:text-xs mx-0.5">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-xs md:text-sm leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-white/60 text-[7px] md:text-[8px] uppercase tracking-wider leading-none mt-0.5">M</span>
            </div>
            <span className="text-white/40 text-[10px] md:text-xs mx-0.5">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-xs md:text-sm leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-white/60 text-[7px] md:text-[8px] uppercase tracking-wider leading-none mt-0.5">S</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <section className="py-16 bg-gradient-to-b from-[#0f172a] to-[#0b1120] relative overflow-hidden">
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 animate-pulse opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-500/30"
          >
            🔥 Limited Time Offer
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
          >
            Offer Ends In
          </motion.h2>

          {/* Countdown Blocks */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex items-center justify-center gap-3 md:gap-4 mb-6 ${isLessThan24Hours ? 'animate-pulse' : ''}`}
          >
            {/* Days */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`days-${timeLeft.days}`}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 md:px-6 py-4 md:py-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider mt-2">Days</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="text-purple-400 text-2xl md:text-3xl font-bold">/</div>

            {/* Hours */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`hours-${timeLeft.hours}`}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 md:px-6 py-4 md:py-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider mt-2">Hours</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="text-purple-400 text-2xl md:text-3xl font-bold">/</div>

            {/* Minutes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`minutes-${timeLeft.minutes}`}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 md:px-6 py-4 md:py-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider mt-2">Minutes</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="text-purple-400 text-2xl md:text-3xl font-bold">/</div>

            {/* Seconds */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`seconds-${timeLeft.seconds}`}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 md:px-6 py-4 md:py-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider mt-2">Seconds</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base"
          >
            Don't miss out on our exclusive offer. Act now before time runs out!
          </motion.p>
        </div>
      </div>
    </section>
  );
};
