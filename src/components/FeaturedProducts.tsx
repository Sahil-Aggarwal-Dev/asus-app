import React, { useRef, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ImageScroller from './ImageScroller';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 12);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setCanScroll(scrollWidth > clientWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [featuredProducts]);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="py-8 relative w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-[1800px] rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-black to-slate-900">

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] opacity-10"></div>

        <style>{`
          .scroll-container::-webkit-scrollbar { display: none; }
          .scroll-container { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <div className="relative w-full mx-auto px-6">
          <div className="text-center mb-8 relative z-10 mt-4">
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
              Featured Products
            </h2>
            <p className="text-gray-300 text-lg">Discover our most popular products</p>
          </div>

          <div className="relative z-10 pb-6">
            {canScroll && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-slate-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-orange-600 hover:text-white text-gray-200 transition"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto scroll-smooth pt-2 scroll-container"
            >
              {featuredProducts.map(product => {
                const isOnSale = product.originalPrice && product.originalPrice > product.price;

                return (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-64 bg-white/100 backdrop-blur-md shadow-md hover:shadow-xl rounded-2xl overflow-hidden relative transition-transform hover:-translate-y-1 cursor-pointer text-sm"
                  >
                    <ImageScroller
                      images={product.images}
                      partNumber={product.partNumber}
                      isOnSale={!!isOnSale}
                      setTime={1500}
                    />

                    <div className="border-t border-gray-200"></div>

                    <div className="p-4 flex flex-col flex-1">
                      <Link
                        to={`/products?id=${product.id}`}
                        className="text-sm sm:text-base font-semibold text-gray-900 hover:text-orange-600 truncate"
                      >
                        {product.name}
                      </Link>

                      {product.partNumber && (
                        <p className="text-xs font-bold text-gray-800 mt-1">
                          Part No: {product.partNumber}
                        </p>
                      )}

                      {product.warranty && (
                        <p className="mt-1 text-xs text-gray-600">
                          Warranty: {product.warranty}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-900 font-bold text-sm">₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-500 line-through text-xs">
                              ₹{product.originalPrice}
                            </span>
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
                        to={`/products?id=${product.id}`}
                        className="mt-3 inline-flex items-center justify-center w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-2xl font-semibold gap-2 text-sm shadow-sm transition"
                      >
                        <Eye size={20} /> View
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {canScroll && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-slate-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-orange-600 hover:text-white text-gray-200 transition"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
