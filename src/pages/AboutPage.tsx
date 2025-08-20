import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Target, Heart, Zap } from 'lucide-react';
import TeamScroller from '../components/TeamScroller';
import { team } from '../data/team';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Users size={32} />, number: '500+', label: 'Happy Clients', description: 'Trusted by contractors, dealers, and machine owners worldwide.' },
    { icon: <Award size={32} />, number: '15+', label: 'Years of Expertise', description: 'Decades of experience powering heavy machinery operations.' },
    { icon: <CheckCircle size={32} />, number: '2500+', label: 'Parts in Stock', description: 'Comprehensive inventory to keep your machines running.' },
    { icon: <Clock size={32} />, number: '24/7', label: 'Support', description: 'Always ready to assist, anytime, anywhere.' }
  ];

  const values = [
    { icon: <Shield size={32} />, title: 'Premium Quality', description: 'Every part is precision-engineered to meet global OEM standards.' },
    { icon: <Heart size={32} />, title: 'Customer First', description: 'Your success is our top priority, and we ensure it with unmatched service.' },
    { icon: <Zap size={32} />, title: 'Innovative Solutions', description: 'We constantly improve and expand to meet modern industry demands.' },
    { icon: <Target size={32} />, title: 'Dependable Reliability', description: 'Parts you can trust to keep your machines performing at peak efficiency.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 sm:w-96 lg:w-[500px] h-64 sm:h-96 lg:h-[500px] bg-orange-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-72 sm:w-96 lg:w-[550px] h-72 sm:h-96 lg:h-[550px] bg-pink-600 opacity-15 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">Power. Precision. Performance.</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
            Welcome to <span className="font-semibold">Parnyab Enterprises Pvt Ltd</span>, home of <span className="font-semibold">ASUS</span> — delivering high-performance spare parts for backhoe loaders and heavy machinery.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
            We don’t just provide parts; we offer <span className="font-semibold">precision, reliability, and enduring performance</span> that keeps your machines unstoppable.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 opacity-20 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
              <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">{stat.label}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Started under <span className="font-semibold">Parnyab Enterprises Pvt Ltd</span>, ASUS embarked on a mission to <span className="font-semibold">deliver high-quality spare parts exceeding industry standards</span>. Today, we are trusted by hundreds of contractors, dealers, and operators worldwide.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Powered by <span className="font-semibold">passion, precision, and innovation</span>, every product reflects <span className="font-semibold">durability, perfect fitment, and unmatched value</span>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-600" /> ISO 9001:2015 Certified Quality</li>
              <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-600" /> Authorized dealer for leading OEM brands</li>
              <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-600" /> Global logistics & support network</li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative w-full">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="ASUS warehouse facility"
              className="w-full h-96 object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-orange-600 text-white px-4 py-2 rounded-xl shadow-lg text-center font-semibold">
              Years of Excellence
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-gradient-to-tr from-orange-50 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Principles that drive innovation, excellence, and lasting relationships with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                <div className="text-orange-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-700 text-white overflow-hidden">
        {/* Decorative Dot Grid */}
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] opacity-10 -z-10"></div>
        {/* Floating Shapes */}
        <div className="absolute -top-24 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500 opacity-20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Meet the ASUS Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              A powerhouse of innovators, problem-solvers, and passionate professionals — each member is dedicated to <span className="font-semibold">driving excellence, precision, and unmatched performance</span> in every project.
            </p>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/90 mt-4 leading-relaxed">
              Together, we fuel the <span className="font-semibold">Power. Precision. Performance.</span> that defines <span className="font-semibold">ASUS by Parnyab Enterprises Pvt Ltd</span>.
            </p>
          </div>
          <TeamScroller team={team} />
        </div>
      </section>


      {/* Mission Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-600 to-orange-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8">Our Mission</h2>
          <p className="text-xl sm:text-2xl md:text-3xl italic leading-relaxed max-w-3xl mx-auto mb-12">
            "To <span className="font-bold underline decoration-white/50">redefine heavy machinery support</span> with <span className="font-bold">high-quality spare parts</span>, <span className="font-bold">innovative solutions</span>, and <span className="font-bold">world-class service</span> that empowers businesses globally."
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-2xl mx-auto shadow-lg hover:shadow-2xl transition-all">
            <p className="text-orange-100 text-lg sm:text-xl leading-relaxed">
              At <span className="font-semibold">ASUS by Parnyab Enterprises Pvt Ltd</span>, we deliver <span className="font-semibold">reliability, precision, and performance</span> that keep your machines at their peak. Our mission is to empower operators, maximize uptime, and drive <span className="font-semibold">global business success</span>.
            </p>
          </div>
          <div className="mt-12">
            <Zap className="mx-auto text-white opacity-80" size={48} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
