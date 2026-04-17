import React from "react";
import { useNavigate } from "react-router-dom";

const MealCard = ({ meal }) => {
  const navigate = useNavigate();

  return (
    <div
      className="meal-card"
      onClick={() => navigate(`/meal/${meal.idMeal}`)}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
    </div>
  );
};

export default MealCard;