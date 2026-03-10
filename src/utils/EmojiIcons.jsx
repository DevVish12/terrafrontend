// Simple emoji-based icons to replace lucide-react
// This makes the project easier to understand without complex icon libraries

const EmojiIcons = {
  // Navigation & Menu
  Menu: () => <span className="text-2xl">☰</span>,
  X: () => <span className="text-2xl">✕</span>,
  Home: () => <span className="text-2xl">🏠</span>,

  // Shopping & Delivery
  ShoppingBag: () => <span className="text-2xl">🛍️</span>,
  Truck: () => <span className="text-2xl">🚚</span>,

  // Food & Dining
  UtensilsCrossed: () => <span className="text-2xl">🍽️</span>,
  Gift: () => <span className="text-2xl">🎁</span>,

  // Contact & Info
  Mail: () => <span className="text-2xl">✉️</span>,
  Phone: () => <span className="text-2xl">📞</span>,
  MapPin: () => <span className="text-2xl">📍</span>,
  Clock: () => <span className="text-2xl">🕐</span>,

  // Actions
  Search: () => <span className="text-2xl">🔍</span>,
  Send: () => <span className="text-2xl">📤</span>,

  // Ratings & Status
  Star: () => <span className="text-2xl">⭐</span>,
  Heart: () => <span className="text-2xl">❤️</span>,

  // People & Teams
  Users: () => <span className="text-2xl">👥</span>,

  // Beverages
  Wine: () => <span className="text-2xl">🍷</span>,

  // Navigation Arrows
  ChevronLeft: () => <span className="text-2xl">◀</span>,
  ChevronRight: () => <span className="text-2xl">▶</span>,
  ChevronDown: () => <span className="text-2xl">▼</span>,
  ArrowRight: () => <span className="text-2xl">→</span>,

  // Lists & Tasks
  ClipboardList: () => <span className="text-2xl">📋</span>,
  Hand: () => <span className="text-2xl">✋</span>,
  Wallet: () => <span className="text-2xl">💳</span>,
  Award: () => <span className="text-2xl">🏆</span>,

  // Social Media
  Facebook: () => <span className="text-2xl">f</span>, // Will style as Facebook logo
  Instagram: () => <span className="text-2xl">📷</span>,
  Twitter: () => <span className="text-2xl">𝕏</span>,
  Youtube: () => <span className="text-2xl">▶️</span>,
};

export default EmojiIcons;
