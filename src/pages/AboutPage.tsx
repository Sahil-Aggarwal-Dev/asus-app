import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Target, Heart, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Users size={32} />, number: '500+', label: 'Happy Customers', description: 'Satisfied clients worldwide' },
    { icon: <Award size={32} />, number: '1+', label: 'Years Experience', description: 'Industry expertise' },
    { icon: <CheckCircle size={32} />, number: '1000+', label: 'Parts Available', description: 'Comprehensive inventory' },
    { icon: <Clock size={32} />, number: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' }
  ];

  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every part meets or exceeds OEM specifications.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Customer Focus',
      description: 'Your success is our priority. We build lasting relationships through exceptional service.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation',
      description: 'Continuously improving our processes and expanding our product range.'
    },
    {
      icon: <Target size={32} />,
      title: 'Reliability',
      description: 'Dependable parts and services you can count on, every time.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '20+ years in heavy machinery industry'
    },
    {
      name: 'Sarah Johnson',
      role: 'Technical Director',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in hydraulic systems and engineering'
    },
    {
      name: 'Mike Chen',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Logistics and supply chain specialist'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Customer Success Manager',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dedicated to exceptional customer experience'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About ASUS Spare Parts</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Asus is a next-generation brand committed to delivering high-performance spare parts for backhoe loaders with a global standard of quality and reliability. Born from deep industry experience and a passion for engineering excellence, Asus aims to support the construction and heavy equipment sector with parts that offer superior durability, precision fitment, and exceptional value. Our vision is not limited to one region — we aspire to serve customers worldwide, from the heart of bustling cities to the most rugged terrains where machines work the hardest. Every product that carries the Asus name reflects our promise of Power. Precision. Performance. Whether you're a dealer, contractor, rental house, or machine owner, Asus is here to power your machines, minimize downtime, and help your business move forward with confidence. With a focus on innovation, customer satisfaction, and expanding global reach, Asus is more than just parts — it's a name you can trust, wherever your machines take you.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2009, ASUS Spare Parts began as a small family business with a simple mission:
                to provide heavy machinery operators with reliable, high-quality spare parts at competitive prices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started in a modest warehouse has grown into a comprehensive operation serving customers
                across multiple continents. Our success is built on three pillars: uncompromising quality,
                exceptional customer service, and deep industry expertise.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we maintain partnerships with leading manufacturers and continue to expand our inventory
                to meet the evolving needs of the heavy machinery industry. Every part we sell comes with our
                commitment to quality and our promise of reliable performance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">ISO 9001:2015 Certified Quality Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Authorized dealer for major OEM brands</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Global shipping and logistics network</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ASUS warehouse facility"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of</div>
                <div className="text-sm">Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with customers and partners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The experienced professionals behind ASUS Spare Parts, dedicated to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8">
            "To be the most trusted partner in the heavy machinery industry by providing superior quality
            spare parts, exceptional customer service, and innovative solutions that keep our customers'
            operations running smoothly and efficiently."
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl">
              <p className="text-orange-100 leading-relaxed">
                We believe that every customer deserves parts they can rely on and service they can trust.
                This commitment drives us to continuously improve our products, expand our capabilities,
                and exceed expectations in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      {/* <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications & Partnerships</h2>
            <p className="text-gray-600">Recognized for quality and trusted by industry leaders</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-slate-900 mb-2">ISO 9001</div>
              <div className="text-sm text-gray-600">Quality Management</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-slate-900 mb-2">ISO 14001</div>
              <div className="text-sm text-gray-600">Environmental Management</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-slate-900 mb-2">OEM</div>
              <div className="text-sm text-gray-600">Authorized Dealer</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-slate-900 mb-2">A+</div>
              <div className="text-sm text-gray-600">BBB Rating</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;