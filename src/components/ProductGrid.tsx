// src/components/ProductGrid.tsx
import React, { useState } from 'react';
import { Eye, Filter } from 'lucide-react';
import { Product } from '../types';
import ImageScroller from './ImageScroller';

interface ProductGridProps {
  products: Product[];
  filters?: React.ReactNode;
  onProductClick?: (id: string) => void; // optional callback for clicking a product
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, filters, onProductClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileOpen, setMobileOpen] = useState(false);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock':
        return 'text-green-600';
      case 'Low Stock':
        return 'text-yellow-600';
      case 'Out of Stock':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-2 sm:px-4 flex flex-col lg:flex-row gap-4 relative">

      {/* Mobile filter toggle */}
      {filters && (
        <div className="lg:hidden mb-2">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-md"
          >
            <Filter size={20} /> Filters
          </button>
        </div>
      )}

      {/* Mobile Drawer Overlay */}
      {filters && (
        <>
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
              mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } lg:hidden`}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              mobileOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:hidden`}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setMobileOpen(false)} className="text-black text-xl">×</button>
            </div>
            <div className="p-4 overflow-y-auto">{filters}</div>
          </div>
        </>
      )}

      {/* Desktop filters */}
      {filters && (
        <div className="hidden lg:block w-64 sticky top-4">{filters}</div>
      )}

      {/* Product Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1 ? 'bg-orange-600 text-white' : 'bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onClick?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock': return 'text-green-600';
      case 'Low Stock': return 'text-yellow-600';
      case 'Out of Stock': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const isOnSale = product.originalPrice && product.originalPrice > product.price;

  return (
    <div
      className="bg-white shadow rounded-lg overflow-hidden relative hover:shadow-lg transition-shadow cursor-pointer text-sm flex flex-col"
      onClick={() => onClick?.(product.id)}
    >
      <div className="w-full aspect-[4/3] relative">
        <ImageScroller images={product.images} partNumber={product.partNumber} isOnSale={!!isOnSale} setTime={1500} />
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 hover:text-orange-600 truncate">
          {product.name}
        </h3>

        {product.partNumber && (
          <p className="text-xs sm:text-sm font-bold text-gray-800 mt-1 truncate">Part No: {product.partNumber}</p>
        )}

        {product.warranty && (
          <p className="mt-1 text-xs sm:text-sm text-gray-600 truncate">Warranty: {product.warranty}</p>
        )}

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center space-x-2">
            <span className="text-gray-900 font-bold text-sm sm:text-base">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-xs sm:text-sm">₹{product.originalPrice}</span>
            )}
          </div>
          <span className={`text-xs sm:text-sm font-semibold ${getAvailabilityColor(product.availability)}`}>
            {product.availability}
          </span>
        </div>

        <button
          className="mt-2 inline-flex items-center justify-center w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold gap-2 text-sm sm:text-base"
          onClick={() => onClick?.(product.id)}
        >
          <Eye size={20} /> View
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
