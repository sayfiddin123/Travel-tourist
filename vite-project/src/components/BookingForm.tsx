import React, { useState } from "react"
import "../styles/bookingForm.css"

interface BookingFormProps {
  tourName: string;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ tourName, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const bookingData = { name, phone, tourName };
    
    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    existingBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));
    
    console.log("Yangi buyurtma:", bookingData);

    alert("Buyurtmangiz qabul qilindi!");
    onClose();
  };

  return (
    <div className="booking-modal">
      <div className="booking-content">
        <h2>{tourName} uchun buyurtma</h2>
        <form onSubmit={handleSubmit}>
          <label>Ismingiz:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Telefon raqamingiz:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <button type="submit">Buyurtma berish</button>
          <button type="button" className="close-btn" onClick={onClose}>Bekor qilish</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
