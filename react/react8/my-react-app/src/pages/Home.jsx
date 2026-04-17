import React, { useState, useEffect } from "react";
import {
  fetchMeals,
  fetchCategories,
  fetchByCategory,
} from "../api";

import MealCard from "../components/MealCard";
import CategoryList from "../components/CategoryList";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data.categories || []);
  };

  const loadDefaultMeals = async () => {
    const data = await fetchMeals("chicken"); // default
    setMeals(data.meals || []);
  };

  const handleSearch = async () => {
    if (!search) return loadDefaultMeals();
    const data = await fetchMeals(search);
    setMeals(data.meals || []);
  };

  const handleCategory = async (category) => {
    const data = await fetchByCategory(category);
    setMeals(data.meals || []);
  };

  useEffect(() => {
    (async () => {
      await loadCategories();
      await loadDefaultMeals();
    })();
  }, []);

  return (
    <div className="container">
      <h1>🍴 Food Recipe Website</h1>

      {/* 🔍 Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* 📂 Categories */}
      <h2>Categories</h2>
      <CategoryList categories={categories} onSelect={handleCategory} />

      {/* 🍽️ Meals */}
      <div className="meal-grid">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
};

export default Home;