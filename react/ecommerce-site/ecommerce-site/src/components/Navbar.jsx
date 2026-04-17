import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav
      className={`backdrop-blur-xl shadow-lg border-b border-white/10 transition-all duration-500 ${
        darkMode
          ? "bg-black/40 text-white"
          : "bg-white/30 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-300"
          >
            Shopify
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">

            <Link
              to="/"
              className="hover:opacity-70 transition"
            >
              Home
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative group hover:scale-110 transition-transform"
            >
              <FaShoppingCart size={22} />

              {/* Badge */}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full shadow-lg animate-pulse">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 pb-4 pt-2">

            <Link
              className="hover:opacity-70 transition"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              className="hover:opacity-70 transition"
              to="/cart"
              onClick={() => setIsOpen(false)}
            >
              Cart ({cart.length})
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md w-fit"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;