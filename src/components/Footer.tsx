import React from 'react';

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
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-xl text-white">☕</span>
              </div>
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
              <button
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 p-3 rounded-lg transition-colors"
                aria-label="واتساب"
              >
                <span className="text-lg">💬</span>
              </button>
              <button
                onClick={handleInstagramVisit}
                className="bg-pink-500 hover:bg-pink-600 p-3 rounded-lg transition-colors"
                aria-label="إنستجرام"
              >
                <span className="text-lg">📸</span>
              </button>
              <button
                onClick={handleFacebookVisit}
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                aria-label="فيسبوك"
              >
                <span className="text-lg">👥</span>
              </button>
              <button
                onClick={handleTikTokVisit}
                className="bg-gray-700 hover:bg-gray-800 p-3 rounded-lg transition-colors"
                aria-label="تيك توك"
              >
                <span className="text-lg">🎤</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-300">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                >
                  قائمة المشروبات
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                >
                  عن المحمصة
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                >
                  التواصل
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cart')}
                  className="text-gray-300 hover:text-gold-300 transition-colors"
                >
                  سلة المشروبات
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-300">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <span className="text-lg text-gold-400">📞</span>
                <div>
                  <p className="text-gray-300" dir="ltr">010 9898 1616</p>
                  <p className="text-sm text-gray-400">للطلبات والاستفسارات</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <span className="text-lg text-gold-400">📍</span>
                <div>
                  <p className="text-gray-300">الدقهلية - بلقاس</p>
                  <p className="text-sm text-gray-400">جمهورية مصر العربية</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <span className="text-lg text-gold-400">☕</span>
                <div>
                  <p className="text-gray-300">السبت - الخميس</p>
                  <p className="text-sm text-gray-400">8:00 ص - 12:00 م</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brown-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} محمصة الماسة. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm text-gray-400">
              <a href="#" className="hover:text-gold-300 transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-gold-300 transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="hover:text-gold-300 transition-colors">
                خدمة العملاء
              </a>
            </div>
          </div>
          
          {/* Made with love */}
          <div className="text-center mt-6 pt-6 border-t border-brown-700">
            <p className="text-gray-500 text-sm">
              صُنع بـ <span className="text-red-400">❤️</span> لمحبي القهوة في مصر
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;