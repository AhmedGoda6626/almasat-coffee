import React from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CartPage: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back to Home Button */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 pt-6">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 space-x-reverse text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors mb-6"
        >
          <span className="text-lg">🏠</span>
          <span className="font-medium">العودة للرئيسية</span>
        </Link>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <Cart />
      </motion.div>
    </motion.div>
  );
};

export default CartPage;