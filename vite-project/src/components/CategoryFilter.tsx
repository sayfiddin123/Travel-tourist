import React from "react"
import { Category } from "../types/Category"
import "../styles/categoryFilter.css"

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="category-filter">
      <button
        className={selectedCategory === "" ? "active" : ""}
        onClick={() => onSelectCategory("")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={selectedCategory === category.name ? "active" : ""}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
