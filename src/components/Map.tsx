import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Come see our extensive inventory in person. Our facility is equipped with the latest technology 
            and staffed by knowledgeable professionals ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              {/* Simulated Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
              <div className="text-center z-10">
                <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">ASUS Spare Parts Facility</h3>
                <p className="text-gray-600">1234 Industrial Blvd, Industrial City, IC 12345</p>
                <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 mx-auto transition-colors">
                  <Navigation size={18} />
                  <span>Get Directions</span>
                </button>
              </div>
              
              {/* Decorative elements to simulate a map */}
              <div className="absolute top-4 left-4 w-32 h-2 bg-gray-400 rounded opacity-30"></div>
              <div className="absolute top-8 left-4 w-24 h-2 bg-gray-400 rounded opacity-30"></div>
              <div className="absolute bottom-4 right-4 w-28 h-2 bg-gray-400 rounded opacity-30"></div>
              <div className="absolute bottom-8 right-4 w-20 h-2 bg-gray-400 rounded opacity-30"></div>
              <div className="absolute top-1/3 right-8 w-2 h-24 bg-gray-400 rounded opacity-30"></div>
              <div className="absolute top-1/2 left-8 w-2 h-16 bg-gray-400 rounded opacity-30"></div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Facility Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p className="text-gray-600">1234 Industrial Blvd</p>
                    <p className="text-gray-600">Industrial City, IC 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-gray-600">+1-234-567-8900</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Facility Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  50,000 sq ft warehouse
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Climate-controlled storage
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Loading dock access
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Customer parking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Technical consultation area
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Schedule a Visit</h3>
              <p className="text-gray-600 mb-4">
                Want to see our facility and inventory in person? Schedule a visit with our team.
              </p>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;