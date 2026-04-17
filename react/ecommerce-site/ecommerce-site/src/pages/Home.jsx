import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // 🧊 Skeleton Loader
  const SkeletonCard = () => (
    <div className="animate-pulse bg-white/30 backdrop-blur-xl rounded-2xl p-4 h-80 shadow-md">
      <div className="bg-gray-300 h-40 rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );

  if (loading) {
    return (
      <div className="py-12 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>
    </div>
  );
}

export default Home;