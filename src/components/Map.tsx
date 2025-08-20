import React, { useState, useEffect } from 'react';
import { MapPin, Phone, X } from 'lucide-react';

const Map: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true); // loading state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Scheduled Visit Details:', formData);
    alert('Thank you! Your visit request has been submitted.');
    setFormData({ name: '', email: '', phone: '', date: '', time: '' });
    setShowForm(false);
  };

  // simulate loading for iframe
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s delay for demo
    return () => clearTimeout(timer);
  }, []);

  // Loading animation
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <img
          decoding="async"
          src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/Asus_logo_1.png"
          alt="Loading"
          className="h-32 w-auto object-contain animate-fluctuate"
        />
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Come see our extensive inventory in person. Our facility is equipped with the latest technology
            and staffed by knowledgeable professionals ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Google Map Embed with Pin */}
          <div className="lg:col-span-2 h-[505px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Parnyab Enterprises Location"
              src="https://maps.google.com/maps?q=28.473843,77.031586&hl=en&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Facility Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p className="text-gray-600">Parnyab Enterprises Pvt. Ltd.</p>
                    <p className="text-gray-600">
                      834/35, West Rajiv Nagar, Sector-12, Gurugram, Haryana-122001, INDIA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-gray-600">+91-8298659245</p>
                    <p className="text-gray-600">+91-8750108980</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Visit Button */}
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Schedule a Visit</h3>
              <p className="text-gray-600 mb-4">
                Want to see our facility and inventory in person? Schedule a visit with our team.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Schedule Your Visit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                min="11:00"
                max="18:00"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Map;
