import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, clearCart, total } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully! Total: ${formatPrice(total)}`);
    clearCart();
    navigate('/');
  };

  return (
    <div className="py-12 max-w-3xl mx-auto px-4">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        Checkout
      </h1>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/40 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 space-y-5"
      >

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full p-3 rounded-xl bg-white/70 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full p-3 rounded-xl bg-white/70 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />

        {/* Address */}
        <textarea
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full p-3 h-32 rounded-xl bg-white/70 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          required
        />

        {/* Total */}
        <div className="text-right bg-white/50 p-4 rounded-xl border border-white/20">
          <p className="text-2xl font-bold">
            Total: <span className="text-indigo-600">{formatPrice(total)}</span>
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600
          text-white py-3 rounded-xl font-bold hover:scale-[1.02]
          transition-transform duration-300 shadow-lg"
        >
          Place Order
        </button>

      </form>
    </div>
  );
}

export default Checkout;