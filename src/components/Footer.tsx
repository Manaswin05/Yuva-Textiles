import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif tracking-widest uppercase">Yuva</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Curating the world's finest textiles for the modern artisan. Sustainable, ethical, and timeless.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Collections</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shop?category=khadi" className="hover:text-white transition-colors">Handspun Khadi</Link></li>
              <li><Link to="/shop?category=silk" className="hover:text-white transition-colors">Banarasi Silk</Link></li>
              <li><Link to="/shop?category=chanderi" className="hover:text-white transition-colors">Chanderi Weave</Link></li>
              <li><Link to="/shop?category=ikat" className="hover:text-white transition-colors">Pochampally Ikat</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Information</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Join Yuva for exclusive releases and artisan stories.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-gray-600 py-2 flex-grow text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button type="submit" className="ml-4 text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© 2026 Yuva Textiles. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
