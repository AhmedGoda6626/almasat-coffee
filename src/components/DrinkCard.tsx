import React from 'react';
import type { Drink } from '../types';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

interface DrinkCardProps {
  drink: Drink;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const { addToCart, cart, updateQuantity } = useStore();
  
  const cartItem = cart.find(item => item.drink.id === drink.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(drink);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    updateQuantity(drink.id, newQuantity);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hot':
        return '☕';
      case 'cold':
        return '🥤';
      case 'icecream':
        return '🍦';
      default:
        return '☕';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'hot':
        return 'مشروب ساخن';
      case 'cold':
        return 'مشروب بارد';
      case 'icecream':
        return 'آيس كريم';
      default:
        return 'مشروب';
    }
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      {/* Image Placeholder */}
      <div className="h-32 xs:h-40 sm:h-48 bg-gradient-to-br from-gold-100 to-brown-100 dark:from-gold-900 dark:to-brown-900 flex items-center justify-center">
        <motion.span 
          className="text-4xl xs:text-5xl sm:text-6xl"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {getCategoryIcon(drink.category)}
        </motion.span>
      </div>

      {/* Content */}
      <div className="p-3 xs:p-4 sm:p-6 flex flex-col flex-1">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <motion.span 
            className="bg-gold-100 dark:bg-gold-900 text-gold-700 dark:text-gold-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {getCategoryName(drink.category)}
          </motion.span>
          {drink.isAvailable ? (
            <motion.span 
              className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              متاح
            </motion.span>
          ) : (
            <motion.span 
              className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              غير متاح
            </motion.span>
          )}
        </div>

        {/* Name and Description */}
        <motion.h3 
          className="text-base sm:text-lg lg:text-xl font-bold text-brown-800 dark:text-brown-200 mb-2 line-clamp-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {drink.name}
        </motion.h3>
        {drink.description && (
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 flex-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {drink.description}
          </motion.p>
        )}

        {/* Price */}
        <motion.div 
          className="flex items-center justify-between mb-3 sm:mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gold-600">
            {drink.price} جنيه
          </span>
        </motion.div>

        {/* Add to Cart / Quantity Controls */}
        <div className="flex flex-col gap-2 mt-auto">
          {quantity === 0 ? (
            <motion.button
              onClick={handleAddToCart}
              disabled={!drink.isAvailable}
              className="flex-1 bg-gold-500 hover:bg-gold-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-bold transition-colors text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              أضف للسلة
            </motion.button>
          ) : (
            <>
              <motion.div 
                className="flex items-center justify-between w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <motion.button
                  onClick={() => handleUpdateQuantity(quantity - 1)}
                  className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white font-bold text-sm sm:text-lg">-</span>
                </motion.button>
                
                <div className="flex flex-col items-center mx-2 sm:mx-4">
                  <span className="text-base sm:text-lg font-bold text-brown-800 dark:text-brown-200">{quantity}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-300">في السلة</span>
                </div>
                
                <motion.button
                  onClick={() => handleUpdateQuantity(quantity + 1)}
                  className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white font-bold text-sm sm:text-lg">+</span>
                </motion.button>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DrinkCard;