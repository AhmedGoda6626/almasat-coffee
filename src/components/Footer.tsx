import React from 'react';
import { Phone, Instagram, Facebook, Music } from "lucide-react";
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('مرحباً! أريد الاستفسار عن منتجاتكم في محمصة الماسة 🌟');
    window.open(`https://wa.me/01098981616?text=${message}`, '_blank');
  };

  const handleInstagramVisit = () => {
    window.open('https://www.instagram.com/roasteryalmasah/', '_blank');
  };

  const handleFacebookVisit = () => {
    window.open('https://www.facebook.com/AlmasahRoastery', '_blank');
  };

  const handleTikTokVisit = () => {
    window.open('https://www.tiktok.com/@almasahroastery', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brown-800 dark:bg-gray-900 text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-4 space-x-reverse mb-6">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-xl text-white">☕</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">محمصة الماسة</h3>
                <p className="text-gold-200">Almasat Roastery</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              نقدم لك أجود أنواع القهوة والمشروبات الساخنة والباردة في أجواء مميزة. 
              أكثر من 52 نوع مشروب مختلف لتناسب جميع الأذواق.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <motion.button
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 p-3 rounded-lg transition-colors"
                aria-label="واتساب"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                onClick={handleInstagramVisit}
                className="bg-pink-500 hover:bg-pink-600 p-3 rounded-lg transition-colors"
                aria-label="إنستجرام"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                onClick={handleFacebookVisit}
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                aria-label="فيسبوك"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                onClick={handleTikTokVisit}
                className="bg-gray-700 hover:bg-gray-800 p-3 rounded-lg transition-colors"
                aria-label="تيك توك"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Music className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-gold-300">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <motion.button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  الرئيسية
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  قائمة المشروبات
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  عن المحمصة
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  التواصل
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('cart')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  سلة المشروبات
                </motion.button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-gold-300">معلومات التواصل</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 space-x-reverse"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span className="text-lg text-gold-400">📞</span>
                <div>
                  <p className="text-gray-300" dir="ltr">010 9898 1616</p>
                  <p className="text-sm text-gray-400">للطلبات والاستفسارات</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 space-x-reverse"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <span className="text-lg text-gold-400">📍</span>
                <div>
                  <p className="text-gray-300">الدقهلية - بلقاس</p>
                  <p className="text-sm text-gray-400">جمهورية مصر العربية</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 space-x-reverse"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <span className="text-lg text-gold-400">☕</span>
                <div>
                  <p className="text-gray-300">السبت - الخميس</p>
                  <p className="text-sm text-gray-400">8:00 ص - 12:00 م</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-brown-700 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} محمصة الماسة. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-gold-300 transition-colors"
                whileHover={{ y: -2 }}
              >
                سياسة الخصوصية
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-gold-300 transition-colors"
                whileHover={{ y: -2 }}
              >
                الشروط والأحكام
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-gold-300 transition-colors"
                whileHover={{ y: -2 }}
              >
                خدمة العملاء
              </motion.a>
            </div>
          </div>
          
          {/* Made with love */}
          <motion.div 
            className="text-center mt-6 pt-6 border-t border-brown-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-500 text-sm">
              صُنع بـ <span className="text-red-400">❤️</span> لمحبي القهوة في مصر
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;