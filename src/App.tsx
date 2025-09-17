import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useStore } from './store/useStore';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import AuthPage from './pages/AuthPage';
import Footer from './components/Footer';
import FloatingCartButton from './components/FloatingCartButton';
import './index.css';
import { AnimatePresence } from 'framer-motion';

// Wrapper component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const { isAdminMode } = useStore();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            {!isAdminMode && <Header />}
            <main>
              <HomePage />
            </main>
            {!isAdminMode && <Footer />}
            {!isAdminMode && <FloatingCartButton />}
          </div>
        } />
        <Route path="/cart" element={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            {!isAdminMode && <Header />}
            <main>
              <CartPage />
            </main>
            {!isAdminMode && <Footer />}
            {!isAdminMode && <FloatingCartButton />}
          </div>
        } />
        <Route path="/admin" element={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <AdminPage />
          </div>
        } />
        <Route path="/auth" element={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <AuthPage />
          </div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { initializeDarkMode } = useStore();

  // Initialize dark mode on app load
  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  // Removed global authentication check to allow public browsing

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;