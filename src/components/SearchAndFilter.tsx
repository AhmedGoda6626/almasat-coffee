import React from 'react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

const SearchAndFilter: React.FC = () => {
  const { searchTerm, selectedCategory, setSearchTerm, setSelectedCategory } = useStore();

  const categories = [
    { value: 'all', label: 'جميع المشروبات', icon: '🍹' },
    { value: 'hot', label: 'المشروبات الساخنة', icon: '☕' },
    { value: 'cold', label: 'المشروبات الباردة', icon: '🥤' },
    { value: 'icecream', label: 'الآيس كريم', icon: '🍦' },
  ];

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Search */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="relative">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg">🔍</span>
            <motion.input
              type="text"
              placeholder="ابحث عن مشروبك المفضل..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 sm:pr-12 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-right transition-colors duration-200 text-sm sm:text-base"
              whileFocus={{ scale: 1.02 }}
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="w-full lg:w-80"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="relative">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg">📊</span>
            <motion.select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as 'all' | 'hot' | 'cold' | 'icecream')}
              className="w-full pr-10 sm:pr-12 pl-3 sm:pl-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent appearance-none text-right bg-white transition-colors duration-200 text-sm sm:text-base"
              whileFocus={{ scale: 1.02 }}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.icon} {category.label}
                </option>
              ))}
            </motion.select>
          </div>
        </motion.div>
      </div>

      {/* Category Buttons - Mobile Friendly */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.value}
            onClick={() => setSelectedCategory(category.value as 'all' | 'hot' | 'cold' | 'icecream')}
            className={`p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === category.value
                ? 'bg-gold-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gold-100 dark:hover:bg-gray-600 hover:text-gold-700 dark:hover:text-gold-400'
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.4 + index * 0.05 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            animate={selectedCategory === category.value ? { scale: [1, 1.05, 1] } : {}}
          >
            <span className="block text-base sm:text-lg mb-1">{category.icon}</span>
            <span className="block leading-tight">{category.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SearchAndFilter;