import React, { useState, useEffect } from "react"
import "../styles/bookings.css"

interface Booking {
  name: string;
  phone: string;
  tourName: string;
}

const Bookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(storedBookings);
  }, []);

  return (
    <div className="bookings">
      <h2>Barcha Buyurtmalar</h2>
      {bookings.length === 0 ? (
        <p>Hali buyurtmalar yo‘q</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <strong>{booking.tourName}</strong> - {booking.name} ({booking.phone})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookings;
