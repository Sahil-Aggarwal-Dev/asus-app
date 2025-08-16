import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Premium
                <span className="text-orange-500"> Backhoe Loader</span>
                <br />
                Spare Parts
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your trusted partner for high-quality spare parts. We specialize in lights & electricals,
                hydraulic seal kits, and gear parts for heavy machinery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                <span>View Products</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="text-orange-500 flex-shrink-0" size={24} />
                <span className="text-gray-300">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="text-orange-500 flex-shrink-0" size={24} />
                <span className="text-gray-300">Expert Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-orange-500 flex-shrink-0" size={24} />
                <span className="text-gray-300">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl p-8 backdrop-blur-sm border border-orange-500/20">
              <img
                decoding="async"
                 src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/jcb-spare-parts-distributor.webp"
                alt="Backhoe Loader"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Parts Available</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;