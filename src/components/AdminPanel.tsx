import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import type { Drink } from '../types';

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-brown-800 dark:text-brown-200">
                لوحة الإدارة
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                مرحباً {adminUser?.username} - {adminUser?.role === 'admin' ? 'مدير' : 'مشرف'}
              </p>
            </div>
            <button
              onClick={adminLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Menu Management */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-brown-800 dark:text-brown-200">
                  إدارة القائمة ({drinks.length} عنصر)
                </h2>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  إضافة مشروب جديد
                </button>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {drinks.map((drink) => (
                  <div key={drink.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-brown-800 dark:text-brown-200">
                          {drink.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {drink.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-gold-600 font-bold">
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
                      
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => setSelectedDrink(drink)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                        >
                          تعديل السعر
                        </button>
                        <button
                          onClick={() => toggleAvailability(drink.id)}
                          className={`px-3 py-1 rounded text-sm transition-colors ${
                            drink.isAvailable
                              ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                              : 'bg-green-500 hover:bg-green-600 text-white'
                          }`}
                        >
                          {drink.isAvailable ? 'إيقاف' : 'تفعيل'}
                        </button>
                        <button
                          onClick={() => deleteDrink(drink.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price History */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-brown-800 dark:text-brown-200">
                  تاريخ الأسعار
                </h2>
                <button
                  onClick={() => setShowPriceHistory(!showPriceHistory)}
                  className="text-gold-600 hover:text-gold-700 text-sm"
                >
                  {showPriceHistory ? 'إخفاء' : 'عرض الكل'}
                </button>
              </div>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {showPriceHistory && priceHistory.slice(0, 10).map((entry) => {
                  const drink = drinks.find(d => d.id === entry.drinkId);
                  return (
                    <div key={entry.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <div className="text-sm font-medium text-brown-800 dark:text-brown-200">
                        {drink?.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                        {entry.oldPrice} ← {entry.newPrice} جنيه
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        بواسطة: {entry.changedBy}
                      </div>
                      {entry.reason && (
                        <div className="text-xs text-gray-400 mt-1">
                          السبب: {entry.reason}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Add Drink Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-xl font-bold text-brown-800 dark:text-brown-200 mb-4">
                إضافة مشروب جديد
              </h3>
              
              <form onSubmit={handleAddDrink} className="space-y-4">
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
                
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={newDrinkForm.isAvailable}
                    onChange={(e) => setNewDrinkForm({...newDrinkForm, isAvailable: e.target.checked})}
                    className="rounded"
                  />
                  <label className="text-sm text-gray-700 dark:text-gray-300">متاح للطلب</label>
                </div>
                
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium"
                  >
                    إضافة
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg font-medium"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Price Update Modal */}
        {selectedDrink && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-xl font-bold text-brown-800 dark:text-brown-200 mb-4">
                تعديل سعر {selectedDrink.name}
              </h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  السعر الحالي: <span className="font-bold text-gold-600">{selectedDrink.price} جنيه</span>
                </p>
              </div>
              
              <div className="space-y-4">
                <input
                  type="number"
                  placeholder="السعر الجديد"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                
                <input
                  type="text"
                  placeholder="سبب التغيير (اختياري)"
                  value={priceReason}
                  onChange={(e) => setPriceReason(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                
                <div className="flex gap-3">
                  <button
                    onClick={() => handleUpdatePrice(selectedDrink.id)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
                  >
                    تحديث السعر
                  </button>
                  <button
                    onClick={() => setSelectedDrink(null)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg font-medium"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;