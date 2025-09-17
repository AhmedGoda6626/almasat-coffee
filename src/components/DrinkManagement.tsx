import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import type { Drink } from '../types';
import { motion } from 'framer-motion';

const DrinkManagement: React.FC = () => {
  const { drinks, addDrink, deleteDrink, updateDrink, toggleAvailability } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hot' | 'cold' | 'icecream'>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDrink, setEditingDrink] = useState<Drink | null>(null);

  const [newDrinkForm, setNewDrinkForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'hot' as 'hot' | 'cold' | 'icecream',
    isAvailable: true,
    isFeatured: false
  });

  // Filter drinks based on search and category
  const filteredDrinks = drinks.filter(drink => {
    const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          drink.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || drink.category === selectedCategory;
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
        isAvailable: newDrinkForm.isAvailable,
        isFeatured: newDrinkForm.isFeatured
      });
      setNewDrinkForm({
        name: '',
        description: '',
        price: '',
        category: 'hot',
        isAvailable: true,
        isFeatured: false
      });
      setShowAddForm(false);
    }
  };

  const handleUpdateDrink = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingDrink && newDrinkForm.name && newDrinkForm.price) {
      updateDrink(editingDrink.id, {
        name: newDrinkForm.name,
        description: newDrinkForm.description,
        price: parseFloat(newDrinkForm.price),
        category: newDrinkForm.category,
        isAvailable: newDrinkForm.isAvailable,
        isFeatured: newDrinkForm.isFeatured
      });
      setEditingDrink(null);
      setNewDrinkForm({
        name: '',
        description: '',
        price: '',
        category: 'hot',
        isAvailable: true,
        isFeatured: false
      });
    }
  };

  const startEditing = (drink: Drink) => {
    setEditingDrink(drink);
    setNewDrinkForm({
      name: drink.name,
      description: drink.description,
      price: drink.price.toString(),
      category: drink.category,
      isAvailable: drink.isAvailable,
      isFeatured: drink.isFeatured || false
    });
    setShowAddForm(true);
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'hot': return 'ساخن';
      case 'cold': return 'بارد';
      case 'icecream': return 'آيس كريم';
      default: return category;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="ابحث بالاسم..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full md:w-auto px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">جميع الفئات</option>
              <option value="hot">ساخن</option>
              <option value="cold">بارد</option>
              <option value="icecream">آيس كريم</option>
            </select>
          </div>
          <motion.button
            onClick={() => {
              setEditingDrink(null);
              setNewDrinkForm({
                name: '',
                description: '',
                price: '',
                category: 'hot',
                isAvailable: true,
                isFeatured: false
              });
              setShowAddForm(true);
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            إضافة مشروب جديد
          </motion.button>
        </div>
      </motion.div>

      {/* Drinks Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {filteredDrinks.map((drink, index) => (
          <motion.div 
            key={drink.id} 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-brown-800 dark:text-brown-200">{drink.name}</h3>
                {drink.isFeatured && (
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">
                    مميز
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {drink.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-200 px-2 py-1 rounded text-sm">
                  {drink.price} جنيه
                </span>
                <span className={`px-2 py-1 rounded text-sm ${
                  drink.isAvailable 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                }`}>
                  {drink.isAvailable ? 'متاح' : 'غير متاح'}
                </span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  {getCategoryName(drink.category)}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <motion.button
                  onClick={() => startEditing(drink)}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  تعديل
                </motion.button>
                <motion.button
                  onClick={() => toggleAvailability(drink.id)}
                  className={`flex-1 px-3 py-1 rounded text-sm transition-colors ${
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
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  حذف
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add/Edit Drink Modal */}
      {showAddForm && (
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
              {editingDrink ? 'تعديل مشروب' : 'إضافة مشروب جديد'}
            </h3>
            
            <form onSubmit={editingDrink ? handleUpdateDrink : handleAddDrink} className="space-y-4">
              <input
                type="text"
                placeholder="اسم المشروب"
                value={newDrinkForm.name}
                onChange={(e) => setNewDrinkForm({...newDrinkForm, name: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              
              <textarea
                placeholder="الوصف"
                value={newDrinkForm.description}
                onChange={(e) => setNewDrinkForm({...newDrinkForm, description: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={3}
              />
              
              <input
                type="number"
                placeholder="السعر (جنيه)"
                value={newDrinkForm.price}
                onChange={(e) => setNewDrinkForm({...newDrinkForm, price: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              
              <select
                value={newDrinkForm.category}
                onChange={(e) => setNewDrinkForm({...newDrinkForm, category: e.target.value as 'hot' | 'cold' | 'icecream'})}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="hot">مشروب ساخن</option>
                <option value="cold">مشروب بارد</option>
                <option value="icecream">آيس كريم</option>
              </select>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={newDrinkForm.isAvailable}
                    onChange={(e) => setNewDrinkForm({...newDrinkForm, isAvailable: e.target.checked})}
                    className="rounded"
                    id="available"
                  />
                  <label htmlFor="available" className="text-gray-700 dark:text-gray-300">متاح للطلب</label>
                </div>
                
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={newDrinkForm.isFeatured}
                    onChange={(e) => setNewDrinkForm({...newDrinkForm, isFeatured: e.target.checked})}
                    className="rounded"
                    id="featured"
                  />
                  <label htmlFor="featured" className="text-gray-700 dark:text-gray-300">مميز</label>
                </div>
              </div>
              
              <div className="flex gap-3">
                <motion.button
                  type="submit"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {editingDrink ? 'تحديث' : 'إضافة'}
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingDrink(null);
                  }}
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
  );
};

export default DrinkManagement;