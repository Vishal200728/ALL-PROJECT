import { useState, useEffect } from 'react'

function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Placeholder - will implement API calls next
  useEffect(() => {
    // Fetch random meal as demo
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        setMeals(data.meals || [])
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch meals')
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="flex items-center justify-center min-h-screen text-white text-xl">Loading...</div>
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-300 text-xl">{error}</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-300 to-purple-600 p-8">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">🍽️ Food Explorer</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">Discover delicious meals from around the world using TheMealDB API</p>
      </header>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/30">
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal} 
                className="w-full h-64 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{meal.strMeal}</h3>
              <p className="text-white/80 mb-4">{meal.strArea} • {meal.strCategory}</p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg">
                View Recipe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
