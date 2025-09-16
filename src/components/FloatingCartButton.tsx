import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

const FloatingCartButton: React.FC = () => {
  const { getCartItemsCount, getCartTotal } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  
  const cartItemsCount = getCartItemsCount();
  const cartTotal = getCartTotal();
  const isCartPage = location.pathname === '/cart';
  
  // Don't show the floating button if we're on the cart page or cart is empty
  if (isCartPage || cartItemsCount === 0) {
    return null;
  }

  return (
    <motion.div 
      className="fixed bottom-6 left-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <motion.button
        onClick={() => navigate('/cart')}
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl transition-all duration-300 p-4 md:p-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(34, 197, 94, 0.4)",
            "0 0 30px rgba(34, 197, 94, 0.8)",
            "0 0 20px rgba(34, 197, 94, 0.4)"
          ]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity },
          scale: { duration: 0.2 }
        }}
      >
        <div className="flex items-center space-x-3 space-x-reverse">
          {/* Cart Icon with Badge */}
          <div className="relative">
            <span className="text-xl md:text-2xl">🛒</span>
            {cartItemsCount > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {cartItemsCount > 9 ? '9+' : cartItemsCount}
              </motion.span>
            )}
          </div>
          
          {/* Cart Details - Hidden on mobile */}
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-bold">السلة</span>
            <span className="text-xs opacity-90">{cartTotal} جنيه</span>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default FloatingCartButton;