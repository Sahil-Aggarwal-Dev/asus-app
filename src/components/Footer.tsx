import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, X, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-6 py-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="Logo">
                <img
                  decoding="async"
                  src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/Asus_logo_1.png"
                  alt="Backhoe Loader"
                  className="h-16 w-auto mx-auto object-contain"
                />
              </div>
              <div className="ml-3">
                <div className="font-bold text-white text-lg">SPARE PARTS</div>
                <div className="text-orange-500 text-sm font-medium">Heavy Machinery Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your trusted partner for premium quality spare parts for heavy machinery.
              We specialize in backhoe loader parts with a commitment to excellence and reliability.
            </p>
            <div className="flex space-x-4">
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
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">+91 8298659245</p>
                  <p className="text-gray-300">+91 8298659245</p>
                  <p className="text-sm text-gray-400">Mon-Sun: 9AM-7PM IST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">info@asussparparts.com</p>
                  {/* <p className="text-sm text-gray-400">24/7 Email Support</p> */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">Parnyab Enterprises Pvt. Ltd.</p>
                  <p className="text-gray-300">834/35, West rajiv nagar, Sector-12</p>
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
              href="https://www.linkedin.com/in/sahil-aggarwal-446739217/" // YOUR unique public URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              <span>Designed & Developed by Sahil Aggarwal</span>
            </a>

            {/* Optional Links */}
            {/* 
      <div className="flex space-x-6 text-sm text-gray-400 mt-2 sm:mt-0">
        <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Warranty</a>
      </div> 
      */}

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;