import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import type { Drink } from '../types';
import { motion } from 'framer-motion';

const AdminPanel: React.FC = () => {
  const { 
    drinks, 
    adminUser, 
    adminLogout, 
    addDrink, 
    deleteDrink, 
    updatePrice, 
    toggleAvailability,
    getPriceHistory 
  } = useStore();

  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showPriceHistory, setShowPriceHistory] = useState(false);
  const [newPrice, setNewPrice] = useState('');
  const [priceReason, setPriceReason] = useState('');

  const [newDrinkForm, setNewDrinkForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'hot' as 'hot' | 'cold' | 'icecream',
    isAvailable: true
  });

  const handleAddDrink = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDrinkForm.name && newDrinkForm.price) {
      addDrink({
        name: newDrinkForm.name,
        description: newDrinkForm.description,
        price: parseFloat(newDrinkForm.price),
        category: newDrinkForm.category,
        isAvailable: newDrinkForm.isAvailable
      });
      setNewDrinkForm({
        name: '',
        description: '',
        price: '',
        category: 'hot',
        isAvailable: true
      });
      setShowAddForm(false);
    }
  };

  const handleUpdatePrice = (drinkId: string) => {
    if (newPrice && parseFloat(newPrice) > 0) {
      updatePrice(drinkId, parseFloat(newPrice), priceReason);
      setNewPrice('');
      setPriceReason('');
      setSelectedDrink(null);
    }
  };

  const priceHistory = getPriceHistory();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-brown-800 dark:text-brown-200">
                لوحة الإدارة
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm sm:text-base">
                مرحباً {adminUser?.username} - {adminUser?.role === 'admin' ? 'مدير' : 'مشرف'}
              </p>
            </div>
            <motion.button
              onClick={adminLogout}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              تسجيل الخروج
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Menu Management */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-brown-800 dark:text-brown-200">
                  إدارة القائمة ({drinks.length} عنصر)
                </h2>
                <motion.button
                  onClick={() => setShowAddForm(true)}
                  className="w-full xs:w-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  إضافة مشروب جديد
                </motion.button>
              </div>

              <div className="space-y-3 sm:space-y-4 max-h-[500px] overflow-y-auto">
                {drinks.map((drink, index) => (
                  <motion.div 
                    key={drink.id} 
                    className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 sm:p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-brown-800 dark:text-brown-200 text-sm sm:text-base">
                          {drink.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">
                          {drink.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                          <span className="text-gold-600 font-bold text-sm">
                            {drink.price} جنيه
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            drink.isAvailable 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {drink.isAvailable ? 'متاح' : 'غير متاح'}
                          </span>
                          <span className="text-xs text-gray-500">
                            {drink.category === 'hot' ? 'ساخن' : drink.category === 'cold' ? 'بارد' : 'آيس كريم'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                        <motion.button
                          onClick={() => setSelectedDrink(drink)}
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          تعديل السعر
                        </motion.button>
                        <motion.button
                          onClick={() => toggleAvailability(drink.id)}
                          className={`flex-1 px-3 py-1 rounded text-xs sm:text-sm transition-colors ${
                            drink.isAvailable
                              ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                              : 'bg-green-500 hover:bg-green-600 text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {drink.isAvailable ? 'إيقاف' : 'تفعيل'}
                        </motion.button>
                        <motion.button
                          onClick={() => deleteDrink(drink.id)}
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          حذف
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price History */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-brown-800 dark:text-brown-200">
                  تاريخ الأسعار
                </h2>
                <motion.button
                  onClick={() => setShowPriceHistory(!showPriceHistory)}
                  className="text-gold-600 hover:text-gold-700 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showPriceHistory ? 'إخفاء' : 'عرض الكل'}
                </motion.button>
              </div>
              
              <div className="space-y-2 sm:space-y-3 max-h-64 overflow-y-auto">
                {showPriceHistory && priceHistory.slice(0, 10).map((entry, index) => {
                  const drink = drinks.find(d => d.id === entry.drinkId);
                  return (
                    <motion.div 
                      key={entry.id} 
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="text-sm font-medium text-brown-800 dark:text-brown-200 line-clamp-1">
                        {drink?.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                        {entry.oldPrice} ← {entry.newPrice} جنيه
                      </div>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                        بواسطة: {entry.changedBy}
                      </div>
                      {entry.reason && (
                        <div className="text-xs text-gray-400 mt-1 line-clamp-1">
                          السبب: {entry.reason}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Add Drink Modal */}
        {showAddForm && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 w-full max-w-md mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-brown-800 dark:text-brown-200 mb-3 sm:mb-4">
                إضافة مشروب جديد
              </h3>
              
              <form onSubmit={handleAddDrink} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="اسم المشروب"
                  value={newDrinkForm.name}
                  onChange={(e) => setNewDrinkForm({...newDrinkForm, name: e.target.value})}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm sm:text-base"
                  required
                />
                
                <textarea
                  placeholder="الوصف"
                  value={newDrinkForm.description}
                  onChange={(e) => setNewDrinkForm({...newDrinkForm, description: e.target.value})}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm sm:text-base"
                  rows={2}
                />
                
                <input
                  type="number"
                  placeholder="السعر (جنيه)"
                  value={newDrinkForm.price}
                  onChange={(e) => setNewDrinkForm({...newDrinkForm, price: e.target.value})}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm sm:text-base"
                  required
                />
                
                <select
                  value={newDrinkForm.category}
                  onChange={(e) => setNewDrinkForm({...newDrinkForm, category: e.target.value as 'hot' | 'cold' | 'icecream'})}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm sm:text-base"
                >
                  <option value="hot">مشروب ساخن</option>
                  <option value="cold">مشروب بارد</option>
                  <option value="icecream">آيس كريم</option>
                </select>
                
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={newDrinkForm.isAvailable}
                    onChange={(e) => setNewDrinkForm({...newDrinkForm, isAvailable: e.target.checked})}
                    className="rounded"
                  />
                  <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">متاح للطلب</label>
                </div>
                
                <div className="flex gap-2 sm:gap-3">
                  <motion.button
                    type="submit"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    إضافة
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    إلغاء
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Price Update Modal */}
        {selectedDrink && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 w-full max-w-md mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-brown-800 dark:text-brown-200 mb-3 sm:mb-4">
                تعديل سعر {selectedDrink.name}
              </h3>
              
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  السعر الحالي: <span className="font-bold text-gold-600">{selectedDrink.price} جنيه</span>
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <input
                  type="number"
                  placeholder="السعر الجديد"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm sm:text-base"
                />
                
                <input
                  type="text"
                  placeholder="سبب التغيير (اختياري)"
                  value={priceReason}
                  onChange={(e) => setPriceReason(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm sm:text-base"
                />
                
                <div className="flex gap-2 sm:gap-3">
                  <motion.button
                    onClick={() => handleUpdatePrice(selectedDrink.id)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    تحديث السعر
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedDrink(null)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    إلغاء
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;