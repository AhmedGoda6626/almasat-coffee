import React from 'react';
import { useStore } from '../store/useStore';
import AdminPanel from '../components/AdminPanel';
import { motion } from 'framer-motion';

const AdminPage: React.FC = () => {
  const { currentUser } = useStore();

  // Check if user has admin privileges
  const isAdmin = currentUser?.role === 'admin' || currentUser?.role === 'manager';
  
  if (!isAdmin) {
    return (
      <motion.div 
        className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ غير مصرح</h2>
          <p className="text-gray-600 dark:text-gray-300">
            ليس لديك صلاحية للوصول إلى لوحة الإدارة
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AdminPanel />
    </motion.div>
  );
};

export default AdminPage;