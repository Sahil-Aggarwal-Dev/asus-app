import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={24} />, number: '100+', label: 'Happy Customers' },
    { icon: <Award size={24} />, number: '1+', label: 'Years of Expertise' },
    { icon: <CheckCircle size={24} />, number: '500+', label: 'Parts in Inventory' },
    { icon: <Clock size={24} />, number: '24/7', label: 'Support Availability' }
  ];

  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Uncompromising Quality',
      description: 'Every part is rigorously tested to meet OEM standards, ensuring your machinery runs efficiently and reliably.'
    },
    {
      icon: <Star size={32} />,
      title: 'Expert Guidance',
      description: 'Our seasoned professionals provide tailored recommendations, helping you choose the perfect component for your needs.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Fast & Reliable Delivery',
      description: 'We ensure timely shipments and minimal downtime so your operations stay productive and uninterrupted.'
    }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-50 to-white py-1 sm:py-2 lg:py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            About ASUS Spare Parts
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Powering your heavy machinery with premium parts that guarantee peak performance and long-lasting reliability.
            Trusted by professionals across industries for precision, quality, and rapid support.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-2xl p-6 sm:p-8 shadow-lg transition-transform duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #0f172a, #b87333)', // dark blue to copper
              }}
            >
              <div className="bg-white text-orange-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 shadow-md">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.number}</div>
              <div className="text-gray-200 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Text */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Reliability You Can Count On
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              ASUS Spare Parts delivers top-tier replacement components for heavy machinery. Every part is precision-tested to ensure zero downtime and maximum efficiency.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              From hydraulic systems to engine parts, our inventory is sourced from trusted manufacturers and crafted to meet or exceed OEM standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">Guaranteed OEM Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">Extensive Parts Inventory</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">Expert Technical Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700 text-sm sm:text-base">Transparent & Competitive Pricing</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Heavy machinery warehouse"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-3 sm:p-5 rounded-xl shadow-lg text-center font-medium text-sm sm:text-base">
              <div>Years of</div>
              <div>Excellence</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-orange-600 mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">{feature.title}</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
