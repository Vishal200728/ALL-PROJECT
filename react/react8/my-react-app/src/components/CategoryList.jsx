import React from "react";

const CategoryList = ({ categories, onSelect }) => {
  return (
    <div className="category-list">
      {categories.map((cat) => (
        <button
          key={cat.idCategory}
          onClick={() => onSelect(cat.strCategory)}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;