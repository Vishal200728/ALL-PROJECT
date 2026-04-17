import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);

  return (
    <div className="py-12 max-w-5xl mx-auto px-4">

      {/* Back Link */}
      <Link
        to="/"
        className="mb-8 inline-block text-blue-500 hover:underline"
      >
        ← Continue Shopping
      </Link>

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT: CART ITEMS */}
          <ul className="flex-1 space-y-4">

            {cart.map((item) => (
              <li
                key={item.id}
                className="group flex items-center gap-4 p-5 rounded-2xl
                bg-white/40 backdrop-blur-xl border border-white/20
                shadow-md hover:shadow-xl transition-all duration-300"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-xl group-hover:scale-105 transition"
                />

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-semibold line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 font-medium">
                    {formatPrice(item.price)}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2">

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  >
                    +
                  </button>

                </div>

                {/* Price + Remove */}
                <div className="text-right min-w-[100px]">

                  <p className="font-bold text-indigo-600">
                    {formatPrice(item.price * item.quantity)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:text-red-700 transition"
                  >
                    Remove
                  </button>

                </div>

              </li>
            ))}

          </ul>

          {/* RIGHT: SUMMARY */}
          <div className="w-full lg:w-80">

            <div className="sticky top-20 p-6 rounded-2xl
              bg-white/40 backdrop-blur-xl border border-white/20
              shadow-lg">

              <h2 className="text-xl font-bold mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-semibold">
                  {formatPrice(total)}
                </span>
              </div>

              <div className="flex justify-between mb-4 text-sm text-gray-500">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-4 opacity-30" />

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span className="text-indigo-600">
                  {formatPrice(total)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl hover:scale-105 transition"
              >
                Proceed to Checkout
              </Link>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;