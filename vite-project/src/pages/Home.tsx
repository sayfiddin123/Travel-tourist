import React, { useState } from "react"
import SearchFilter from "../components/SearchFilter"
import TourCard from "../components/TourCard"
import { tours, Tour } from "../api/service/tours"
import "../styles/home.css"

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);

  const filteredTours = tours.filter((tour: Tour) =>
    tour.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (priceFilter === 0 || tour.price <= priceFilter)
  );

  return (
    <div className="home">
      <h1>Sayohatlar</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
      <div className="tour-list">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour: Tour) => (
            <TourCard key={tour.id} tour={tour} /> 
          ))
        ) : (
          <p>Sayohat topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default Home;
