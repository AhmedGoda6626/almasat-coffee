import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import DarkModeToggle from './DarkModeToggle';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { getCartItemsCount, currentUser, logout } = useStore();
  const cartItemsCount = getCartItemsCount();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
      }
    } else {
      // Navigate to home page and then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsMobileMenuOpen(false);
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  const isAdmin = currentUser?.role === 'admin' || currentUser?.role === 'manager';

  return (
    <motion.header 
      className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4 space-x-reverse">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold-500 to-brown-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-xl">الماسة</span>
            </div>
            <div className="hidden xs:block">
              <h1 className="text-lg sm:text-xl font-bold text-brown-800 dark:text-brown-200">محمصة الماسة</h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Almasat Roastery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 space-x-reverse">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors px-2 py-1"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors px-2 py-1"
            >
              القائمة
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors px-2 py-1"
            >
              عن المحمصة
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors px-2 py-1"
            >
              التواصل
            </button>
            {isAdmin && (
              <Link
                to="/admin"
                className="text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors px-2 py-1 flex items-center gap-1"
              >
                <span>🔧</span>
                <span>الإدارة</span>
              </Link>
            )}
          </nav>

          {/* Contact Info & Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 space-x-reverse">
            {/* Contact Info - Hidden on smaller screens */}
            <div className="hidden xl:flex items-center space-x-2 space-x-reverse text-sm text-brown-600 dark:text-brown-300">
              <span className="text-sm">📞</span>
              <span dir="ltr">010 9898 1616</span>
            </div>
            <div className="hidden 2xl:flex items-center space-x-2 space-x-reverse text-sm text-brown-600 dark:text-brown-300">
              <span className="text-sm">📍</span>
              <span>الدقهلية - بلقاس</span>
            </div>
            
            {/* User Info */}
            {currentUser && (
              <div className="hidden lg:flex items-center space-x-2 space-x-reverse text-sm">
                <span className="text-brown-600 dark:text-brown-300">مرحباً، {currentUser.username}</span>
                {isAdmin && (
                  <span className="bg-gold-100 dark:bg-gold-900 text-gold-700 dark:text-gold-300 px-2 py-1 rounded-full text-xs">
                    {currentUser.role === 'admin' ? 'مدير' : 'مشرف'}
                  </span>
                )}
              </div>
            )}
            
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
            
            {/* Logout Button */}
            {currentUser && (
              <button
                onClick={handleLogout}
                className="hidden lg:flex bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
              >
                تسجيل الخروج
              </button>
            )}
            
            {/* Cart Button */}
            <button
              onClick={handleCartClick}
              className="relative bg-gold-500 hover:bg-gold-600 text-white p-2 sm:p-2.5 rounded-lg transition-colors"
            >
              <span className="text-base sm:text-lg">🛒</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-bold">
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 p-2 transition-colors"
            >
              <span className={`block text-xl transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
                {isMobileMenuOpen ? '✖️' : '☰'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div 
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          initial={false}
          animate={{ 
            maxHeight: isMobileMenuOpen ? 320 : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
            marginTop: isMobileMenuOpen ? 16 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-right text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-right text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              القائمة
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-right text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              عن المحمصة
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-right text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              التواصل
            </button>
            {isAdmin && (
              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-right text-brown-700 dark:text-brown-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                🔧 الإدارة
              </Link>
            )}
            
            {/* User Info and Logout in Mobile Menu */}
            {currentUser && (
              <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
                <div className="text-center text-sm text-brown-600 dark:text-brown-300 mb-2">
                  مرحباً، {currentUser.username}
                  {isAdmin && (
                    <span className="block bg-gold-100 dark:bg-gold-900 text-gold-700 dark:text-gold-300 px-2 py-1 rounded-full text-xs mt-1 mx-auto w-fit">
                      {currentUser.role === 'admin' ? 'مدير' : 'مشرف'}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg text-sm transition-colors"
                >
                  تسجيل الخروج
                </button>
              </div>
            )}
            
            {/* Contact Info in Mobile Menu */}
            <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-brown-600 dark:text-brown-300 mb-2">
                <span className="text-sm">📞</span>
                <span dir="ltr">010 9898 1616</span>
              </div>
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-brown-600 dark:text-brown-300">
                <span className="text-sm">📍</span>
                <span>الدقهلية - بلقاس</span>
              </div>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;