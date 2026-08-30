import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, Settings, LogOut, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const orders = [
    { id: 'AT-92837', date: 'March 24, 2026', status: 'Delivered', total: 170.00, items: 2 },
    { id: 'AT-91042', date: 'February 12, 2026', status: 'Shipped', total: 85.00, items: 1 },
    { id: 'AT-88271', date: 'January 05, 2026', status: 'Cancelled', total: 120.00, items: 1 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-12">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-accent text-2xl font-serif">
              MS
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-serif">Manaswin S.</h2>
              <p className="text-xs text-muted font-medium uppercase tracking-widest">Artisan Member</p>
            </div>
          </div>

          <nav className="flex flex-col space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between p-4 text-xs font-bold tracking-widest uppercase transition-all ${
                  activeTab === tab.id ? 'bg-primary text-white' : 'hover:bg-secondary text-muted hover:text-primary'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </div>
                <ChevronRight size={14} className={activeTab === tab.id ? 'opacity-100' : 'opacity-0'} />
              </button>
            ))}
            <button className="flex items-center space-x-4 p-4 text-xs font-bold tracking-widest uppercase text-red-500 hover:bg-red-50 transition-all mt-8">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-grow min-h-[60vh]">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                <h1 className="text-4xl font-serif">Your Profile</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Full Name</label>
                    <p className="text-sm font-medium border-b border-black/5 pb-4">Manaswin Sripatnala</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Email Address</label>
                    <p className="text-sm font-medium border-b border-black/5 pb-4">manaswin@yuva.com</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Phone Number</label>
                    <p className="text-sm font-medium border-b border-black/5 pb-4">+91 1234567890</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Member Since</label>
                    <p className="text-sm font-medium border-b border-black/5 pb-4">January 2026</p>
                  </div>
                </div>
                <button className="btn-secondary">Edit Profile</button>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                <h1 className="text-4xl font-serif">Order History</h1>
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="p-8 bg-secondary flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
                      <div className="space-y-2">
                        <p className="text-xs font-bold tracking-widest uppercase text-muted">Order {order.id}</p>
                        <p className="text-sm font-serif">{order.date}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-bold tracking-widest uppercase text-muted">Status</p>
                        <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-bold tracking-widest uppercase text-muted">Total</p>
                        <p className="text-sm font-bold tracking-widest uppercase">₹{order.total}.00</p>
                      </div>
                      <button className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase hover:text-accent transition-colors">
                        <span>Details</span>
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'wishlist' && (
              <motion.div
                key="wishlist"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                <h1 className="text-4xl font-serif">Your Wishlist</h1>
                <div className="text-center py-20 bg-secondary space-y-6">
                  <Heart size={48} className="mx-auto text-muted opacity-30" />
                  <p className="text-muted text-sm uppercase tracking-widest font-medium">Your wishlist is empty</p>
                  <Link to="/shop" className="btn-primary inline-block">Explore Collection</Link>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                <h1 className="text-4xl font-serif">Account Settings</h1>
                <div className="space-y-8">
                  <div className="flex justify-between items-center py-6 border-b border-black/5">
                    <div className="space-y-1">
                      <p className="text-sm font-bold tracking-widest uppercase">Email Notifications</p>
                      <p className="text-xs text-muted">Receive updates on orders and artisan stories.</p>
                    </div>
                    <div className="w-12 h-6 bg-accent rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-6 border-b border-black/5">
                    <div className="space-y-1">
                      <p className="text-sm font-bold tracking-widest uppercase">Two-Factor Authentication</p>
                      <p className="text-xs text-muted">Add an extra layer of security to your account.</p>
                    </div>
                    <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <button className="text-xs font-bold tracking-widest uppercase text-red-500 hover:underline underline-offset-8">
                      Delete Account
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Account;
