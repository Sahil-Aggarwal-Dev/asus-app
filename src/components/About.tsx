import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={24} />, number: '500+', label: 'Happy Customers' },
    { icon: <Award size={24} />, number: '15+', label: 'Years Experience' },
    { icon: <CheckCircle size={24} />, number: '1000+', label: 'Parts Available' },
    { icon: <Clock size={24} />, number: '24/7', label: 'Support Available' }
  ];

  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Quality Assurance',
      description: 'All our parts undergo rigorous quality testing to ensure reliability and durability.'
    },
    {
      icon: <Star size={32} />,
      title: 'Expert Support',
      description: 'Our technical team provides expert guidance to help you find the right parts.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times with reliable shipping to get your equipment running.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            About ASUS Spare Parts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your reliable partner in heavy machinery maintenance with over 15 years of industry expertise
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Trusted by Industry Professionals
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Since our establishment, ASUS Spare Parts has been at the forefront of providing 
              high-quality replacement parts for heavy machinery. We understand the critical 
              importance of equipment uptime in your operations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our extensive inventory covers everything from lights and electrical components 
              to hydraulic seal kits and precision gear parts. Each component is sourced from 
              reputable manufacturers and tested to meet OEM specifications.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">OEM quality standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Extensive parts inventory</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Expert technical support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Competitive pricing</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Heavy machinery warehouse"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years Serving</div>
              <div className="text-sm">the Industry</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;