import React from 'react';
import { Link } from 'react-scroll';
import { Twitter, Instagram, Facebook, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0E1117] border-t border-white/5 py-16 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">SMMBoost</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            We are the leading provider of high-quality social media marketing services. Boost your presence on Instagram, YouTube, and Facebook instantly.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link to="hero" smooth={true} offset={-80} className="hover:text-blue-400 cursor-pointer transition-colors">Home</Link>
            </li>
            <li>
              <Link to="services" smooth={true} offset={-80} className="hover:text-blue-400 cursor-pointer transition-colors">Services</Link>
            </li>
            <li>
              <Link to="why-us" smooth={true} offset={-80} className="hover:text-blue-400 cursor-pointer transition-colors">Why Us</Link>
            </li>
            <li>
              <Link to="testimonials" smooth={true} offset={-80} className="hover:text-blue-400 cursor-pointer transition-colors">Testimonials</Link>
            </li>
            <li>
              <Link to="faq" smooth={true} offset={-80} className="hover:text-blue-400 cursor-pointer transition-colors">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MessageCircle size={18} className="text-green-500 mt-0.5" />
              <span>WhatsApp Support<br />Mon-Sun: 24/7</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <span>support@smmboost.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-purple-500 mt-0.5" />
              <span>123 Digital Avenue,<br />Tech City, NY 10001</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
           <h4 className="text-white font-bold mb-6">Legal</h4>
           <ul className="space-y-4 text-sm text-gray-400">
             <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
           </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} SMMBoost. All rights reserved.</p>
      </div>
    </footer>
  );
};
