import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import DarkModeToggle from '../components/DarkModeToggle';
import { motion } from 'framer-motion';

// Define the type for location state
interface LocationState {
  from?: string;
}

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { login, register } = useStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        // Login
        const success = login(formData.email, formData.password);
        if (!success) {
          setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
        } else {
          // Login successful, navigate to the page they came from or homepage
          const from = (location.state as LocationState)?.from || '/';
          navigate(from, { replace: true });
        }
      } else {
        // Register
        if (formData.password !== formData.confirmPassword) {
          setError('كلمة المرور وتأكيد كلمة المرور غير متطابقتين');
          return;
        }
        
        if (formData.password.length < 6) {
          setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
          return;
        }

        const success = register(formData.username, formData.email, formData.password);
        if (!success) {
          setError('المستخدم موجود بالفعل');
        } else {
          // Registration successful, navigate to homepage
          const from = (location.state as LocationState)?.from || '/';
          navigate(from, { replace: true });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-brown-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <motion.div 
        className="absolute top-4 left-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <DarkModeToggle />
      </motion.div>
      
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo and Welcome */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-gold-500 to-brown-400 rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <span className="text-white font-bold text-2xl">الماسة</span>
          </motion.div>
          <h1 className="text-3xl font-bold text-brown-800 dark:text-brown-200 mb-2">
            محمصة الماسة
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {isLogin ? 'مرحباً بعودتك! يرجى تسجيل الدخول' : 'انضم إلينا واستمتع بأفضل المشروبات'}
          </p>
        </motion.div>

        {/* Auth Form */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex mb-6">
            <motion.button
              onClick={() => {
                setIsLogin(true);
                setError('');
                setFormData({ username: '', email: '', password: '', confirmPassword: '' });
              }}
              className={`flex-1 py-3 text-center font-medium transition-all duration-200 ${
                isLogin
                  ? 'text-gold-600 border-b-2 border-gold-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gold-500'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              تسجيل الدخول
            </motion.button>
            <motion.button
              onClick={() => {
                setIsLogin(false);
                setError('');
                setFormData({ username: '', email: '', password: '', confirmPassword: '' });
              }}
              className={`flex-1 py-3 text-center font-medium transition-all duration-200 ${
                !isLogin
                  ? 'text-gold-600 border-b-2 border-gold-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gold-500'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              إنشاء حساب
            </motion.button>
          </div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="اسم المستخدم"
                  required={!isLogin}
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="البريد الإلكتروني"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="كلمة المرور"
                required
              />
            </motion.div>

            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  تأكيد كلمة المرور
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="تأكيد كلمة المرور"
                  required={!isLogin}
                />
              </motion.div>
            )}

            {error && (
              <motion.div 
                className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-4 rounded-lg font-bold transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin mr-2">⏳</span>
                  {isLogin ? 'جاري تسجيل الدخول...' : 'جاري إنشاء الحساب...'}
                </span>
              ) : (
                isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'
              )}
            </motion.button>
          </motion.form>

          {/* Demo Accounts Info */}
          <motion.div 
            className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="font-bold text-sm text-blue-800 dark:text-blue-300 mb-2">
              📋 حسابات التجربة:
            </h3>
            <div className="text-xs text-blue-700 dark:text-blue-400 space-y-1">
              <div><strong>مدير النظام:</strong> admin@almasat.com / admin123</div>
              <div><strong>مشرف:</strong> manager@almasat.com / manager123</div>
              <div className="text-blue-600 dark:text-blue-300 mt-2">
                💡 أو قم بإنشاء حساب جديد كمستخدم عادي
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <p>محمصة الماسة © 2024</p>
          <p>جميع الحقوق محفوظة</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;