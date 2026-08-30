import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      clearCart();
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center space-y-12">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex justify-center"
        >
          <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center text-accent">
            <CheckCircle2 size={64} />
          </div>
        </motion.div>
        
        <div className="space-y-6">
          <h1 className="text-5xl font-serif">Order Confirmed</h1>
          <p className="text-muted text-lg max-w-md mx-auto">
            Your order #AT-92837 has been placed successfully. We've sent a confirmation email with all the details.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/account/orders" className="btn-primary">View My Orders</Link>
          <Link to="/shop" className="btn-secondary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Checkout Form */}
        <div className="flex-grow space-y-16">
          {/* Stepper */}
          <div className="flex items-center space-x-8 border-b border-black/5 pb-12">
            <div className={`flex items-center space-x-4 ${step >= 1 ? 'text-primary' : 'text-muted'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-secondary'}`}>1</div>
              <span className="text-xs font-bold tracking-widest uppercase">Shipping</span>
            </div>
            <div className="h-px w-12 bg-black/5" />
            <div className={`flex items-center space-x-4 ${step >= 2 ? 'text-primary' : 'text-muted'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-secondary'}`}>2</div>
              <span className="text-xs font-bold tracking-widest uppercase">Payment</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-12"
              >
                <div className="space-y-8">
                  <h2 className="text-3xl font-serif">Shipping Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted">First Name</label>
                      <input type="text" className="w-full bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Last Name</label>
                      <input type="text" className="w-full bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Address</label>
                      <input type="text" className="w-full bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted">City</label>
                      <input type="text" className="w-full bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Postal Code</label>
                      <input type="text" className="w-full bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h2 className="text-3xl font-serif">Shipping Method</h2>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-6 bg-secondary border border-transparent hover:border-accent cursor-pointer transition-all">
                      <div className="flex items-center space-x-4">
                        <input type="radio" name="shipping" defaultChecked className="accent-primary" />
                        <div className="space-y-1">
                          <p className="text-sm font-bold tracking-widest uppercase">Standard Pan-India Shipping</p>
                          <p className="text-xs text-muted">5-7 Business Days</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold uppercase">Free</span>
                    </label>
                    <label className="flex items-center justify-between p-6 bg-secondary border border-transparent hover:border-accent cursor-pointer transition-all">
                      <div className="flex items-center space-x-4">
                        <input type="radio" name="shipping" className="accent-primary" />
                        <div className="space-y-1">
                          <p className="text-sm font-bold tracking-widest uppercase">Express Artisan Delivery</p>
                          <p className="text-xs text-muted">1-2 Business Days</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold uppercase">₹500.00</span>
                    </label>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="btn-primary w-full sm:w-auto"
                >
                  Continue to Payment
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-12"
              >
                <div className="space-y-8">
                  <h2 className="text-3xl font-serif">Payment Details</h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-secondary pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold tracking-widest uppercase text-muted">CVV</label>
                        <input type="text" placeholder="123" className="w-full bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <button 
                    onClick={() => setStep(1)}
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <ArrowLeft size={16} />
                    <span>Back to Shipping</span>
                  </button>
                  <button 
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="btn-primary flex-grow flex items-center justify-center space-x-4"
                  >
                    {isProcessing ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Place Order</span>
                        <ChevronRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-secondary p-10 space-y-10 sticky top-32">
            <h2 className="text-2xl font-serif">Your Order</h2>
            
            <div className="space-y-6 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <div className="w-16 h-20 bg-white overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow space-y-1">
                    <p className="text-xs font-bold tracking-widest uppercase truncate">{item.name}</p>
                    <p className="text-[10px] text-muted uppercase tracking-widest">{item.quantity} x ₹{item.price}.00</p>
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase">₹{item.price * item.quantity}.00</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-10 border-t border-black/10">
              <div className="flex justify-between text-sm">
                <span className="text-muted font-medium uppercase tracking-widest">Subtotal</span>
                <span className="font-bold tracking-widest uppercase">₹{totalPrice}.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted font-medium uppercase tracking-widest">Shipping</span>
                <span className="font-bold tracking-widest uppercase text-accent">Free</span>
              </div>
              <div className="pt-6 border-t border-black/10">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-serif">Total</span>
                  <span className="text-xl font-bold tracking-widest uppercase">₹{totalPrice}.00</span>
                </div>
              </div>
            </div>

            <div className="bg-white/50 p-6 space-y-4">
              <div className="flex items-center space-x-4 text-accent">
                <Truck size={20} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Artisan Packaging Included</span>
              </div>
              <p className="text-[10px] text-muted leading-relaxed">
                Every order is hand-wrapped in our signature sustainable linen packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
