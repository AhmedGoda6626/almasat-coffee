import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { PieChart, Coffee, Star, ShoppingCart, LogOut, Search, Filter, Plus, Edit, Eye, EyeOff, History } from 'lucide-react';

const AdminPage: React.FC = () => {
  const { 
    drinks, 
    adminUser, 
    adminLogout, 
    addDrink, 
    deleteDrink, 
    updatePrice, 
    toggleAvailability,
    getPriceHistory,
    cart
  } = useStore();

  const [activeTab, setActiveTab] = useState<'stats' | 'drinks'>('stats');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'hot' | 'cold' | 'icecream'>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null);
  const [newPrice, setNewPrice] = useState('');
  const [priceReason, setPriceReason] = useState('');
  const [newDrinkForm, setNewDrinkForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'hot' as 'hot' | 'cold' | 'icecream',
    isAvailable: true
  });

  // Calculate statistics
  const totalDrinks = drinks.length;
  const totalRatings = 0; // We don't have a rating system in the current data
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const averageRating = 0; // We don't have a rating system in the current data
  
  // Calculate category distribution
  const categoryDistribution = {
    hot: drinks.filter(d => d.category === 'hot').length,
    cold: drinks.filter(d => d.category === 'cold').length,
    icecream: drinks.filter(d => d.category === 'icecream').length
  };
  
  // Get price history
  const priceHistory = getPriceHistory();

  // Filter drinks based on search and category
  const filteredDrinks = drinks.filter(drink => {
    const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || drink.category === categoryFilter;
    return matchesSearch && matchesCategory;
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

  // Check if user has admin privileges
  const isAdmin = adminUser?.role === 'admin' || adminUser?.role === 'manager';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-brown-800 dark:text-brown-200">
                لوحة تحكم الإدارة - محمصة الماسة
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {adminUser 
                  ? `مرحباً ${adminUser.username} - ${adminUser.role === 'admin' ? 'مدير' : 'مشرف'}` 
                  : 'لوحة التحكم'}
              </p>
            </div>
            {adminUser && (
              <motion.button
                onClick={adminLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut size={18} />
                <span>تسجيل الخروج</span>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === 'stats'
                ? 'text-gold-600 border-b-2 border-gold-500'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            الإحصائيات
          </button>
          <button
            onClick={() => setActiveTab('drinks')}
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === 'drinks'
                ? 'text-gold-600 border-b-2 border-gold-500'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            إدارة المشروبات
          </button>
        </div>

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                    <Coffee className="text-blue-500 dark:text-blue-400" size={24} />
                  </div>
                  <div className="mr-4">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">إجمالي المشروبات</p>
                    <p className="text-2xl font-bold text-brown-800 dark:text-brown-200">{totalDrinks}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/50">
                    <Star className="text-yellow-500 dark:text-yellow-400" size={24} />
                  </div>
                  <div className="mr-4">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">إجمالي التقييمات</p>
                    <p className="text-2xl font-bold text-brown-800 dark:text-brown-200">{totalRatings}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/50">
                    <ShoppingCart className="text-green-500 dark:text-green-400" size={24} />
                  </div>
                  <div className="mr-4">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">المنتجات في السلات</p>
                    <p className="text-2xl font-bold text-brown-800 dark:text-brown-200">{cartItemsCount}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                    <Star className="text-purple-500 dark:text-purple-400" size={24} />
                  </div>
                  <div className="mr-4">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">متوسط التقييم</p>
                    <p className="text-2xl font-bold text-brown-800 dark:text-brown-200">{averageRating.toFixed(1)}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Category Distribution Pie Chart */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <PieChart className="text-brown-600 dark:text-brown-400" size={20} />
                  <h3 className="text-lg font-bold text-brown-800 dark:text-brown-200">توزيع المشروبات حسب الفئة</h3>
                </div>
                <div className="flex items-center justify-center h-64">
                  <div className="relative w-48 h-48 rounded-full border-8 border-blue-500 dark:border-blue-400" 
                       style={{ 
                         borderTopColor: '#f59e0b',
                         borderRightColor: '#10b981',
                         borderBottomColor: '#8b5cf6'
                       }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-brown-800 dark:text-brown-200">{totalDrinks}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">إجمالي</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">ساخن ({categoryDistribution.hot})</p>
                  </div>
                  <div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">بارد ({categoryDistribution.cold})</p>
                  </div>
                  <div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">آيس كريم ({categoryDistribution.icecream})</p>
                  </div>
                </div>
              </motion.div>

              {/* Price History */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <History className="text-brown-600 dark:text-brown-400" size={20} />
                  <h3 className="text-lg font-bold text-brown-800 dark:text-brown-200">تاريخ الأسعار</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {priceHistory.length > 0 ? (
                    <div className="space-y-3">
                      {priceHistory.slice(0, 10).map((entry, index) => {
                        const drink = drinks.find(d => d.id === entry.drinkId);
                        return (
                          <motion.div 
                            key={entry.id} 
                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <div>
                              <p className="font-medium text-brown-800 dark:text-brown-200 text-sm">{drink?.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                بواسطة: {entry.changedBy}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold text-gold-600">
                                {entry.oldPrice} → {entry.newPrice} جنيه
                              </p>
                              {entry.reason && (
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[100px]">
                                  {entry.reason}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <p>لا توجد تغييرات في الأسعار</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Drinks Management Tab */}
        {activeTab === 'drinks' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Search and Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="البحث بالاسم..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value as 'all' | 'hot' | 'cold' | 'icecream')}
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white appearance-none"
                  >
                    <option value="all">جميع الفئات</option>
                    <option value="hot">ساخن</option>
                    <option value="cold">بارد</option>
                    <option value="icecream">آيس كريم</option>
                  </select>
                </div>
                {isAdmin && (
                  <motion.button
                    onClick={() => setShowAddForm(true)}
                    className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus size={18} />
                    <span>إضافة مشروب جديد</span>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Drinks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrinks.map((drink, index) => (
                <motion.div 
                  key={drink.id} 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg text-brown-800 dark:text-brown-200">{drink.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        drink.isAvailable 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400' 
                          : 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400'
                      }`}>
                        {drink.isAvailable ? 'متاح' : 'غير متاح'}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {drink.description || 'لا يوجد وصف'}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gold-600 font-bold text-lg">{drink.price} جنيه</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                        {drink.category === 'hot' ? 'ساخن' : drink.category === 'cold' ? 'بارد' : 'آيس كريم'}
                      </span>
                    </div>
                    {isAdmin && (
                      <div className="flex gap-2">
                        <motion.button
                          onClick={() => setSelectedDrink(selectedDrink === drink.id ? null : drink.id)}
                          className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Edit size={16} />
                          <span>تعديل السعر</span>
                        </motion.button>
                        <motion.button
                          onClick={() => toggleAvailability(drink.id)}
                          className={`flex items-center justify-center gap-1 py-2 rounded-lg text-sm transition-colors ${
                            drink.isAvailable
                              ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                              : 'bg-green-500 hover:bg-green-600 text-white'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {drink.isAvailable ? <EyeOff size={16} /> : <Eye size={16} />}
                        </motion.button>
                        <motion.button
                          onClick={() => deleteDrink(drink.id)}
                          className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>حذف</span>
                        </motion.button>
                      </div>
                    )}
                  </div>
                  
                  {/* Price Update Form */}
                  {selectedDrink === drink.id && isAdmin && (
                    <motion.div 
                      className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-700"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-3">
                        <input
                          type="number"
                          placeholder="السعر الجديد"
                          value={newPrice}
                          onChange={(e) => setNewPrice(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-600 dark:text-white"
                        />
                        <input
                          type="text"
                          placeholder="سبب التغيير (اختياري)"
                          value={priceReason}
                          onChange={(e) => setPriceReason(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-600 dark:text-white"
                        />
                        <div className="flex gap-2">
                          <motion.button
                            onClick={() => handleUpdatePrice(drink.id)}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            تحديث السعر
                          </motion.button>
                          <motion.button
                            onClick={() => setSelectedDrink(null)}
                            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg text-sm transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            إلغاء
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Add Drink Modal */}
        {showAddForm && isAdmin && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-brown-800 dark:text-brown-200 mb-4">
                إضافة مشروب جديد
              </h3>
              
              <form onSubmit={handleAddDrink} className="space-y-4">
                <input
                  type="text"
                  placeholder="اسم المشروب"
                  value={newDrinkForm.name}
                  onChange={(e) => setNewDrinkForm({...newDrinkForm, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
                
                <textarea
                  placeholder="الوصف"
                  value={newDrinkForm.description}
                  onChange={(e) => setNewDrinkForm({...newDrinkForm, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  rows={3}
                />
                
                <input
                  type="number"
                  placeholder="السعر (جنيه)"
                  value={newDrinkForm.price}
                  onChange={(e) => setNewDrinkForm({...newDrinkForm, price: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  required
                />
                
                <select
                  value={newDrinkForm.category}
                  onChange={(e) => setNewDrinkForm({...newDrinkForm, category: e.target.value as 'hot' | 'cold' | 'icecream'})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
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
                  <label className="text-gray-700 dark:text-gray-300">متاح للطلب</label>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    type="submit"
                    className="flex-1 bg-gold-500 hover:bg-gold-600 text-white py-2 rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    إضافة
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg font-medium"
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
      </div>
    </div>
  );
};

export default AdminPage;