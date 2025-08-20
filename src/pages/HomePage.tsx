import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Clock, Users, Award, CheckCircle, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';

const HomePage: React.FC = () => {
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

  const testimonies = testimonials;

  return (
    <section>
      {/* HERO SECTION */}
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
                {/* Feature Cards */}
                {[
                  { icon: <Shield className="text-amber-300" />, title: 'Premium Quality', desc: 'All parts rigorously tested for maximum reliability and durability.', label: 'Trusted' },
                  { icon: <Wrench className="text-cyan-300" />, title: 'Professional Support', desc: 'Expert guidance to help you choose the right parts for your machines.', label: '24/7 Help' },
                  { icon: <Clock className="text-emerald-300" />, title: 'Quick Delivery', desc: 'Timely and secure shipping to keep your operations running smoothly.', label: 'Reliable' }
                ].map((f, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center bg-gradient-to-tr from-slate-700 via-slate-600 to-slate-500/80 p-6 rounded-2xl shadow-2xl hover:scale-105 transform transition-transform duration-300 h-full relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Ccircle cx=10 cy=10 r=1 fill=white/%3E%3C/svg%3E')] pointer-events-none rounded-2xl"></div>
                    {f.icon}
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 relative z-10">{f.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-2 relative z-10">{f.desc}</p>
                    <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full relative z-10">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-3xl">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-orange-500/20">
                  <img
                    decoding="async"
                    src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/jcb-spare-parts-distributor.webp"
                    alt="Backhoe Loader"
                    className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover rounded-2xl"
                  />
                </div>

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

      <ProductCategories />
      <FeaturedProducts />

      {/* ABOUT & STATS SECTION */}
      <section className="relative">
        <div className="bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 lg:py-20">
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
                  style={{ background: 'linear-gradient(135deg, #0f172a, #b87333)' }}
                >
                  <div className="bg-white text-orange-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 shadow-md">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-200 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main About Content & Features */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
              {/* Text Content */}
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Reliability You Can Count On</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  ASUS Spare Parts delivers top-tier replacement components for heavy machinery. Every part is precision-tested to ensure zero downtime and maximum efficiency.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  From hydraulic systems to engine parts, our inventory is sourced from trusted manufacturers and crafted to meet or exceed OEM standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center space-x-3"><CheckCircle className="text-green-600" size={20} /><span className="text-gray-700 text-sm sm:text-base">Guaranteed OEM Quality</span></div>
                  <div className="flex items-center space-x-3"><CheckCircle className="text-green-600" size={20} /><span className="text-gray-700 text-sm sm:text-base">Extensive Parts Inventory</span></div>
                  <div className="flex items-center space-x-3"><CheckCircle className="text-green-600" size={20} /><span className="text-gray-700 text-sm sm:text-base">Expert Technical Support</span></div>
                  <div className="flex items-center space-x-3"><CheckCircle className="text-green-600" size={20} /><span className="text-gray-700 text-sm sm:text-base">Transparent & Competitive Pricing</span></div>
                </div>
              </div>

              {/* About Image */}
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

            {/* Features Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-16">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-orange-600 mb-3 sm:mb-4">{feature.icon}</div>
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">{feature.title}</h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry professionals say about our products and service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonies.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="text-orange-600 mr-2" size={24} />
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} size={16} className="text-yellow-400 fill-current" />))}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-orange-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <div className="bg-orange-600 text-white py-8 px-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Customers</h3>
              <p className="text-orange-100 mb-6">
                Experience the ASUS difference with premium quality parts and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center">
                  <div className="text-3xl font-bold mr-2">4.9</div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (<Star key={i} size={16} className="text-yellow-400 fill-current" />))}
                    </div>
                    <div className="text-sm text-orange-100">Average Rating</div>
                  </div>
                </div>
                <div className="border-l border-orange-400 mx-4 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-orange-100">Happy Customers</div>
                </div>
                <div className="border-l border-orange-400 mx-4 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-orange-100">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Newsletter /> */}
    </section>
  );
};

export default HomePage;
