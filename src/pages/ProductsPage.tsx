// src/pages/ProductsPage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  Check,
  Star,
  Shield,
  Phone,
  FileText,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import RelatedProducts from '../components/RelatedProducts';
import WatermarkedImage from '../components/Watermark';
import { products } from '../data/products';
import { categories } from '../data/categories';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get('category');

  // === State ===
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('name');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  // === Sync searchQuery with URL ===
  useEffect(() => {
    const query = searchParams.get('search') || '';
    setSearchQuery(query);
    setCurrentPage(1);
  }, [searchParams]);

  // === Product detail open/close ===
  const openProduct = (productId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('id', productId);
    setSearchParams(params, { replace: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProduct = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('id');
    setSearchParams(params);
  };

  const productIdFromQuery = searchParams.get('id');

  // === Filtering logic ===
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q ||
        product.name.toLowerCase().includes(q) ||
        product.partNumber.toLowerCase().includes(q) ||
        (product.description || '').toLowerCase().includes(q) ||
        (product.tags || []).some(tag => tag.toLowerCase().includes(q));
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

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, priceRange, availability, sortBy]);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const startItem = totalProducts === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalProducts);

  const product = productIdFromQuery ? products.find(p => p.id === productIdFromQuery) : undefined;
  const [selectedImage, setSelectedImage] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
  }, [product?.id]);

  const getAvailabilityColor = (availabilityStr: string) => {
    switch (availabilityStr) {
      case 'In Stock': return 'text-green-600';
      case 'Low Stock': return 'text-yellow-600';
      case 'Out of Stock': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  // ---- Product list page ----
  if (!productIdFromQuery) {
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
              onSearchChange={(q) => {
                setSearchQuery(q);
                const params = new URLSearchParams(searchParams.toString());
                params.set('search', q);
                setSearchParams(params);
              }}
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
            <div className="flex w-full items-center justify-between mb-4">
              {/* Filters Button (mobile only) */}
              <div className="flex-shrink-0 lg:hidden">
                <button
                  onClick={() => setMobileOpen(true)}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
                >
                  Filters
                </button>
              </div>

              {/* Info Text */}
              <div className="flex-1 text-right lg:text-left">
                <p className="text-gray-600">
                  Showing {startItem}-{endItem} of {totalProducts} products
                </p>
              </div>
            </div>

            {/* ProductGrid */}
            <div className="w-full">
              <ProductGrid products={paginatedProducts} onProductClick={openProduct as any} />
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx + 1}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`px-3 py-1 rounded-md border ${currentPage === idx + 1
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-md border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Mobile Drawer */}
          {mobileOpen && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setMobileOpen(false)}
              />

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
                    onSearchChange={(q) => {
                      setSearchQuery(q);
                      const params = new URLSearchParams(searchParams.toString());
                      params.set('search', q);
                      setSearchParams(params);
                    }}
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
  }

  // ---- Product detail (existing code unchanged) ----
  if (productIdFromQuery && !product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={closeProduct}
            className="text-orange-600 hover:text-orange-700"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    );
  }


  // ---- Render product detail (product guaranteed) ----
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 sm:py-4">
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <nav className="flex flex-wrap items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <button
              onClick={closeProduct}
              className="text-gray-500 hover:text-gray-700"
            >
              Products
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 truncate max-w-[150px] sm:max-w-none">
              {product!.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="w-full px-2 sm:px-4 lg:px-6 py-6 sm:py-8">
        <button
          onClick={closeProduct}
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to All Products
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            {product!.images.length > 1 && (
              <div className="flex sm:flex-col gap-2 sm:gap-4 mb-3 sm:mb-0 sm:mr-2 overflow-x-auto sm:overflow-visible">
                {product!.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${selectedImage === index ? 'border-orange-600' : 'border-gray-200'}`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <WatermarkedImage
                      src={image}
                      alt={`${product!.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="relative flex-1 aspect-square bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
              <WatermarkedImage
                src={product!.images[selectedImage]}
                alt={product!.name}
                className="w-full h-full object-contain"
              />

              {product!.images.length > 1 && (
                <button
                  onClick={() => setSelectedImage(prev => prev === 0 ? product!.images.length - 1 : prev - 1)}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-md"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-gray-700" />
                </button>
              )}

              {product!.images.length > 1 && (
                <button
                  onClick={() => setSelectedImage(prev => prev === product!.images.length - 1 ? 0 : prev + 1)}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-md"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-gray-700" />
                </button>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{product!.name}</h1>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Part Number: {product!.partNumber}
              </p>

              <div className="flex items-center space-x-2 sm:space-x-4 mb-3 sm:mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-1 sm:ml-2 text-gray-600 text-xs sm:text-sm">(4.8) 24 reviews</span>
                </div>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{product!.detailedDescription}</p>
            </div>

            {/* Price + Availability */}
            <div className="border-t border-b border-gray-200 py-4 sm:py-6">
              <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">₹{product!.price}</span>
                  {product!.originalPrice && (
                    <span className="text-base sm:text-xl text-gray-500 line-through">₹{product!.originalPrice}</span>
                  )}
                </div>
                <div className={`font-semibold text-sm sm:text-base ${getAvailabilityColor(product!.availability)}`}>
                  {product!.availability}
                </div>
              </div>

              {product!.warranty && (
                <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-4">
                  <Shield size={14} className="mr-1" />
                  {product!.warranty} warranty
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowInquiryForm(true)}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors text-sm sm:text-base"
                >
                  <FileText size={18} />
                  <span>Request Quote</span>
                </button>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Asus Genuine Spare Parts',
                        text: 'Check out this product!',
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="flex-1 flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg border-2 border-gray-300 text-gray-600 hover:border-gray-400 transition-colors text-sm sm:text-base"
                >
                  <Share2 size={18} className="mr-2" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                {product!.tags.map((tag, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm sm:text-base">
                    <Check size={14} className="text-green-600" />
                    <span className="text-gray-700">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility */}
            {product!.compatibility && product!.compatibility.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Compatibility</h3>
                <div className="flex flex-wrap gap-2">
                  {product!.compatibility.map((model, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">{model}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Technical Specifications</h2>
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-8">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              {Object.entries(product!.specifications || {}).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-200 last:border-b-0 text-sm sm:text-base">
                  <span className="font-medium text-gray-900">{key}</span>
                  <span className="text-gray-600">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts
          category={product!.category}
        />
      </div>

      {/* Inquiry Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50">
          <div className="bg-white rounded-2xl p-4 sm:p-8 max-w-sm sm:max-w-md w-full">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Inquiry</h3>
            <form className="space-y-3 sm:space-y-4 text-sm sm:text-base" onSubmit={(e) => { e.preventDefault(); /* wire up submission */ }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Sahil Aggarwal" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="abc@gmail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="+91 1111111111" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Abc Enterprises" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  defaultValue={`I'm interested in ${product!.name} (${product!.partNumber}). Please provide more information.`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={() => setShowInquiryForm(false)} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="bg-orange-600 text-white py-2 sm:py-4">
        <div className="w-full px-2 sm:px-4 lg:px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-2">Need Help Finding the Right Part?</h3>
          <p className="text-orange-100 mb-4 sm:mb-6 text-sm sm:text-base">Our technical experts are ready to assist you with product selection and compatibility.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="tel:+918295659245" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              <Phone size={18} className="mr-2" />
              Call Now: +91-8295659245
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-sm sm:text-base">
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
