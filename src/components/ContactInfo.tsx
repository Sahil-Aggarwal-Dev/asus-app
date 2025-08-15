import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Support',
      primary: '+1-234-567-8900',
      secondary: 'Mon-Fri: 8AM-6PM EST',
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
      icon: <MessageCircle size={24} />,
      title: 'Live Chat',
      primary: 'Available Now',
      secondary: 'Mon-Fri: 8AM-8PM EST',
      description: 'Instant help from our support team'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Our Facility',
      primary: '1234 Industrial Blvd',
      secondary: 'Industrial City, IC 12345',
      description: 'Schedule a visit to our warehouse'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Emergency Support', hours: '24/7 Available' }
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

      {/* Business Hours */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex items-center mb-4">
          <Clock className="text-orange-600 mr-2" size={24} />
          <h3 className="text-lg font-semibold text-slate-900">Business Hours</h3>
        </div>
        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{schedule.day}</span>
              <span className="text-gray-600">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Why Choose ASUS?</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">15+ years of industry experience</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">OEM quality parts and components</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Fast shipping worldwide</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Expert technical support</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span className="text-gray-700">Competitive pricing</span>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 p-6 rounded-xl border border-red-200">
        <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Support</h3>
        <p className="text-red-700 mb-3">
          Need urgent assistance? Our emergency support line is available 24/7 for critical situations.
        </p>
        <div className="flex items-center space-x-2">
          <Phone className="text-red-600" size={18} />
          <span className="font-semibold text-red-900">+1-234-567-HELP (4357)</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;