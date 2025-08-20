import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Support',
      primary: '+91 8298659245/+91 8750108980',
      secondary: 'Mon-Sun: 9AM-7PM IST',
      description: 'Speak directly with our technical experts'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Support',
      primary: 'info@asussparparts.com',
      secondary: 'support@asussparparts.com',
      description: '24/7 email support with quick response'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Our Facility',
      primary: 'Parnyab Enterprises Pvt. Ltd.',
      secondary: '834/35, West Rajiv Nagar, Sector-12, Gurugram, Haryana-122001, INDIA',
      description: 'Schedule a visit to our warehouse'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Our team of experts is ready to help you find the right parts and answer all your questions.
          Choose the contact method that works best for you.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600 text-white p-3 rounded-lg flex-shrink-0">
                {method.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-slate-900 mb-1">{method.title}</h3>
                <p className="text-slate-900 font-medium">{method.primary}</p>
                <p className="text-gray-600 text-sm">{method.secondary}</p>
                <p className="text-gray-500 text-sm mt-2">{method.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Asus?*/}
      {/* <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Why Choose ASUS?</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Global-Quality standards - Manufactured to meet demanding International performance requirements.</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Exact Fitment - Engineered to seamlessly integrate with OEM equipment</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Competitive Pricing - Exceptional value without sacrificing quality</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Reliable Availability - Streamlined distribution for fast delivery</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Customer-Driven Service - Our expert team is committed to supporting dealers, workshops, and end-users worldwide</span>
          </div>
        </div>
      </div> */}

      {/* Our Vision */}
      {/* <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">our vision</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">To become a globally trusted spare parts brand for construction and agricultural equipment — known for delivering innovative, reliable, and cost-effective solutions that help power progress in every corner of the world.</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Empowering machines. Driving industries. Connecting the world.</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContactInfo;