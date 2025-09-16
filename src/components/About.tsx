import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown-800 dark:text-brown-200 mb-3 sm:mb-4">عن محمصة الماسة</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4 sm:px-0">
              قصة شغف بالقهوة وحب تقديم الأفضل
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-brown-800 dark:text-brown-200 mb-4 sm:mb-6">قصتنا</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                تأسست محمصة الماسة من حلم بسيط: تقديم أجود أنواع القهوة والمشروبات 
                في الدقهلية - بلقاس. نحن نؤمن بأن كل كوب قهوة هو لحظة سعادة تستحق 
                أن تكون مثالية.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                منذ انطلاقتنا، نسعى لتوفير تجربة استثنائية لعملائنا من خلال 
                استخدام أجود أنواع البن وأحدث طرق التحضير، مع الحفاظ على الطعم 
                الأصيل والجودة العالية.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                اليوم، نفخر بتقديم أكثر من 52 نوع مشروب مختلف، من القهوة التركي 
                التقليدي إلى أحدث مشروبات الآيس كريم والمشروبات الباردة.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gold-100 to-brown-100 dark:from-gray-600 dark:to-gray-500 rounded-2xl p-8 transition-colors duration-200">
                <motion.span 
                  className="text-6xl text-brown-600 dark:text-gold-400 block mx-auto mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  ☕
                </motion.span>
                <h4 className="text-xl font-bold text-brown-800 dark:text-brown-200 mb-2">رؤيتنا</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  أن نكون المحمصة الأولى المفضلة لمحبي القهوة في المنطقة
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-brown-800 dark:text-brown-200 text-center mb-12">قيمنا ومبادئنا</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gold-100 dark:bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                  <span className="text-2xl text-gold-600 dark:text-gold-400">🏆</span>
                </div>
                <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">الجودة العالية</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  نستخدم أجود أنواع البن والمكونات الطبيعية
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gold-100 dark:bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                  <span className="text-2xl text-gold-600 dark:text-gold-400">❤️</span>
                </div>
                <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">الشغف والحب</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  نحضر كل مشروب بحب وعناية فائقة
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gold-100 dark:bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                  <span className="text-2xl text-gold-600 dark:text-gold-400">👥</span>
                </div>
                <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">خدمة العملاء</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  رضا عملائنا هو أولويتنا الأولى
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gold-100 dark:bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                  <span className="text-2xl text-gold-600 dark:text-gold-400">☕</span>
                </div>
                <h4 className="font-bold text-brown-800 dark:text-brown-200 mb-2">الأصالة</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  نحافظ على الطعم الأصيل مع لمسة عصرية
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="bg-gradient-to-r from-gold-50 to-brown-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 text-center mb-16 transition-colors duration-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-brown-800 dark:text-brown-200 mb-4">رسالتنا</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              نسعى لتقديم تجربة قهوة استثنائية لكل عميل، من خلال الجمع بين الجودة العالية 
              والخدمة المتميزة والأسعار المناسبة. هدفنا هو جعل كل زيارة لمحمصة الماسة 
              ذكرى جميلة وتجربة لا تُنسى.
            </p>
          </motion.div>

          {/* Online Presence Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-brown-800 dark:text-brown-200 text-center mb-12">تابعنا أونلاين</h3>
            <div className="bg-gradient-to-r from-gold-50 to-brown-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 transition-colors duration-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-xl font-bold text-brown-800 dark:text-brown-200 mb-4">اكتشف عالمنا</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    تابعنا على منصات التواصل الاجتماعي للحصول على آخر الأخبار والعروض الخاصة
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <span className="text-lg">📸</span>
                      <span className="text-gray-700 dark:text-gray-300">@almasah_roastery - صور منتجاتنا وعروضنا</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <span className="text-lg">👥</span>
                      <span className="text-gray-700 dark:text-gray-300">صفحتنا على فيسبوك - أخبار وتحديثات</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <span className="text-lg">💬</span>
                      <span className="text-gray-700 dark:text-gray-300">واتساب - للطلبات السريعة</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <span className="text-lg">🎤</span>
                      <span className="text-gray-700 dark:text-gray-300">@almasahroastery - فيديوهات مميزة ومحتوى مبدع</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg transition-colors duration-200">
                    <h5 className="font-bold text-brown-800 dark:text-brown-200 mb-4">معلومات العمل</h5>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>📞 010 9898 1616</p>
                      <p>📧 info@almasahroastery.com</p>
                      <p>📍 الدقهلية - بلقاس</p>
                      <p>⏰ يومياً 8:00 ص - 12:00 م</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;