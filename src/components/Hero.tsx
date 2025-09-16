import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center text-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center md:text-right order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              محمصة الماسة
            </motion.h1>
            <motion.p 
              className="text-lg xs:text-xl sm:text-2xl mb-3 sm:mb-4 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              تجربة قهوة لا تُنسى
            </motion.p>
            <motion.p 
              className="text-sm xs:text-base sm:text-lg mb-6 sm:mb-8 opacity-80 leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              نقدم لك أجود أنواع القهوة والمشروبات الساخنة والباردة في أجواء مميزة
              <br className="hidden sm:block" />
              مع أكثر من 52 نوع مشروب مختلف
            </motion.p>
            
            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse py-2">
                <span className="text-lg sm:text-xl text-gold-300">☕</span>
                <span className="text-sm sm:text-base">قهوة طازجة يومياً</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse py-2">
                <span className="text-lg sm:text-xl text-gold-300">⭐</span>
                <span className="text-sm sm:text-base">جودة عالية</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse py-2">
                <span className="text-lg sm:text-xl text-gold-300">⏰</span>
                <span className="text-sm sm:text-base">خدمة سريعة</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToMenu}
                className="bg-gold-500 hover:bg-gold-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                استعرض القائمة
              </motion.button>
              <motion.a
                href="tel:01098981616"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-brown-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اطلب الآن
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image/Decoration */}
          <motion.div 
            className="text-center order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div 
                className="w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-6xl xs:text-7xl sm:text-9xl text-gold-300">☕</span>
              </motion.div>
              <motion.div 
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-8 sm:h-8 bg-gold-400 rounded-full animate-pulse"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-3 h-3 sm:w-6 sm:h-6 bg-gold-300 rounded-full animate-pulse delay-1000"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 -left-4 sm:-left-8 w-2 h-2 sm:w-4 sm:h-4 bg-gold-200 rounded-full animate-pulse delay-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div>
            <div className="text-xl sm:text-3xl font-bold text-gold-300">52+</div>
            <div className="text-xs sm:text-sm opacity-80">نوع مشروب</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-gold-300">100%</div>
            <div className="text-xs sm:text-sm opacity-80">قهوة طازجة</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-gold-300">24/7</div>
            <div className="text-xs sm:text-sm opacity-80">خدمة العملاء</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-gold-300">5⭐</div>
            <div className="text-xs sm:text-sm opacity-80">تقييم العملاء</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;