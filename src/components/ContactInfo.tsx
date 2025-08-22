import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Support',
      numbers: ['+91 8298659245', '+91 8750108980'], // use array for multiple numbers
      hours: 'Mon-Sun: 9AM-7PM IST',
      description: 'Speak directly with our technical experts',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Support',
      emails: ['info@asussparparts.com', 'support@asussparparts.com'],
      description: '24/7 email support with quick response',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Our Facility',
      name: 'Parnyab Enterprises Pvt. Ltd.',
      address: '834/35, West Rajiv Nagar, Sector-12, Gurugram, Haryana-122001, INDIA',
      description: 'Schedule a visit to our warehouse',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600 text-white p-3 rounded-lg flex-shrink-0">
                {method.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-slate-900 mb-1">{method.title}</h3>

                {/* Phones */}
                {method.numbers &&
                  method.numbers.map((num, idx) => (
                    <p key={idx} className="text-slate-900 font-medium">
                      {num}
                    </p>
                  ))}
                {method.hours && <p className="text-gray-600 text-sm">{method.hours}</p>}

                {/* Emails */}
                {method.emails &&
                  method.emails.map((email, idx) => (
                    <p key={idx} className="text-slate-900 font-medium">
                      {email}
                    </p>
                  ))}

                {/* Address */}
                {method.name && <p className="text-slate-900 font-medium">{method.name}</p>}
                {method.address && <p className="text-gray-600 text-sm">{method.address}</p>}

                <p className="text-gray-500 text-sm mt-2">{method.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
