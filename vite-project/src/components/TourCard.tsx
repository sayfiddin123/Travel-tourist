import React from "react"
import { Tour } from "../api/service/tours"
import "../styles/tourcard.css"

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.name} />
      <h3>{tour.name}</h3>
      <p>{tour.location}</p>
      <p>{tour.price} USD</p>
      <button>Buyurtma berish</button>
    </div>
  );
};

export default TourCard;
