import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, Grid, List, Search } from 'lucide-react';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryFilter = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [categoryFilter, searchQuery, sortBy]);

  const categories = ['all', ...new Set(PRODUCTS.map(p => p.category.toLowerCase()))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 space-y-8 md:space-y-0">
        <div className="space-y-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">Collections</span>
          <h1 className="text-5xl font-serif">The Full Collection</h1>
          <p className="text-muted text-sm max-w-md">
            Explore our curated selection of high-end textiles, from organic linen to luxurious raw silk.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <div className="relative flex-grow sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input
              type="text"
              placeholder="Search textiles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-secondary text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-accent transition-colors"
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-black/5 mb-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest uppercase">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSearchParams({ category: cat })}
                      className={`px-4 py-2 text-xs font-medium tracking-widest uppercase border transition-all ${
                        categoryFilter === cat ? 'bg-primary text-white border-primary' : 'border-gray-200 hover:border-primary'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest uppercase">Sort By</h4>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-secondary text-xs font-medium tracking-widest uppercase focus:outline-none"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest uppercase">Price Range</h4>
                <div className="flex items-center space-x-4">
                  <input type="number" placeholder="Min" className="w-full px-4 py-2 bg-secondary text-xs focus:outline-none" />
                  <span className="text-muted">-</span>
                  <input type="number" placeholder="Max" className="w-full px-4 py-2 bg-secondary text-xs focus:outline-none" />
                </div>
              </div>

              <div className="flex items-end">
                <button 
                  onClick={() => {
                    setSearchParams({});
                    setSortBy('newest');
                    setSearchQuery('');
                  }}
                  className="w-full py-2 text-xs font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors underline underline-offset-4"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-32 space-y-4">
          <h3 className="text-2xl font-serif">No textiles found</h3>
          <p className="text-muted">Try adjusting your filters or search query.</p>
          <button 
            onClick={() => {
              setSearchParams({});
              setSearchQuery('');
            }}
            className="btn-primary"
          >
            Clear All Search
          </button>
        </div>
      )}

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="mt-20 flex justify-center items-center space-x-4">
          <button className="p-2 border border-gray-200 text-muted hover:text-primary hover:border-primary transition-all disabled:opacity-30" disabled>
            <ChevronDown className="rotate-90" size={20} />
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`w-10 h-10 text-xs font-bold transition-all ${
                  page === 1 ? 'bg-primary text-white' : 'hover:bg-secondary'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="p-2 border border-gray-200 text-muted hover:text-primary hover:border-primary transition-all">
            <ChevronDown className="-rotate-90" size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
