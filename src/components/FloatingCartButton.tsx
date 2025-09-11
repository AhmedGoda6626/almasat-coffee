import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';

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
    <div className="fixed bottom-6 left-6 z-50 animate-float">
      <button
        onClick={() => navigate('/cart')}
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 p-4 md:p-5 animate-pulse-glow hover:animate-none"
      >
        <div className="flex items-center space-x-3 space-x-reverse">
          {/* Cart Icon with Badge */}
          <div className="relative">
            <span className="text-xl md:text-2xl">🛒</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartItemsCount > 9 ? '9+' : cartItemsCount}
              </span>
            )}
          </div>
          
          {/* Cart Details - Hidden on mobile */}
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-bold">السلة</span>
            <span className="text-xs opacity-90">{cartTotal} جنيه</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default FloatingCartButton;