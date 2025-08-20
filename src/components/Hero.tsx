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

      <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-8 py-6 sm:py-8 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Premium <span className="text-orange-500">Backhoe Loader</span><br />
                Spare Parts
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Your trusted partner for high-quality spare parts. We specialize in lights & electricals,
                hydraulic seal kits, and gear parts for heavy machinery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                <span>View Products</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-center">
                Contact Us
              </Link>
            </div>
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {/* Feature 1 - Premium Quality */}
              <div className="flex flex-col items-center text-center 
                  bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-500/80 
                  p-6 rounded-2xl shadow-2xl hover:scale-105 transform transition-transform duration-300 h-full
                  relative overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Ccircle cx=10 cy=10 r=1 fill=white/%3E%3C/svg%3E')] pointer-events-none rounded-2xl"></div>

                <Shield className="text-amber-300 mb-3 relative z-10" size={36} />
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 relative z-10">Premium Quality</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2 relative z-10">
                  All parts rigorously tested for maximum reliability and durability.
                </p>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full relative z-10">Trusted</span>
              </div>

              {/* Feature 2 - Professional Support */}
              <div className="flex flex-col items-center text-center 
                  bg-gradient-to-tr from-slate-700 via-slate-650 to-slate-600/80 
                  p-6 rounded-2xl shadow-2xl hover:scale-105 transform transition-transform duration-300 h-full
                  relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Cpath d=M0 0 L20 20 stroke=white stroke-opacity=0.05/%3E%3C/svg%3E')] pointer-events-none rounded-2xl"></div>

                <Wrench className="text-cyan-300 mb-3 relative z-10" size={36} />
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 relative z-10">Professional Support</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2 relative z-10">
                  Expert guidance to help you choose the right parts for your machines.
                </p>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full relative z-10">24/7 Help</span>
              </div>

              {/* Feature 3 - Quick Delivery */}
              <div className="flex flex-col items-center text-center 
                  bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-550/80 
                  p-6 rounded-2xl shadow-2xl hover:scale-105 transform transition-transform duration-300 h-full
                  relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Cline x1=0 y1=0 x2=20 y2=20 stroke=white stroke-opacity=0.05/%3E%3Cline x1=20 y1=0 x2=0 y2=20 stroke=white stroke-opacity=0.05/%3E%3C/svg%3E')] pointer-events-none rounded-2xl"></div>

                <Clock className="text-emerald-300 mb-3 relative z-10" size={36} />
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 relative z-10">Quick Delivery</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2 relative z-10">
                  Timely and secure shipping to keep your operations running smoothly.
                </p>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full relative z-10">Reliable</span>
              </div>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-3xl"> {/* Increased max widths */}
              {/* Image container */}
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-orange-500/20">
                <img
                  decoding="async"
                  src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/jcb-spare-parts-distributor.webp"
                  alt="Backhoe Loader"
                  className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover rounded-2xl"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 bg-orange-600 text-white p-2 sm:p-3 rounded-xl shadow-lg text-center">
                <div className="text-base sm:text-xl font-bold">500+</div>
                <div className="text-xs sm:text-sm">Parts Available</div>
              </div>

              <div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 bg-white text-slate-900 p-2 sm:p-3 rounded-xl shadow-lg text-center">
                <div className="text-base sm:text-xl font-bold">24/7</div>
                <div className="text-xs sm:text-sm">Support</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
