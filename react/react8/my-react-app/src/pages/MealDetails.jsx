import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../api";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMealById(id).then((data) => {
      setMeal(data.meals[0]);
    });
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  // 🥗 Extract ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        name: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="details">
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} width="300" />

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>
            {ing.name} - {ing.measure}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{meal.strInstructions}</p>

      {/* 🎥 YouTube Video */}
      <h2>Video Tutorial</h2>
      <iframe
        width="560"
        height="315"
        src={meal.strYoutube.replace("watch?v=", "embed/")}
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MealDetails;