import React from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
      
      <Cart />
    </div>
  );
};

export default CartPage;