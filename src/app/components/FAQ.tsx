import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Are your services safe to use?',
    answer: 'Yes, absolutely. We use only safe and compliant methods to deliver our services. We never ask for your password, and your account safety is our top priority.'
  },
  {
    question: 'How fast is the delivery?',
    answer: 'Most orders start instantly or within a few minutes. Completion time depends on the quantity ordered, but we always strive for the fastest possible delivery while maintaining safety.'
  },
  {
    question: 'Do you offer a refill guarantee?',
    answer: 'Yes! Many of our services come with a refill guarantee (e.g., 30 days or Lifetime). Check the service description for specific details on refill policies.'
  },
  {
    question: 'How do I place an order?',
    answer: 'It\'s simple! Browse our services table, choose the package you want, and click the "Order" button. This will open a WhatsApp chat where you can send us the details and we\'ll handle the rest.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including Credit/Debit cards, Crypto, and more. Discuss with our support team on WhatsApp for the most convenient option for you.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0E1117] relative">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-6">
            <HelpCircle className="text-purple-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#161B22] border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-blue-400' : 'text-white'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-400' : 'group-hover:text-white'}`} 
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
