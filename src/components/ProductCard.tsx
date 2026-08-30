import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col space-y-4"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-3 bg-white rounded-full shadow-lg hover:bg-accent hover:text-white transition-all">
            <Heart size={18} />
          </button>
          <button 
            onClick={() => addToCart(product, 1)}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-accent hover:text-white transition-all"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Link to={`/product/${product.id}`} className="block w-full py-2 bg-white text-primary text-center text-xs font-bold tracking-widest uppercase">
            Quick View
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <span className="text-[10px] text-muted font-bold tracking-[0.2em] uppercase">{product.category}</span>
        <Link to={`/product/${product.id}`} className="text-sm font-serif font-medium hover:text-accent transition-colors">
          {product.name}
        </Link>
        <span className="text-sm font-medium">₹{product.price}.00</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
