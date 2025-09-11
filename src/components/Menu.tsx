import React from 'react';
import { useStore } from '../store/useStore';
import DrinkCard from './DrinkCard';
import SearchAndFilter from './SearchAndFilter';

const Menu: React.FC = () => {
  const { drinks, searchTerm, selectedCategory } = useStore();

  // Filter drinks based on search and category
  const filteredDrinks = drinks.filter(drink => {
    const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (drink.description && drink.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || drink.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'hot':
        return 'المشروبات الساخنة ☕';
      case 'cold':
        return 'المشروبات الباردة 🥤';
      case 'icecream':
        return 'الآيس كريم 🍦';
      default:
        return 'جميع المشروبات 🍹';
    }
  };

  const getFilteredCount = () => {
    return filteredDrinks.length;
  };

  return (
    <section id="menu" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brown-800 dark:text-brown-200 mb-3 sm:mb-4">قائمة المشروبات</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
            اختر من بين أكثر من 52 نوع مشروب مختلف
          </p>
        </div>

        {/* Search and Filter */}
        <SearchAndFilter />

        {/* Results Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-md transition-colors duration-200 gap-2 sm:gap-0">
            <h3 className="text-lg sm:text-xl font-bold text-brown-800 dark:text-brown-200">
              {getCategoryTitle(selectedCategory)}
            </h3>
            <span className="bg-gold-100 dark:bg-gold-900 text-gold-700 dark:text-gold-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium text-sm sm:text-base">
              {getFilteredCount()} مشروب
            </span>
          </div>
        </div>

        {/* Drinks Grid */}
        {filteredDrinks.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredDrinks.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 sm:p-12 max-w-md mx-auto transition-colors duration-200">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">لا توجد نتائج</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                لم نجد أي مشروبات تطابق بحثك. جرب كلمات مختلفة أو تصفح جميع الفئات.
              </p>
              <button
                onClick={() => {
                  useStore.getState().setSearchTerm('');
                  useStore.getState().setSelectedCategory('all');
                }}
                className="bg-gold-500 hover:bg-gold-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition-colors text-sm sm:text-base"
              >
                عرض جميع المشروبات
              </button>
            </div>
          </div>
        )}

        {/* Category Statistics */}
        {selectedCategory === 'all' && (
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center shadow-lg transition-colors duration-200">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">☕</div>
              <div className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-1 sm:mb-2">
                {drinks.filter(d => d.category === 'hot').length}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">مشروب ساخن</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center shadow-lg transition-colors duration-200">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🥤</div>
              <div className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-1 sm:mb-2">
                {drinks.filter(d => d.category === 'cold').length}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">مشروب بارد</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center shadow-lg transition-colors duration-200">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🍦</div>
              <div className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-1 sm:mb-2">
                {drinks.filter(d => d.category === 'icecream').length}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">آيس كريم</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;