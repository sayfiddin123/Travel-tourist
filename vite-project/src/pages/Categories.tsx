import React, { useState } from "react"
import { tours } from "../api/service/tours"
import { categories } from "../api/service/categories"
import TourCard from "../components/TourCard"
import CategoryFilter from "../components/CategoryFilter"
import "../styles/categories.css";

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredTours = selectedCategory
    ? tours.filter((tour) => tour.category === selectedCategory)
    : tours;

  return (
    <div className="categories-container">
      <h1>Choose Your Destination</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="tours-grid">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <p>No tours found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
