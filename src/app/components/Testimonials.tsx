import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'London, UK',
    role: 'Fashion Influencer',
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTAzNjQyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: "I was skeptical at first, but the results speak for themselves. My engagement rate has tripled since using their services. Highly recommended for any serious creator!",
    rating: 5
  },
  {
    name: 'David Chen',
    location: 'Toronto, Canada',
    role: 'Digital Marketer',
    image: 'https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEwOTI4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: "The delivery speed is insane. I placed an order for YouTube views and they started coming in within minutes. Best SMM panel I've used in years.",
    rating: 5
  },
  {
    name: 'Marcus Johnson',
    location: 'New York, USA',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1632765891235-d2b594870a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZmx1ZW5jZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzExNjM2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: "Finally a service that doesn't drop! The followers are high quality and actually stick. Customer support helped me choose the right package for my needs.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0E1117] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Read reviews from thousands of satisfied customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#161B22] border border-white/5 rounded-2xl p-8 relative hover:border-blue-500/20 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-10 h-10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
                  <ImageWithFallback 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
