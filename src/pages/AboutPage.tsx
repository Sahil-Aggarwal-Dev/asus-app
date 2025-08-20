import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Target, Heart, Zap } from 'lucide-react';
import TeamScroller from '../components/TeamScroller';
import { team } from '../data/team';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              About ASUS Spare Parts
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Asus is a <span className="font-semibold">next-generation brand</span> committed to delivering <span className="font-semibold">high-performance spare parts</span> for backhoe loaders, built to meet a <span className="font-semibold">global standard of quality and reliability</span>.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              With <span className="font-semibold">decades of industry experience</span> and a passion for engineering excellence, Asus provides parts that ensure <span className="font-semibold">superior durability</span>, <span className="font-semibold">precise fitment</span>, and <span className="font-semibold">exceptional value</span> for every machine.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our vision extends far beyond one region — we strive to serve customers <span className="font-semibold">worldwide</span>, from bustling urban construction sites to the <span className="font-semibold">most rugged terrains</span> where heavy machinery works the hardest.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Every product that carries the <span className="font-semibold">Asus name</span> reflects our promise of:
            </p>

            <ul className="text-lg md:text-xl text-gray-300 leading-relaxed list-disc list-inside space-y-1">
              <li><span className="font-semibold">Power</span> – ensuring your machines perform at their peak</li>
              <li><span className="font-semibold">Precision</span> – perfect fitment for optimal efficiency</li>
              <li><span className="font-semibold">Performance</span> – reliability that minimizes downtime</li>
            </ul>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Whether you are a <span className="font-semibold">dealer, contractor, rental house, or machine owner</span>, Asus is here to <span className="font-semibold">power your machines</span>, <span className="font-semibold">maximize productivity</span>, and <span className="font-semibold">support your business growth</span>.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              With a focus on <span className="font-semibold">innovation, customer satisfaction, and global reach</span>, Asus is more than just spare parts — it’s a <span className="font-semibold">trusted name wherever your machines take you</span>.
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
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Story Text */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">Our Story</h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                ASUS Spare Parts is a proud brand under <span className="font-semibold">Parnyab Enterprises Pvt Ltd</span>, dedicated to providing high-quality spare parts for backhoe loaders and heavy machinery. Our journey began with a vision to deliver reliable, durable, and cost-effective solutions to the construction and industrial sectors.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Since our inception, we have grown from a small family-run operation into a trusted supplier with a global reach. Our success is built on a foundation of <span className="font-semibold">uncompromising quality, deep industry knowledge, and exceptional customer service</span>.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Today, we maintain strong partnerships with leading manufacturers and continue to expand our inventory to meet the evolving needs of the heavy machinery industry. Every part we provide carries our promise of reliability, precision, and performance.
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

            {/* Story Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ASUS warehouse facility"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-sm font-semibold">Years of</div>
                <div className="text-sm font-semibold">Excellence</div>
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
      <div className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500 via-pink-600 to-purple-700 pb-4 px-2 sm:px-4 lg:px-4">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] opacity-10"></div>

            {/* Section heading */}
            <div className="text-center mb-6 relative z-10 mt-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">Meet Our Team</h2>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                The experienced professionals behind ASUS Spare Parts, dedicated to your success.
              </p>
            </div>

            {/* Scrollable Team Container */}
            <TeamScroller team={team} />
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