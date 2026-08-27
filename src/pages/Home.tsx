import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const materials = [
    { name: 'Handspun Khadi', image: 'https://picsum.photos/seed/khadi-mat/600/800', desc: 'The fabric of freedom, breathable and organic.' },
    { name: 'Banarasi Silk', image: 'https://picsum.photos/seed/silk-mat/600/800', desc: 'Opulent zari work from the ghats of Varanasi.' },
    { name: 'Kashmiri Pashmina', image: 'https://picsum.photos/seed/wool-mat/600/800', desc: 'The world\'s finest wool, hand-woven in the valley.' },
    { name: 'Pochampally Ikat', image: 'https://picsum.photos/seed/ikat-mat/600/800', desc: 'Vibrant geometric patterns from Telangana.' },
  ];

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/textile-hero/1920/1080"
            alt="Textile Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl space-y-8"
          >
            <span className="text-sm font-bold tracking-[0.4em] uppercase">Est. 2026</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">
              The Art of <br />
              <span className="italic">Fine Weaving</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
              Discover a curated collection of high-end textiles, ethically sourced and crafted for the modern artisan.
            </p>
            <div className="flex space-x-6 pt-4">
              <Link to="/shop" className="btn-primary bg-white text-primary hover:bg-accent hover:text-white">
                Explore Collection
              </Link>
              <button className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <Play size={16} fill="currentColor" />
                </div>
                <span className="text-sm font-bold tracking-widest uppercase">Our Story</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Material Palette */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">The Palette</span>
            <h2 className="text-4xl md:text-5xl font-serif">Artisan Materials</h2>
          </div>
          <Link to="/materials" className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors">
            <span>View All Materials</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((mat, idx) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={mat.image}
                  alt={mat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-serif mb-2">{mat.name}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {mat.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-secondary py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">New Arrivals</span>
            <h2 className="text-4xl md:text-5xl font-serif">The Heritage Collection</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/shop" className="btn-secondary">
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src="https://picsum.photos/seed/newsletter/1920/1080"
            alt="Newsletter Background"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          
          <div className="relative z-10 text-center text-white space-y-8 max-w-2xl px-4">
            <h2 className="text-4xl md:text-6xl font-serif">Join Yuva</h2>
            <p className="text-lg text-gray-300">
              Subscribe to receive updates on new collections, artisan stories, and exclusive events.
            </p>
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button type="submit" className="btn-primary bg-white text-primary hover:bg-accent hover:text-white whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
