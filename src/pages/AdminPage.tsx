import React from 'react';
import { useStore } from '../store/useStore';
import AdminPanel from '../components/AdminPanel';

const AdminPage: React.FC = () => {
  const { currentUser } = useStore();

  // Check if user has admin privileges
  const isAdmin = currentUser?.role === 'admin' || currentUser?.role === 'manager';
  
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ غير مصرح</h2>
          <p className="text-gray-600 dark:text-gray-300">
            ليس لديك صلاحية للوصول إلى لوحة الإدارة
          </p>
        </div>
      </div>
    );
  }

  return <AdminPanel />;
};

export default AdminPage;