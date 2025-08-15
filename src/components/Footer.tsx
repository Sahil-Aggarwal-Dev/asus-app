import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                ASUS
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
                <Twitter size={20} />
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
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Parts Catalog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">+1-234-567-8900</p>
                  <p className="text-sm text-gray-400">Mon-Fri: 8AM-6PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">info@asussparparts.com</p>
                  <p className="text-sm text-gray-400">24/7 Email Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">1234 Industrial Blvd</p>
                  <p className="text-gray-300">Industrial City, IC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 ASUS Spare Parts. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;