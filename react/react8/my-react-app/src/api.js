const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMeals = async (query) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  return res.json();
};

export const fetchMealById = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  return res.json();
};

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories.php`);
  return res.json();
};

export const fetchByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  return res.json();
};