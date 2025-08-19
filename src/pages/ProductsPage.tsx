import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { products } from '../data/products';
import { categories } from '../data/categories';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const searchFromUrl = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState(searchFromUrl);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('name');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Disable body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch = !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesAvailability = availability.length === 0 || availability.includes(product.availability);

      return matchesCategory && matchesSearch && matchesPrice && matchesAvailability;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        case 'newest': return b.id.localeCompare(a.id);
        default: return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, priceRange, availability, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="max-w-[1800px] mx-auto py-8 flex gap-4">

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 sticky top-20 h-fit">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            availability={availability}
            onAvailabilityChange={setAvailability}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Products Area */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Mobile + Tablet Header */}
          <div className="flex lg:hidden w-full items-center mb-4">
            {/* Filter Button */}
            <div className="flex-shrink-0 w-24 flex justify-center">
              <button
                onClick={() => setMobileOpen(true)}
                className="px-2 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
              >
                Filters
              </button>
            </div>

            {/* Info text */}
            <div className="flex-1 text-right pr-2">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          </div>

          {/* Product Grid (handles all screens) */}
          <div className="w-full">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>

        {/* Mobile / Tablet Drawer */}
        {mobileOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed left-0 top-16 bottom-0 w-64 bg-white shadow-lg z-50 lg:hidden flex flex-col">
              <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                <h2 className="text-lg font-bold">Filters</h2>
                <button onClick={() => setMobileOpen(false)} className="text-black text-xl">×</button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <ProductFilters
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  availability={availability}
                  onAvailabilityChange={setAvailability}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
