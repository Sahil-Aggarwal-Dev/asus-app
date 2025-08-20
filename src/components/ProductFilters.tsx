import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Category } from '../types';

interface ProductFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  availability: string[];
  onAvailabilityChange: (availability: string[]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  availability,
  onAvailabilityChange,
  sortBy,
  onSortChange
}) => {
  const handleAvailabilityChange = (value: string) => {
    if (availability.includes(value)) {
      onAvailabilityChange(availability.filter(a => a !== value));
    } else {
      onAvailabilityChange([...availability, value]);
    }
  };

  const clearFilters = () => {
    onCategoryChange(null);
    onSearchChange('');
    onPriceRangeChange([0, 1000]);
    onAvailabilityChange([]);
    onSortChange('name');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter size={20} className="mr-2" />
          Filters
        </h3>
        <button
          onClick={clearFilters}
          className="text-sm text-orange-600 hover:text-orange-700 flex items-center"
        >
          <X size={16} className="mr-1" />
          Clear All
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Sort */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="name">Name (A-Z)</option>
          <option value="price-low">Price (Low to High)</option>
          <option value="price-high">Price (High to Low)</option>
          {/* <option value="newest">Newest First</option> */}
        </select>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Categories</label>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${!selectedCategory
              ? 'bg-orange-100 text-orange-800 font-medium'
              : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                ? 'bg-orange-100 text-orange-800 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div className="text-sm text-gray-600">
            ₹{priceRange[0]} - ₹{priceRange[1]}
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Availability</label>
        <div className="space-y-2">
          {['In Stock', 'Low Stock', 'Out of Stock'].map((status) => (
            <label key={status} className="flex items-center">
              <input
                type="checkbox"
                checked={availability.includes(status)}
                onChange={() => handleAvailabilityChange(status)}
                className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{status}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
