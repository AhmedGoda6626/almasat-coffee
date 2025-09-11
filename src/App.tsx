import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import AuthPage from './pages/AuthPage';
import Footer from './components/Footer';
import FloatingCartButton from './components/FloatingCartButton';
import './index.css';

function App() {
  const { initializeDarkMode, isAdminMode, isAuthenticated } = useStore();

  // Initialize dark mode on app load
  useEffect(() => {
    initializeDarkMode();
  }, [initializeDarkMode]);

  // If user is not authenticated, show auth page
  if (!isAuthenticated) {
    return (
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            <Route path="*" element={<AuthPage />} />
          </Routes>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {!isAdminMode && <Header />}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        {!isAdminMode && <Footer />}
        
        {/* Floating Cart Button */}
        {!isAdminMode && <FloatingCartButton />}
      </div>
    </Router>
  );
}

export default App;
