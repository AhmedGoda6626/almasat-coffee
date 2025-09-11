export interface Drink {
  id: string;
  name: string;
  price: number;
  category: 'hot' | 'cold' | 'icecream';
  description?: string;
  image?: string;
  ingredients?: string[];
  isAvailable?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  drink: Drink;
  quantity: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin' | 'manager';
  isAuthenticated: boolean;
  createdAt: string;
}

export interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'manager';
  isAuthenticated: boolean;
}

export interface PriceHistory {
  id: string;
  drinkId: string;
  oldPrice: number;
  newPrice: number;
  changedBy: string;
  changedAt: string;
  reason?: string;
}

export interface StoreState {
  drinks: Drink[];
  cart: CartItem[];
  searchTerm: string;
  selectedCategory: 'all' | 'hot' | 'cold' | 'icecream';
  selectedBranch: 'new-cairo' | 'shorouk';
  isDarkMode: boolean;
  
  // User authentication state
  currentUser: User | null;
  isAuthenticated: boolean;
  
  // Admin state
  adminUser: AdminUser | null;
  priceHistory: PriceHistory[];
  isAdminMode: boolean;
  
  // Cart actions
  addToCart: (drink: Drink) => void;
  removeFromCart: (drinkId: string) => void;
  updateQuantity: (drinkId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Filter actions
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: 'all' | 'hot' | 'cold' | 'icecream') => void;
  setSelectedBranch: (branch: 'new-cairo' | 'shorouk') => void;
  
  // Theme actions
  toggleDarkMode: () => void;
  initializeDarkMode: () => void;
  
  // Utility actions
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  
  // Authentication actions
  login: (email: string, password: string) => boolean;
  register: (username: string, email: string, password: string) => boolean;
  logout: () => void;
  
  // Admin actions
  adminLogin: (username: string, password: string) => boolean;
  adminLogout: () => void;
  toggleAdminMode: () => void;
  addDrink: (drink: Omit<Drink, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateDrink: (drinkId: string, updates: Partial<Drink>) => void;
  deleteDrink: (drinkId: string) => void;
  updatePrice: (drinkId: string, newPrice: number, reason?: string) => void;
  toggleAvailability: (drinkId: string) => void;
  getPriceHistory: (drinkId?: string) => PriceHistory[];
}