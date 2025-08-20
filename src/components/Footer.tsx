import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, X, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                decoding="async"
                src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/Asus_logo_1.png"
                alt="ASUS Logo"
                className="h-20 w-auto object-contain mx-auto md:mx-0"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col space-y-2">
              <div className="font-extrabold text-white text-2xl">ASUS Spare Parts</div>
              <div className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Heavy Machinery Solutions
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Powering your machines with <span className="text-orange-500 font-semibold">premium spare parts</span> for
                unmatched <span className="font-semibold">performance</span> and <span className="font-semibold">reliability</span>.
                We specialize in <span className="text-orange-500 font-semibold">backhoe loader components</span> built to last.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start mt-4 space-x-3">
              <a href="#" className="bg-slate-800 hover:bg-orange-600 p-3 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-orange-600 p-3 rounded-lg transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-orange-600 p-3 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-orange-600 p-3 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <Phone className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">+91 82986-59245</p>
                  <p className="text-gray-300">+91 87501-08980</p>
                  <p className="text-sm text-gray-400">Mon-Sun: 9AM-7PM IST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <Mail className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">info@asussparparts.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 justify-center md:justify-start">
                <MapPin className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">Parnyab Enterprises Pvt. Ltd.</p>
                  <p className="text-gray-300">834/35, West Rajiv Nagar, Sector-12</p>
                  <p className="text-gray-300">Gurugram, Haryana-122001, INDIA</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 ASUS Spare Parts. All rights reserved.
            </div>

            {/* Designer Credit */}
            <a
              href="https://www.linkedin.com/in/sahil-aggarwal-446739217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              <span>Designed & Developed by Sahil Aggarwal</span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
