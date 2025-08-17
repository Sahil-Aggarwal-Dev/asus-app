import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ImageScroller from './ImageScroller';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 12);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // adjust based on card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular and highly-rated spare parts, trusted by professionals worldwide
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Product Container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth py-4 hide-scrollbar"
          >
            {featuredProducts.map(product => {
              const isOnSale = product.originalPrice && product.originalPrice > product.price;

              return (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-64 bg-white shadow rounded-lg overflow-hidden relative hover:shadow-lg transition-shadow cursor-pointer text-sm"
                >
                  <ImageScroller
                    images={product.images}
                    partNumber={product.partNumber}
                    isOnSale={!!isOnSale}
                    setTime={1000}
                  />

                  <div className="p-3">
                    <Link
                      to={`/products/${product.id}`}
                      className="text-base font-semibold text-gray-900 hover:text-orange-600"
                    >
                      {product.name}
                    </Link>

                    {product.partNumber && (
                      <p className="text-xs font-bold text-gray-800 mt-1">
                        Part No: {product.partNumber}
                      </p>
                    )}

                    {product.warranty && (
                      <p className="mt-1 text-xs text-gray-600">Warranty: {product.warranty}</p>
                    )}

                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-900 font-bold text-sm">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-xs">₹{product.originalPrice}</span>
                        )}
                      </div>
                      <span
                        className={`text-xs font-semibold ${product.availability === 'In Stock'
                          ? 'text-green-600'
                          : product.availability === 'Low Stock'
                            ? 'text-yellow-600'
                            : 'text-red-600'
                          }`}
                      >
                        {product.availability}
                      </span>
                    </div>

                    <Link
                      to={`/products/${product.id}`}
                      className="mt-2 inline-flex items-center justify-center w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold gap-2 text-sm"
                    >
                      <Eye size={20} /> View
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
