import React, { useState } from "react"
import { tours } from "../api/service/tours"
import TourCard from "../components/TourCard"
import '../styles/tours.css'

const Tours: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Barchasi");

  const categories = ["Barchasi", ...new Set(tours.map((tour) => tour.category))];

  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "Barchasi" || tour.category === category)
  );

  return (
    <div className="tours-container">
      <h1>Sayohatlar</h1>

      <input
        type="text"
        placeholder="Sayohat nomini qidiring..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)} className="filter-select">
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="tour-list">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <p>Sayohat topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default Tours;
