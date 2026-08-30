import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-muted">
            <ShoppingBag size={40} />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-serif">Your Yuva Cart is Empty</h1>
          <p className="text-muted max-w-md mx-auto">
            Explore our curated collections and find the perfect textiles for your next project.
          </p>
        </div>
        <Link to="/shop" className="btn-primary inline-block">Start Exploring</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items */}
        <div className="flex-grow space-y-12">
          <div className="flex justify-between items-end border-b border-black/5 pb-8">
            <h1 className="text-4xl font-serif">Shopping Cart</h1>
            <span className="text-sm font-bold tracking-widest uppercase text-muted">{totalItems} Items</span>
          </div>

          <div className="space-y-12">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 pb-12 border-b border-black/5"
                >
                  <div className="w-full sm:w-40 aspect-[3/4] overflow-hidden bg-secondary">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">{item.category}</span>
                        <h3 className="text-xl font-serif">{item.name}</h3>
                        <p className="text-xs text-muted font-medium uppercase tracking-widest">{item.material}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end pt-8">
                      <div className="flex items-center border border-gray-200 h-10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 hover:text-accent transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 hover:text-accent transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold tracking-widest uppercase">₹{item.price * item.quantity}.00</p>
                        <p className="text-[10px] text-muted font-medium uppercase tracking-widest">₹{item.price}.00 / unit</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Link to="/shop" className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors">
            <ArrowRight className="rotate-180" size={14} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-secondary p-10 space-y-10 sticky top-32">
            <h2 className="text-2xl font-serif">Order Summary</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted font-medium uppercase tracking-widest">Subtotal</span>
                <span className="font-bold tracking-widest uppercase">₹{totalPrice}.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted font-medium uppercase tracking-widest">Shipping</span>
                <span className="font-bold tracking-widest uppercase text-accent">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted font-medium uppercase tracking-widest">Tax</span>
                <span className="font-bold tracking-widest uppercase">$0.00</span>
              </div>
              
              <div className="pt-6 border-t border-black/10">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-serif">Total</span>
                  <span className="text-xl font-bold tracking-widest uppercase">₹{totalPrice}.00</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase">Promo Code</h4>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-grow bg-white px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                />
                <button className="px-6 py-3 bg-primary text-white text-xs font-bold tracking-widest uppercase hover:bg-accent transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <Link 
              to="/checkout" 
              className="block w-full py-4 bg-primary text-white text-center text-sm font-bold tracking-widest uppercase hover:bg-accent transition-all active:scale-95"
            >
              Proceed to Checkout
            </Link>

            <div className="pt-4 flex justify-center space-x-4 opacity-40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
