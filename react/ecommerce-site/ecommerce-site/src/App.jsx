import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';

function AppWrapper() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black"
      }
    >
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />

      {/* Animated Pages */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AnimatePresence>

      {/* Glassmorphism Cart Sidebar (ready) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 backdrop-blur-xl bg-white/30 dark:bg-black/40 shadow-2xl transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 font-bold text-lg border-b border-white/20">
          Your Cart
        </div>

        {/* You can render cart items here */}
        <div className="p-4">
          Cart Content Here...
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppWrapper />
      </Router>
    </CartProvider>
  );
}