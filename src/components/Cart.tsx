import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal, selectedBranch, setSelectedBranch } = useStore();
  const navigate = useNavigate();

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    const orderDetails = cart
      .map(item => `${item.drink.name} - الكمية: ${item.quantity} - السعر: ${item.drink.price * item.quantity} جنيه`)
      .join('\n');

    const total = getCartTotal();
    const branchName = selectedBranch === 'new-cairo' ? 'القاهرة الجديدة' : 'الشروق';
    const message = ` طلب جديد من محمصة الماسة - فرع ${branchName} 

${orderDetails}

 المجموع الكلي: ${total} جنيه

يرجى تأكيد الطلب وإعلامي بوقت التحضير المتوقع. شكراً لكم! `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = selectedBranch === 'new-cairo' ? '+201098981616' : '+201122004410';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <section id="cart" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 sm:p-12 transition-colors duration-200">
              <motion.div 
                className="text-4xl sm:text-6xl text-gray-300 mx-auto mb-4 sm:mb-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                🛒
              </motion.div>
              <motion.h2 
                className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                السلة فارغة
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                لم تقم بإضافة أي مشروبات إلى السلة بعد. تصفح قائمتنا الرائعة واختر مشروباتك المفضلة!
              </motion.p>
              <motion.button
                onClick={() => navigate('/')}
                className="bg-gold-500 hover:bg-gold-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition-colors text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                تصفح القائمة
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cart" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown-800 dark:text-brown-200 mb-3 sm:mb-4">سلة المشروبات</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4 sm:px-0">مراجعة طلبك قبل الإرسال</p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <motion.div 
              className="xl:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-200">
                <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    <h3 className="text-lg sm:text-xl font-bold text-brown-800 dark:text-brown-200">المشروبات المختارة</h3>
                    <motion.button
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-800 flex items-center space-x-2 space-x-reverse text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm">🗑️</span>
                      <span>إفراغ السلة</span>
                    </motion.button>
                  </div>
                </div>

                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {cart.map((item, index) => (
                    <motion.div 
                      key={item.drink.id} 
                      className="p-4 sm:p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        {/* Drink Info */}
                        <div className="flex-1 w-full sm:w-auto">
                          <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-1 text-base sm:text-lg">{item.drink.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-2">{item.drink.description}</p>
                          <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4">
                            <span className="text-gold-600 font-bold text-lg">{item.drink.price} جنيه</span>
                            <span className="text-sm text-gray-500">
                              المجموع: {item.drink.price * item.quantity} جنيه
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between sm:justify-center w-full sm:w-auto gap-3">
                          <motion.button
                            onClick={() => updateQuantity(item.drink.id, item.quantity - 1)}
                            className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <span>-</span>
                          </motion.button>
                          
                          <span className="w-12 text-center font-bold text-brown-800 dark:text-brown-200 text-lg">
                            {item.quantity}
                          </span>
                          
                          <motion.button
                            onClick={() => updateQuantity(item.drink.id, item.quantity + 1)}
                            className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <span>+</span>
                          </motion.button>

                          {/* Remove Button */}
                          <motion.button
                            onClick={() => removeFromCart(item.drink.id)}
                            className="text-red-500 hover:text-red-700 p-2 transition-colors flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <span className="text-lg">🗑️</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div 
              className="xl:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 sticky top-24 transition-colors duration-200">
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-brown-800 dark:text-brown-200 mb-4 sm:mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  ملخص الطلب
                </motion.h3>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {cart.map((item, index) => (
                    <motion.div 
                      key={item.drink.id} 
                      className="flex justify-between text-xs sm:text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <span className="text-gray-600 dark:text-gray-300">
                        {item.drink.name} × {item.quantity}
                      </span>
                      <span className="font-medium">{item.drink.price * item.quantity} جنيه</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="border-t border-gray-100 dark:border-gray-700 pt-3 sm:pt-4 mb-4 sm:mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="flex justify-between text-base sm:text-lg font-bold text-brown-800 dark:text-brown-200">
                    <span>المجموع الكلي</span>
                    <span>{getCartTotal()} جنيه</span>
                  </div>
                </motion.div>

                {/* Branch Selection */}
                <motion.div 
                  className="mb-4 sm:mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <h4 className="text-base sm:text-lg font-bold text-brown-800 dark:text-brown-200 mb-3 sm:mb-4">اختر الفرع</h4>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    <motion.button
                      onClick={() => setSelectedBranch('new-cairo')}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-sm sm:text-base ${
                        selectedBranch === 'new-cairo'
                          ? 'border-gold-500 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300'
                          : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gold-300 dark:hover:border-gold-400'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-right">
                          <div className="font-bold text-brown-800 dark:text-brown-200">🏢 فرع القاهرة الجديدة</div>
                          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300" dir="ltr">010 9898 1616</div>
                        </div>
                        <div className="text-xl sm:text-2xl">
                          {selectedBranch === 'new-cairo' ? '✅' : '⚪'}
                        </div>
                      </div>
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setSelectedBranch('shorouk')}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-sm sm:text-base ${
                        selectedBranch === 'shorouk'
                          ? 'border-gold-500 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300'
                          : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gold-300 dark:hover:border-gold-400'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-right">
                          <div className="font-bold text-brown-800 dark:text-brown-200">🏢 فرع الشروق</div>
                          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300" dir="ltr">011 2200 4410</div>
                        </div>
                        <div className="text-xl sm:text-2xl">
                          {selectedBranch === 'shorouk' ? '✅' : '⚪'}
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </motion.div>

                <motion.button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all transform hover:scale-105"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg sm:text-xl">💬</span>
                  اطلب عبر واتساب
                </motion.button>

                <motion.div 
                  className="mt-3 sm:mt-4 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    سيتم توجيهك إلى واتساب لتأكيد الطلب
                  </p>
                  <p className="text-xs text-gray-500 mt-1" dir="ltr">
                    📱 {selectedBranch === 'new-cairo' ? '010 9898 1616' : '011 2200 4410'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;