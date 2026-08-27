import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2, ChevronRight, Check, Minus, Plus } from 'lucide-react';
import { PRODUCTS } from '../data';
import { useCart } from '../CartContext';
import { motion } from 'motion/react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-8">
        <h1 className="text-4xl font-serif">Textile not found</h1>
        <Link to="/shop" className="btn-primary">Back to Collection</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-muted mb-12">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-primary transition-colors">Collection</Link>
        <ChevronRight size={12} />
        <span className="text-primary">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Image Gallery */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] overflow-hidden bg-secondary"
          >
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square overflow-hidden bg-secondary cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={`${product.image}?sig=${i}`}
                  alt={`${product.name} view ${i}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-serif">{product.name}</h1>
            <p className="text-2xl font-medium">₹{product.price}.00</p>
          </div>

          <p className="text-muted text-sm leading-relaxed max-w-lg">
            {product.description}
          </p>

          <div className="space-y-8">
            {/* Color Selection */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase">Select Color</h4>
              <div className="flex space-x-4">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === color ? 'border-primary' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color && <Check size={16} className={color === '#FFFFFF' ? 'text-black' : 'text-white'} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase">Select Length</h4>
              <div className="flex flex-wrap gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 text-xs font-bold tracking-widest uppercase border transition-all ${
                      selectedSize === size ? 'bg-primary text-white border-primary' : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <div className="flex items-center border border-gray-200 h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 hover:text-accent transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 hover:text-accent transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-grow h-14 bg-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-accent transition-all active:scale-95"
              >
                Add to Yuva Cart
              </button>
              <button className="h-14 w-14 flex items-center justify-center border border-gray-200 hover:border-primary transition-all">
                <Heart size={20} />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-100 pt-10 space-y-6">
            <div className="flex justify-between items-center group cursor-pointer">
              <span className="text-xs font-bold tracking-widest uppercase">Material Details</span>
              <Plus size={16} className="text-muted group-hover:text-primary transition-colors" />
            </div>
            <div className="flex justify-between items-center group cursor-pointer">
              <span className="text-xs font-bold tracking-widest uppercase">Shipping & Returns</span>
              <Plus size={16} className="text-muted group-hover:text-primary transition-colors" />
            </div>
            <div className="flex justify-between items-center group cursor-pointer">
              <span className="text-xs font-bold tracking-widest uppercase">Sustainability Impact</span>
              <Plus size={16} className="text-muted group-hover:text-primary transition-colors" />
            </div>
          </div>

          <div className="flex space-x-6 pt-4">
            <button className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
