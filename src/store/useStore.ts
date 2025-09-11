import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { StoreState, Drink, AdminUser, PriceHistory, User } from '../types';
import { drinks } from '../data/drinks';

// Admin credentials (in production, this should be handled securely)
const ADMIN_CREDENTIALS = {
  admin: 'admin123',
  manager: 'manager123'
};

// Simulated user database (in production, this would be a real database)
const USERS_DB: Array<{username: string, email: string, password: string, role: 'user' | 'admin' | 'manager'}> = [
  { username: 'admin', email: 'admin@almasat.com', password: 'admin123', role: 'admin' },
  { username: 'manager', email: 'manager@almasat.com', password: 'manager123', role: 'manager' }
];

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      drinks,
      cart: [],
      searchTerm: '',
      selectedCategory: 'all',
      selectedBranch: 'new-cairo',
      isDarkMode: false,
      
      // User authentication state
      currentUser: null,
      isAuthenticated: false,
      
      // Admin state
      adminUser: null,
      priceHistory: [],
      isAdminMode: false,

      addToCart: (drink: Drink) => {
        const cart = get().cart;
        const existingItem = cart.find(item => item.drink.id === drink.id);
        
        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.drink.id === drink.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({
            cart: [...cart, { drink, quantity: 1 }]
          });
        }
      },

      removeFromCart: (drinkId: string) => {
        set({
          cart: get().cart.filter(item => item.drink.id !== drinkId)
        });
      },

      updateQuantity: (drinkId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(drinkId);
          return;
        }
        
        set({
          cart: get().cart.map(item =>
            item.drink.id === drinkId
              ? { ...item, quantity }
              : item
          )
        });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      setSearchTerm: (term: string) => {
        set({ searchTerm: term });
      },

      setSelectedCategory: (category: 'all' | 'hot' | 'cold' | 'icecream') => {
        set({ selectedCategory: category });
      },

      setSelectedBranch: (branch: 'new-cairo' | 'shorouk') => {
        set({ selectedBranch: branch });
      },

      toggleDarkMode: () => {
        const newDarkMode = !get().isDarkMode;
        set({ isDarkMode: newDarkMode });
        
        // Update the HTML class for Tailwind CSS dark mode
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },

      // Initialize dark mode from localStorage on app start
      initializeDarkMode: () => {
        const isDarkMode = get().isDarkMode;
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },

      getCartTotal: () => {
        return get().cart.reduce((total, item) => {
          return total + (item.drink.price * item.quantity);
        }, 0);
      },

      getCartItemsCount: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
      
      // Authentication actions
      login: (email: string, password: string) => {
        const user = USERS_DB.find(u => u.email === email && u.password === password);
        if (user) {
          const currentUser: User = {
            id: `user-${Date.now()}`,
            username: user.username,
            email: user.email,
            role: user.role,
            isAuthenticated: true,
            createdAt: new Date().toISOString()
          };
          
          set({ currentUser, isAuthenticated: true });
          
          // If admin/manager, also set admin state
          if (user.role === 'admin' || user.role === 'manager') {
            const adminUser: AdminUser = {
              id: currentUser.id,
              username: user.username,
              role: user.role as 'admin' | 'manager',
              isAuthenticated: true
            };
            set({ adminUser });
          }
          
          return true;
        }
        return false;
      },
      
      register: (username: string, email: string, password: string) => {
        // Check if user already exists
        const existingUser = USERS_DB.find(u => u.email === email || u.username === username);
        if (existingUser) {
          return false; // User already exists
        }
        
        // Add new user to simulated database
        const newUser = { username, email, password, role: 'user' as const };
        USERS_DB.push(newUser);
        
        // Auto-login the new user
        const currentUser: User = {
          id: `user-${Date.now()}`,
          username,
          email,
          role: 'user',
          isAuthenticated: true,
          createdAt: new Date().toISOString()
        };
        
        set({ currentUser, isAuthenticated: true });
        return true;
      },
      
      logout: () => {
        set({ 
          currentUser: null, 
          isAuthenticated: false, 
          adminUser: null, 
          isAdminMode: false 
        });
      },
      
      // Admin actions
      adminLogin: (username: string, password: string) => {
        const validPassword = ADMIN_CREDENTIALS[username as keyof typeof ADMIN_CREDENTIALS];
        if (validPassword && validPassword === password) {
          const adminUser: AdminUser = {
            id: `admin-${Date.now()}`,
            username,
            role: username as 'admin' | 'manager',
            isAuthenticated: true
          };
          set({ adminUser, isAdminMode: true });
          return true;
        }
        return false;
      },
      
      adminLogout: () => {
        set({ adminUser: null, isAdminMode: false });
      },
      
      toggleAdminMode: () => {
        const { adminUser } = get();
        if (adminUser?.isAuthenticated) {
          set({ isAdminMode: !get().isAdminMode });
        }
      },
      
      addDrink: (drinkData) => {
        const newDrink: Drink = {
          ...drinkData,
          id: `drink-${Date.now()}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isAvailable: drinkData.isAvailable ?? true
        };
        
        set({
          drinks: [...get().drinks, newDrink]
        });
      },
      
      updateDrink: (drinkId: string, updates: Partial<Drink>) => {
        set({
          drinks: get().drinks.map(drink =>
            drink.id === drinkId
              ? { ...drink, ...updates, updatedAt: new Date().toISOString() }
              : drink
          )
        });
      },
      
      deleteDrink: (drinkId: string) => {
        set({
          drinks: get().drinks.filter(drink => drink.id !== drinkId),
          cart: get().cart.filter(item => item.drink.id !== drinkId)
        });
      },
      
      updatePrice: (drinkId: string, newPrice: number, reason?: string) => {
        const { drinks, adminUser } = get();
        const drink = drinks.find(d => d.id === drinkId);
        
        if (drink && adminUser) {
          const priceHistoryEntry: PriceHistory = {
            id: `price-${Date.now()}`,
            drinkId,
            oldPrice: drink.price,
            newPrice,
            changedBy: adminUser.username,
            changedAt: new Date().toISOString(),
            reason
          };
          
          set({
            drinks: drinks.map(d =>
              d.id === drinkId
                ? { ...d, price: newPrice, updatedAt: new Date().toISOString() }
                : d
            ),
            priceHistory: [...get().priceHistory, priceHistoryEntry]
          });
        }
      },
      
      toggleAvailability: (drinkId: string) => {
        set({
          drinks: get().drinks.map(drink =>
            drink.id === drinkId
              ? { ...drink, isAvailable: !drink.isAvailable, updatedAt: new Date().toISOString() }
              : drink
          )
        });
      },
      
      getPriceHistory: (drinkId?: string) => {
        const { priceHistory } = get();
        return drinkId
          ? priceHistory.filter(entry => entry.drinkId === drinkId)
          : priceHistory;
      },
    }),
    {
      name: 'almasat-coffee-store',
      partialize: (state) => ({ 
        cart: state.cart, 
        selectedBranch: state.selectedBranch, 
        isDarkMode: state.isDarkMode,
        drinks: state.drinks,
        priceHistory: state.priceHistory,
        currentUser: state.currentUser,
        isAuthenticated: state.isAuthenticated,
        adminUser: state.adminUser,
        isAdminMode: state.isAdminMode
      }),
    }
  )
);