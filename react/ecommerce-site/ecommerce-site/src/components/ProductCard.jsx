import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);

  return (
    <div className="group relative bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-800">
          {product.title}
        </h3>

        {/* Price */}
        <p className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-4">
          {formatPrice(product.price)}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">

          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Add to Cart
          </button>

          <button
            onClick={() => {
              addToCart(product);
              navigate('/checkout');
            }}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Buy Now
          </button>

        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

    </div>
  );
}

export default ProductCard;