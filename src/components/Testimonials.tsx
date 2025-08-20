import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const testimonies = testimonials;

  return (
    <section className="py-4 bg-gray-50">
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
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-orange-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
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
  );
};

export default Testimonials;